import axios from "axios";

const ADD_DOG = "ADD_DOG";

export function makeNewDog(name, age, picture, breed, sex) {
	return {
		type: ADD_DOG,
		payload: axios.post(`/api/newDog`, {
			name,
			age,
			picture,
			breed,
			sex
		})
	};
}

const initialState = {
	dogs: [],
	error: ""
};

export default function storeReducer(state = initialState, action) {
	switch (action.type) {
		case "ADD_DOG_PENDING":
			return { ...state };
		case "ADD_DOG_FULFILLED":
			return { ...state, dogs: action.payload.data };
		case "ADD_DOG_REJECTED":
			return { ...state, error: action.payload };
		default:
			return state;
	}
}
