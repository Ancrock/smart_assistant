import React from "react";
import ReactDOM from "react-dom";
import SecondaryComponent from "./SecondaryComponent";
import {Jumbotron, Button} from "react-bootstrap";

class MainComponent extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		return(
			<div>
			<div style={{width:"70%", float:"left"}}>
			<Jumbotron>
    			<h1>Data Morphix Smart Assistant</h1>
    			<p>Welcome to the smart assistant! You can interact with the system by the text area at the right</p>
    			<p><Button bsStyle="primary">Learn more</Button></p>
  			</Jumbotron>
  			</div>
  			<div>
			<SecondaryComponent />
			</div>
			</div>
			);
	}
}

ReactDOM.render(<MainComponent />, document.getElementById('app'));