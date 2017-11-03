import React from 'react';
import {ApiAiClient} from "api-ai-javascript";
import $ from "jquery";
import {Popover, Well, Table} from "react-bootstrap";
import Cookies from "js-cookie";
import TableComponent from "./TableComponent.js";
import TableComponent3 from "./TableComponent3.js";
import {connect} from 'react-redux';
import {getRestaurantData} from '../actions/getRestaurantData.js';

const client = new ApiAiClient({accessToken:'fcd112bd21234304ba7baaaee2993a8e'})
const promise = client.eventRequest("MSG_SEND");
class SecondaryComponent extends React.Component{
	constructor(props){
		super(props);
		this.state={
			count: 1,
			responseText: "",
			textValue: "",
			divs: [],
			result: []
		};

	this.increaseCount = this.increaseCount.bind(this);
	this.makeCall = this.makeCall.bind(this);
	this.changeText = this.changetext.bind(this);
	this.addChatDiv = this.addChatDiv.bind(this);
	this.csrfSafeMethod = this.csrfSafeMethod.bind(this);
	}

	componentDidMount(){
	// 	// Add a response interceptor
	// axios.interceptors.response.use(function (response) {
 //    // Do something with response data
 //    console.log("This is the response:: ", response);
 //  }, function (error) {
 //    // Do something with response error
 //    return Promise.reject(error);
 //  });
 // 	let oReq = new XMLHttpRequest();
 // 	oReq.addEventListener("load", this.increaseCount);
	// }
	//let chatBox = React.createClass({render: function(){return <div>Hello This is a div</div>;}});
	// let d1 = this.state.divs;
	// d1.push(<div>Hi there </div>);
	// this.setState({
	// 	divs: d1
	// });
}

	componentWillMount(){
		// console.log('Hello there');
 	// 	axios.interceptors.response.use(function (response) {
  //   // Do something with response data
  //   console.log("this is Response::::::::: ",response);
  // 	}, function (error) {
  //   // Do something with response error
  //   return Promise.reject(error);
  // 	});
	}

	componentWillReceiveProps(nextProps){
		// console.log(nextProps);
	}

	increaseCount(){
		this.setState({
			count: this.state.count + 1
		});
	}

	changetext(e){
		this.setState({
			textValue: e.target.value
		});
	}

	csrfSafeMethod(meth) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(meth));
	}

	makeCall(event){
		// console.log("In the makeCall");
		// console.log(event.charCode);
		if(event.charCode === 13){
			this.props.dispatch(getRestaurantData());
			this.addChatDiv(event.target.value);
			client.textRequest(event.target.value)
			.then((response) => {
				// console.log(response.result.fulfillment.speech);
				let d1 = this.state.divs;
				let k = response.result.fulfillment.speech;
				if((response.result.actionIncomplete === false) && (response.result.action !== "input.unknown")){
					let url = "";
					let table = 0;
					if(response.result.metadata.intentName === "Get_Bank_Data"){
						url = "/smartassistant/api/getBankData/";
						table = 3;
					}
					if(response.result.metadata.intentName === "Get_restaurant_data"){
						url = "/smartassistant/api/getPerson/"
						table = 2; 
					}
					let d3 = this.state.result;
					// d3.unshift(<Table striped bordered condensed hover><thead><tr><th>City</th><th>Temperature</th></tr></thead><tbody><tr><td>Dallas</td><td>98 &#8457;</td></tr></tbody></Table>);
					let dat = {"username": "ancrock"};
					$.ajax({
						context: this,
						beforeSend: function(xhr, settings) {
										let csrftoken = Cookies.get('csrftoken');
										// console.log("This is the cookie", Cookies.get());
        								if (!(this.csrfSafeMethod(settings.type)) && !this.crossDomain) {
            								xhr.setRequestHeader("X-CSRFToken", csrftoken);
        								}
    								},			
						url: url,
						data: JSON.stringify(dat),
						type:"POST",
						contentType: 'application/json; charset=utf-8',
						dataType: 'json',
						success: function(result) {
							if(table === 2){
								d3.unshift(<TableComponent2 data={result} />)
							}
							if(table === 3){
								d3.unshift(<TableComponent3 data={result} />)
							}       					
        					this.setState({
								result: d3
							});
    					}
					});
				}
				d1.unshift(<div style={{width:"50%", float:"right"}}>
			    <Popover
			      id="popover-basic"
			      placement="right"
			      title="Tina Says:"
			      style={{position: "relative"}}
			    >
			      {k}
			    </Popover><br/><br/> </div>);
				this.setState({
					textValue: "",
					responseText: response.result.fulfillment.speech,
					divs: d1
				});
			})
		}
	}

	addChatDiv(divContent){
		let arr = this.state.divs;
		arr.unshift(<div style={{width:"100%", float:"left"}}>
    <Popover
      id="popover-basic"
      placement="left"
      title="You Say:"
      style={{position: "relative"}}
    >
      {divContent}
    </Popover></div>);
		this.setState({
			divs: arr
		});
	}

	render(){
		// let oReq = new XMLHttpRequest();
 	// 	oReq.addEventListener("load", this.increaseCount);
		return(			
				<div>
					<div style={{width:"70%", float:"left", overflowX:"auto"}}>
					{this.state.result}
					{this.props.restaurantData.name}
					</div>
					<Well style={{width: "30%", height:"100%", bottom:"0px", right:"0px", position:"fixed", backgroundColor:"smoke"}}>
						<div style={{marginTop:"50px"}}>
							<div style={{position:"fixed", width:"100%", height:"100%"}}>
								<input type='text' className="form-control" placeholder="Say Hello!!" value={this.state.textValue} onChange={this.changeText} onKeyPress={this.makeCall} />
								<br/>
							</div>
							<br/><br/>
							<div style={{height:"100%", overflowY:"auto", position:"fixed"}}>
							{this.state.divs}
							</div>
						</div>
					</Well>
				</div>
			);
	}
}

const mapStateToProps = (store) => {
	return {
		restaurantData: store.getRestaurantDataReducer.restaurantData,
		fetched: store.getRestaurantDataReducer.fetched
	};
}

export default connect(mapStateToProps)(SecondaryComponent);

// <textarea value={this.state.responseText}></textarea>
// <div>
// 				<h2> The current count is {this.state.count} </h2>
// 				<input type="button" onClick={this.increaseCount} value="Increase count"/>
// </div>