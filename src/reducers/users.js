import {GET_USERS_LIST} from '../actions/UserAction'
let initialState = {
  getUsersList: false,
  errorUsersList: false,
  title: "Rizal",
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_LIST:
      return{
        ...state,
        getUsersList: action.payload.datas,
        errorUsersList: action.payload.errorMessage,
      };
      
  
    default:
      return state;
  }
  
};

export default users;
