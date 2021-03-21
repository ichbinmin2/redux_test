import { freeze } from "immer";
import createReducer from "../common/createReducer";

// 액션 타입을 상수 변수로 정의
const ADD = "friend/ADD";
const REMOVE = "friend/REMOVE";
const EDIT = "friend/EDIT";

// 액션 생성자 함수를 정의
export const addFriend = (friend) => ({ type: ADD, friend });
export const removeFriend = (friend) => ({ type: REMOVE, friend });
export const editFriend = (friend) => ({ type: EDIT, friend });

const INITIAL_STATE = { friend: [] };

// 친구 데이터를 추가, 삭제, 수정하는 리듀서 코드
const reducer = createReducer(INITIAL_STATE, {
  [ADD]: (state, action) => state.friend.push(action.friend),
  [REMOVE]: (state, action) =>
    state.friend.filter((friend) => friend.id !== action.friend.id),
  [EDIT]: (state, action) => {
    const index = state.friend.findIndex(
      (friend) => friend.id === action.friend.id
    );
    if (index >= 0) {
      state.friend[index] = action.friend;
    }
  },
});

// 리듀서는 스토어를 생성할 때 필요하기 때문에 export 해주고, 리듀서 함수에서 간편하게 상태값을 수정할 수있게끔 한다.
export default reducer;
