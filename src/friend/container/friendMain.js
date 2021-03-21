import React, { useEffect, useReducer } from "react";
import { getNextFriend } from "../../common/mockData";
import store from "../../common/store";
import FriendList from "../component/friendList";
import { addFriend } from "../state";

export default function FriendMain() {
  const [, forceUpdate] = useReducer((v) => v + 1, 0);
  useEffect(() => {
    // ** 불필요하게 컴포넌트 함수가 호출되고 있다 **
    // const unsubscribe = store.subscribe(() => forceUpdate());
    // return () => unsubscribe();

    // ** refactoring **
    // 이전 상태값을 저장하기 위해 변수를 선언한다.
    let prevFriends = store.getState().friend.friends;
    const unsubscribe = store.subscribe(() => {
      const friends = store.getState().friend.friends;
      // 상태값이 변경된 경우에만 forceUpdate 함수를 호출할 수 있도록 한다.
      if (prevFriends !== friends) {
        forceUpdate();
      }
    });
    return () => unsubscribe();
  }, []);

  function onAdd() {
    const friend = getNextFriend();
    store.dispatch(addFriend(friend));
  }

  console.log("FriendMain redner");
  const friends = store.getState().friend.friends;

  return (
    <div>
      <button onClick={onAdd}> 친구 추가</button>
      <FriendList friends={friends} />
    </div>
  );
}
