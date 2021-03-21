import createReducer from "../common/createReducer";

// 액션 타입을 상수 변수로 정의
const ADD = "timeline/ADD";
const REMOVE = "timeline/REMOVE";
const EDIT = "timeline/EDIT";
// 타임라인의 끝에 도달했을 때 서버에게 요청할 페이지 번호를 관리하는 액션 타입을 상수 변수로 정의
const INCREASE_NEXT_PAGE = "timeline/INCREASE_NEXT_PAGE";

// 액션 생성자 함수를 정의
export const addTimeline = (timeline) => ({ type: ADD, timeline });
export const removeTimeline = (timeline) => ({ type: REMOVE, timeline });
export const editTimeline = (timeline) => ({ type: EDIT, timeline });
// 페이지 번호를 즈가시키는 액션 생성자 함수를 정의.
export const increaseNextPage = () => ({ type: INCREASE_NEXT_PAGE });

// 타임라인의 상태값에는 다음 페이지 번호도 저장된다.
const INITIAL_STATE = { timeline: [], nextPage: 0 };

const reducer = createReducer(INITIAL_STATE, {
  [ADD]: (state, action) => state.timeline.push(action.timeline),
  [REMOVE]: (state, action) =>
    (state.timeline = state.timeline.filter(
      (timeline) => timeline.id !== action.timeline.id
    )),
  [EDIT]: (state, action) => {
    const index = state.timeline.findIndex(
      (timeline) => timeline.id === action.timeline.id
    );
    if (index >= 0) {
      state.timeline[index] = action.timeline;
    }
  },
  // 페이지 번호를 증가시키는 리듀서 코드.
  [INCREASE_NEXT_PAGE]: (state, action) => (state.nextPage += 1),
});

export default reducer;
