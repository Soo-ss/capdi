let date = new Date();

export const lists = [
  {
    listNumber: "문항 0",
    title: "이 객체는 1번부터 할려고 만든 객체입니다.",
    nextPage: "DONT_USE",
    answer: "NO_ANSWER",
  },
  {
    listNumber: "문항 1",
    title: "Q. 올해는 몇 년도 입니까?",
    nextPage: "mq2",
    answer: date.getFullYear().toString(),
  },
  {
    listNumber: "문항 2",
    title: "Q. 지금은 무슨 계절입니까?",
    nextPage: "mq3",
    answer: "봄",
  },
  {
    listNumber: "문항 3",
    title: "Q. 오늘은 며칠입니까?",
    nextPage: "mq4",
    answer: "14일",
  },
  {
    listNumber: "문항 4",
    title: "Q. 오늘은 무슨 요일입니까?",
    nextPage: "mq5",
    answer: "화요일",
  },
  {
    listNumber: "문항 5",
    title: "Q. 지금은 몇 월입니까?",
    nextPage: "mq6",
    answer: "5월",
  },
  {
    listNumber: "문항 6",
    title: "Q. 우리가 있는 이곳은 무슨 도/특별시/광역시입니까?",
    nextPage: "mq7",
    answer: "경상남도",
  },
  {
    listNumber: "문항 7",
    title: "Q. 여기는 무슨 시/군입니까?",
    nextPage: "mq8",
    answer: "김해시",
  },
  {
    listNumber: "문항 8",
    title: "Q. 여기는 무슨 구/동/읍/면입니까?",
    nextPage: "mq9",
    answer: "내외동",
  },
  {
    listNumber: "문항 9",
    title: "Q. 우리는 지금 이 건물의 몇 층에 있습니까?",
    nextPage: "mq10",
    answer: "9층",
  },
  {
    listNumber: "문항 10",
    title: "Q. 이 장소의 이름이 무엇입니까?",
    nextPage: "mq11",
    answer: "해반천",
  },
  {
    listNumber: "문항 11",
    title:
      "Q. 제가 세 가지 물건의 이름을 말씀드리겠습니다. 끝까지 다 들으신 다음에 세 가지 물건의 이름을 순서대로 모두 말씀해 보십시오. 그리고 몇 분 후에 그 세 가지 물건의 이름들을 다시 물어볼 것이니 들으신 물건의 이름을 잘 기억하고 계십시오. 순서대로 기억하셔야 합니다.",
    nextPage: "mq12",
    answer: "나무,자동차,모자",
  },
  {
    listNumber: "문항 12-1",
    title: "Q. 100에서 7을 빼면 얼마가 됩니까?",
    nextPage: "mq13",
    answer: "93",
  },
  {
    listNumber: "문항 12-2",
    title: "Q. 거기에서 7을 빼면 얼마가 됩니까?",
    nextPage: "mq14",
    answer: "86",
  },
  {
    listNumber: "문항 12-3",
    title: "Q. 거기에서 7을 빼면 얼마가 됩니까?",
    nextPage: "mq15",
    answer: "79",
  },
  {
    listNumber: "문항 12-4",
    title: "Q. 거기에서 7을 빼면 얼마가 됩니까?",
    nextPage: "mq16",
    answer: "72",
  },
  {
    listNumber: "문항 12-5",
    title: "Q. 거기에서 7을 빼면 얼마가 됩니까?",
    nextPage: "mq17",
    answer: "65",
  },
  {
    listNumber: "문항 13",
    title:
      "Q. 조금 전 제가 기억하라고 말씀드렸던 세 가지 물건의 이름이 무엇인지 순서대로 말씀하여 주십시오.",
    nextPage: "mq18",
    answer: "나무,자동차,모자",
  },
  {
    listNumber: "문항 14-1",
    title: "Q. (실제 시계를 보여주며) 이것을 무엇이라고 합니까?",
    nextPage: "mq19",
    answer: "시계",
  },
  {
    listNumber: "문항 14-2",
    title: "Q. (실제 연필을 보여주며) 이것을 무엇이라고 합니까?",
    nextPage: "mq20",
    answer: "연필",
  },
  {
    listNumber: "문항 15",
    title:
      "Q. 아래 그림과 같이 오각형이 겹쳐져 있는 그림이 있습니다. 이 그림을 따라 그리고 사진을 올려주세요.",
    nextPage: "mq21",
    answer: "오각형",
  },
  {
    listNumber: "문항 16",
    title:
      "Q. (보호자분꼐서 피시험자분의 답을 보고 득점을 체크해주세요) 옷은 왜 빨아서 입습니까?",
    nextPage: "mq22",
    answer: "청결",
  },
  {
    listNumber: "문항 17",
    title:
      'Q. (보호자분께서 피시험자분의 답을 보고 득점을 체크해주세요) "티끌 모아 태산"은 무슨 뜻입니까?',
    nextPage: "mmse_result",
    answer: "조금씩 모으다 보면 언젠가는",
  },
];
