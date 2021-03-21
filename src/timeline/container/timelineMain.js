import React, { useEffect, useReducer } from "react";
// 이전에 작성한 파일로부터 스토어 객체를 가져온다.
import store from "../../common/store";
// getNextTimeline 함수를 이용하면 필요할 때마다 타임라인 데이터를 가져올 수 있다.
import { getNextTimeline } from "../../common/mockData";
// 타임라인 데이터를 추가하기 위한 액션 생성자 함수(addTimeline())를 가져온다.
import { addTimeline } from "../state";
import TimelineList from "../component/timelineList";

export default function TimelineMain() {
  const [, forceUpdate] = useReducer((v) => v + 1, 0);

  useEffect(() => {
    // ** 불필요하게 컴포넌트 함수가 호출되고 있다 **
    // 액션이 처리될 때마다 홤녀을 다시 그리기 위해 subscribe 메서드를 사용한다. 리덕스 상태가 변경되면 무조건 컴포넌트를 렌더링 하기 위해 foreceUpdate 함수를 이용한다.
    // const unsubscribe = store.subscribe(() => forceUpdate());
    // 컴포넌트가 언마운트 될 때 subscribe 메서드에 등록한 이벤트처리 함수를 해제한다.
    // return () => unsubscribe();

    // ** refactoring **
    // 이전 상태값을 저장하기 위해 변수를 선언한다.
    let prevTimelines = store.getState().timeline.timelines;
    const unsubscribe = store.subscribe(() => {
      const timelines = store.getState().timeline.timelines;
      // 상태값이 변경된 경우에만 forceUpdate 함수를 호출할 수 있도록 한다.
      if (prevTimelines !== timelines) {
        forceUpdate();
      }
    });
    return () => unsubscribe();
  }, []);

  function onAdd() {
    const timeline = getNextTimeline();
    // 타임라인 추가 버튼을 누르면(onClick) 타임라인을 추가하는 액션을 발생시킨다.
    store.dispatch(addTimeline(timeline));
  }
  // 렌더링 시점을 확인하기 위해 로그를 출력한다.
  console.log("Timeline render");

  // 스토어에서 타임라인 배열을 가져온다.
  const timelines = store.getState().timeline.timelines;

  return (
    <div>
      <button onClick={onAdd}>타임라인 추가</button>
      <TimelineList timelines={timelines} />
    </div>
  );
}
