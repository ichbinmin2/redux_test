import createItemsLogic from "../common/createItemsLogic";

// friends 라는 이름으로 공통 로직을 생성한다.
const { add, edit, remove, reducer } = createItemsLogic("friends");

// 액션 생성자 함수를 원하는 이름으로 변경해서 export 한다.
export const addFriend = add;
export const editFriend = edit;
export const removeFriend = remove;

// 리듀서 함수를 그대로 내보낸다. 친구 목록의 모든 로직은 공통 로직으로 대체됐다.
export default reducer;
