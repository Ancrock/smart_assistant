export default function reducer (state={
	restaurantData: {id: null, name: "unknown"},
	fetched: false,
	fetching: false,
	error: null
}, action) {
	switch (action.type) {
		case "GET_DATA": {
			console.log("This is in getData:::: ", action);
			return {
        		...state,
        		restaurantData: action.payload
      		};
		};
	};
	return state;
}