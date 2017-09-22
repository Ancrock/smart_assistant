import React from "react";
import ReactDataGrid from "react-data-grid";

const ImageCell = React.createClass({
	render(){
		return(
			<img style={{height:"50px", width: "80px"}}src={this.props.value} />
			);
	}
})

const ColorCell = React.createClass({
	render(){
		let style={backgroundColor:"#" + this.props.value, height: "50px", width: "80px"}
		return(
			<div style={style}></div>
			);
	}
})

class TableComponent2 extends React.Component{
	constructor(props){
		super(props);
		this.state={
			rows: props.data,
			columns: []
		};
		this._columns= [
		{key: "profile_image", name: "Profile image", formatter: ImageCell},
		{key: "rating", name: "rating"},
		{key: "foodie_color", name: "Foodie color", formatter: ColorCell},
		{key: "rating_text", name: "Rating text"},
		{key: "review_id", name: "Review id"},
		{key: "user_level_num", name: "User level"},
		{key: "class_name", name: "Class name"},
		{key: "rating_time_friendly", name: "Rating time friendly"},
		{key: "restaurant_id", name: "Restaurant id"},
		{key: "confidence", name: "Confidence"},
		{key:"review_text", name:"Review text"},
		{key: "user_zomatohandle", name: "User Zomatohandle"},
		{key: "comment_count", name: "Comment count"},
		{key: "score", name: "Score"},
		{key: "likes", name: "Likes"},
		{key: "rating_color", name: "Rating color", formatter: ColorCell},
		{key: "time_stamp", name: "Time stamp"},
		{key: "retrieved_time", name: "Retrieved time"},
		{key: "user_foodie_level", name: "User foodie_level"},
		{key: "profile_url", name: "Profile url"},
		{key: "user_name", name: "User name"}];
		this._columns2 = []
		this.rowGetter = this.rowGetter.bind(this);
		this.createColumns = this.createColumns.bind(this);
	}


	componentDidMount(){
		console.log(this.props)
		this.createColumns();
	}

	componentWillReceiveProps(nextProps){
		this.setState({
			rows: nextProps.data
		}, this.createColumns());
	}

	createColumns(){
		let {columns} = this.state;
		Object.keys(this.state.rows[0]).map(function(data){
			let col= {key: data, name: data + '_I'};
			columns.push(col);
		});
		this.setState({
			columns
		});
		this._columns2 = columns;
		console.log("These are the columns", columns);
	}

	rowGetter(i){
		return(this.state.rows[i]);
	}

	render(){
		console.log("This is in render", this.state.columns);
		return(
			<ReactDataGrid
			columns={this._columns}
			rowGetter={this.rowGetter}
			rowsCount={this.state.rows.length}
			minHeight={500}
			rowHeight={60} />
			);
	}
}

export default TableComponent2;