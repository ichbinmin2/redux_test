import { createStore, combineReducers } from "redux";

// 타임라인 모듈과 친구 목록 모듈에서 액션 생성자 함수와 리듀서 함수를 동시에 가져와 담아두었다.
import timelineReducer, {
  addTimeline,
  removeTimeline,
  editTimeline,
  increaseNextPage,
} from "./timeline/state";

import friendReducer, {
  addFriend,
  removeFriend,
  editFriend,
} from "./friend/state";

// combineReducers 함수를 이용해서 두개의 리듀서를 하나로 합쳤다.
// 상태값에는 각각 timeline, friend라는 이름으로 데이터가 저장된다.
const reducer = combineReducers({
  timeline: timelineReducer,
  friend: friendReducer,
});

// createStore 함수를 이용해서 스토어를 생성한다.
const store = createStore(reducer);

// 디버깅을 위해 액션 처리가 끝날 때마다 상태값을 콘솔로그로 출력한다.
store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});

// 타임라인을 테스트 하기 위해 다섯개의 액션을 생성한다.
store.dispatch(addTimeline({ id: 1, desc: "코딩은 즐거워~" }));
store.dispatch(addTimeline({ id: 2, desc: "리덕스 좋아~" }));
store.dispatch(increaseNextPage());
store.dispatch(editTimeline({ id: 2, desc: "리덕스 대박~~" }));
store.dispatch(removeTimeline({ id: 1, desc: "코딩은 즐거워~" }));

// 친구목록을 테스트 하기 위해 네개의 액션을 생성한다.
store.dispatch(addFriend({ id: 1, name: "아이유" }));
store.dispatch(addFriend({ id: 2, name: "손나은" }));
store.dispatch(editFriend({ id: 2, name: "수지" }));
store.dispatch(removeFriend({ id: 1, name: "아이유" }));
