import { CHANGE_NAME } from "../constants/action-types"
const initialState = {
    name: "Maurie",
    age: 300
};

const rootReducer =(state = initialState, action) => {
   if(action.type === CHANGE_NAME) {
    return Object.assign( {},state, {
      name:"Okumu"
    })
}
    return state;
};

export default rootReducer;