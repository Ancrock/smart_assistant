import React from "react";
import FixedDataTable from "fixed-data-table-2";
require("fixed-data-table-2/dist/fixed-data-table.css");
const {Table, Column, Cell} = FixedDataTable;

const TextCell = ({rowIndex, data, col, ...props}) => (
  <Cell {...props}>
    {data[rowIndex][col]}
  </Cell>
);

const ImageCell = ({rowIndex, data, col, ...props}) => (
  <Cell {...props}>
    <img style={{height:"50px", width:"50px"}}src={data[rowIndex][col]} />
  </Cell>
);

class TableComponent extends React.Component{
	constructor(props){
		super(props);
		this.state={
			tableData: props.data,
			columns: []
		};
		this.buildColumns = this.buildColumns.bind(this)
	}

	componentDidMount(){
		this.buildColumns();
	}

	componentWillReceiveProps(nextProps){
		this.setState({
			tableData: nextProps.data
		}, this.buildColumns());
	}

	buildColumns(){
		let {columns} = this.state;
		Object.keys(this.state.tableData[0]).map(function(data){
			let col;
			if(data === "profile_image"){
				col = <Column
          		header={<Cell>{data}</Cell>}
          		cell={<ImageCell data={this.state.tableData} col={data} />}
          		fixed={false}
          		width={50}
        		/>
			} else{
				col = <Column
          			header={<Cell>{data}</Cell>}
          			cell={<TextCell data={this.state.tableData} col={data} />}
          			fixed={false}
          			width={100}
        			/>
        	}
        	columns.push(col);
		}.bind(this));
		console.log(columns);
		this.setState({
			columns
		});
	}

	render(){
		let {data} = this.props;
		console.log(this.props);
		console.log(this.props.data.length);
		return(
		 	<Table
        	rowHeight={50}
        	headerHeight={50}
        	rowsCount={data.length}
        	width={1300}
        	height={500}
        	overflowY={'auto'}
        	{...this.props}>
        		{this.state.columns}
        	</Table>
		);
	}

}

export default TableComponent