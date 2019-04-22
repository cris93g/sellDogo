import axios from "axios";

const ADD_DOG = "ADD_DOG";
const GET_DOGS = "GET_DOGS";

export function makeNewDog(name, age, picture, breed, sex, owner_id) {
  return {
    type: ADD_DOG,
    payload: axios.post(`/api/newDog`, {
      name,
      age,
      picture,
      breed,
      sex,
      owner_id
    })
  };
}

export function getYourDogs() {
  return {
    type: GET_DOGS,
    payload: axios.get(`/api/yourdogs`)
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
