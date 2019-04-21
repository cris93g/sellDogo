import axios from "axios";

const GET_USER = "GET_USER";
const LOG_OUT = "LOG_OUT";
export function getUser() {
	return {
		type: GET_USER,
		payload: axios.get("/me")
	};
}
export function logout() {
	return {
		type: LOG_OUT,
		payload: axios.get("/logout")
	};
}
const initialState = {
	user: [],
	isAuthed: false
};

export default function itemsReducer(state = initialState, action) {
	switch (action.type) {
		case `${GET_USER}_FULFILLED`:
			return {
				...state,
				user: action.payload.data,
				isAuthed: true
			};
		case `${GET_USER}_REJECTED`:
			return {
				...state,
				isAuthed: false
			};

		case `${LOG_OUT}_FULFILLED`:
			return {
				...state,
				user: action.payload.data,
				isAuthed: true
			};

		default:
			return state;
	}
}
