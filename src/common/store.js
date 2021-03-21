import { createStore, combineReducers } from "redux";
import timelineReducer from "../timeline/state";
import friendReducer from "../friend/state";

const reducer = combineReducers({
  timeline: timelineReducer,
  friend: friendReducer,
});

const store = createStore(reducer);

// reducer를 담은 store를 export하면서 이제 스토어 객체를 원하는 곳에서 가져다가 사용할 수 있게 되었다.
export default store;
