import axios from "axios";

const ADD_DOG = "ADD_DOG";
const GET_DOGS = "GET_DOGS";
const GET_ALL_DOGS = "GET_ALL_DOGS";

//functions  there were pulled from backend
export function makeNewDog(
  name,
  age,
  picture,
  breed,
  sex,
  owner_id,
  price,
  descript
) {
  return {
    type: ADD_DOG,
    payload: axios.post(`/api/newDog`, {
      name,
      age,
      picture,
      breed,
      sex,
      owner_id,
      price,
      descript
    })
  };
}

export function getAllDogs() {
  return {
    type: GET_ALL_DOGS,
    payload: axios.get(`/api/dogs`)
  };
}

export function getYourDogs() {
  return {
    type: GET_DOGS,
    payload: axios.get(`/api/yourdogs`)
  };
}
//state
const initialState = {
  dogs: [],
  error: ""
};

export default function storeReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ALL_DOG_PENDING":
      return { ...state };
    case "GET_ALL_DOG_FULFILLED":
      return { ...state, dogs: action.payload.data };
    case "GET_ALL_DOG_REJECTED":
      return { ...state, error: action.payload };

    case "ADD_DOG_PENDING":
      return { ...state };
    case "ADD_DOG_FULFILLED":
      return { ...state, dogs: action.payload.data };
    case "ADD_DOG_REJECTED":
      return { ...state, error: action.payload };
    case "GET_DOGS_PENDING":
      return { ...state };
    case "GET_DOGS_FULFILLED":
      return { ...state, dogs: action.payload.data };
    case "GET_DOGS_REJECTED":
      return { ...state, error: action.payload };

    default:
      return state;
  }
}
