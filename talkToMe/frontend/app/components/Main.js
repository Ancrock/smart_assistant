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
			<div>
			<Jumbotron>
				<img src="https://preview.ibb.co/hSekpQ/Datamorphix_Logo.png" style={{height:"100px", width:"100px", float:"left"}}/>
    			<h1>Datamorphix Smart Assistant</h1>
    			<p>Welcome to the smart assistant! You can interact with the system by the text area at the right</p>
    			<p><Button bsStyle="primary" href="http://www.datamorphix.ai">Learn more</Button></p>
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

// https://preview.ibb.co/hSekpQ/Datamorphix_Logo.png