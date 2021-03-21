const friends = [
  { name: "현주", age: 24 },
  { name: "수지", age: 26 },
  { name: "현아", age: 29 },
  { name: "제니", age: 25 },
];

const timelines = [
  { desc: "점심이 마싯다", likes: 0 },
  { desc: "여자는 멋지다", likes: 0 },
  { desc: "야망있게 살자", likes: 0 },
  { desc: "정상에서 보자", likes: 0 },
];

// 친구 목록과 타임 라인 데이터를 생성하는 로직이 같기 때문에 하나의 함수로 작성한다.
// 이 함수는 getNextFriend, getNextTimeline 함수를 생성하는데 사용된다.
function makeDataGenerator(items) {
  let itemIndex = 0;
  // getNextData 함수는 items, itemIndex 변수를 기억하는 클로저 함수이다.
  const getNextData = () => {
    const item = items[itemIndex % items.length];
    itemIndex += 1;

    // getNextData 함수는 중복되지 않은 id 값을 넣어서 반환한다.
    return { ...item, id: itemIndex };
  };

  return getNextData;
}

export const getNextFriend = makeDataGenerator(friends);
export const getNextTimeline = makeDataGenerator(timelines);
