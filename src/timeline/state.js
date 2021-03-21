import createReducer from "../common/createReducer";
import createItemsLogic from "../common/createItemsLogic";
// 공통 로직을 사용하기 위해서 mergeReducers 함수를 사용했다.
import mergeReducers from "../common/mergeReducer";

// timelines 라는 이름(name)으로 공통 로직을 생성한다.
const { add, edit, remove, reducer: timelineReducer } = createItemsLogic(
  "timelines"
);

// 공통 로직에 포함되지 않은 액션타입, 액션 생성자 함수, 리듀서 코드를 정의한다.
const INCREASE_NEXT_PAGE = "timeline/INCREASE_NEXT_PAGE";

// 공통 로직에 포함되지 않은 액션타입, 액션 생성자 함수, 리듀서 코드를 정의한다.
export const addTimeline = add;
export const editTimeline = edit;
export const removeTimeline = remove;
export const increaseNextPage = () => ({ type: INCREASE_NEXT_PAGE });

// 공통 로직에 포함되지 않은 액션타입, 액션 생성자 함수, 리듀서 코드를 정의한다.
const INITIAL_STATE = { nextPage: 0 };
const reducer = createReducer(INITIAL_STATE, {
  [INCREASE_NEXT_PAGE]: (state, action) => (state.nextPage += 1),
});

// mergeReducers 함수를 사용해서 공통 로직의 리듀서 함수와 직접 작성한 리듀서 함수를 만든다.
// mergeReducers 함수는 리듀서 함수의 배열을 입력으로 받는다.
const reducers = [reducer, timelineReducer];
export default mergeReducers(reducers);
