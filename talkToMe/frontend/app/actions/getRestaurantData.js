import $ from 'jquery';

export function getRestaurantData(){
	return function (dispatch){
		let payload = {
			id: 1,
			name: "Amit Chaudhari"
		};
		dispatch({
			type:"GET_DATA", 
			payload
		});
	};
}