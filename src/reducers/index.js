import {combineReducers} from "redux";

export default combineReducers({
    count: (count = 0, e) => (e.type === 'INCREMENT') ? (count + 1) : (e.type === 'DECREMENT') ? (count - 1) : count
});
