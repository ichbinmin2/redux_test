const friends = [
  { name: '현주', age: 24 },
  { name: '수지', age: 26 },
  { name: '현아', age: 29 },
  { name: '제니', age: 25 },
];

const timelines = [
  { desc: '점심이 마싯다', likes: 0 },
  { desc: '여자는 멋지다', likes: 0 },
  { desc: '야망있게 살자', likes: 0 },
  { desc: '정상에서 보자', likes: 0 },
];

function makeDataGenerator(items) {
  let itemIndex = 0;
  const getNextData = () => {
    const item = items[itemIndex % items.length];
    itemIndex += 1;

    return { ...item, id: itemIndex };
  };

  return getNextData;
}

export const getNextFriend = makeDataGenerator(friends);
export const getNextTimeline = makeDataGenerator(timelines);
