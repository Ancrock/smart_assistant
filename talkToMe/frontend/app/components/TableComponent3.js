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

class TableComponent3 extends React.Component{
	constructor(props){
		super(props);
		this.state={
			rows: props.data,
			columns: []
		};
		this._columns= [
		{key: "Num", name: "Num"},
		{key: "Acct", name: "Account"},
		{key: "Acct1", name: "Account1"},
		{key: "Type", name: "Type"},
		{key: "Date", name: "Date"},
		{key: "Number", name: "Number"},
		{key: "Name", name: "Name"},
		{key: "Memo", name: "Memo"},
		{key: "Split", name: "Split"},
		{key: "Debit", name: "Debit"},
		{key:"Credit", name:"Credit"}];
		this._columns2 = []
		this.rowGetter = this.rowGetter.bind(this);
		this.createColumns = this.createColumns.bind(this);
	}


	componentDidMount(){
		// console.log(this.props)
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
		// console.log("These are the columns", columns);
	}

	rowGetter(i){
		return(this.state.rows[i]);
	}

	render(){
		// console.log("This is in render", this.state.columns);
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

export default TableComponent3;