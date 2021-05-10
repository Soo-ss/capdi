import React from "react";
import Layout from "../../partials/Layout";
import { Link } from "react-router-dom";
import ListComponent from "../../partials/Survey";

function ListCheck() {
  const lists = [
    {
      listNumber: "문항 1",
      title: "평소에는 아무렇지도 않던 일들이 귀찮게 느껴졌다.",
    },
    {
      listNumber: "문항 2",
      title: "먹고 싶지 않았다 ; 입맛이 없었다.",
    },
    {
      listNumber: "문항 3",
      title: "가족이나 친구가 도와주더라도 울적한 기분을 떨쳐 버릴 수 없었다.",
    },
    {
      listNumber: "문항 4",
      title: "다른 사람들만큼 능력이 있다고 느꼈다.",
    },
    {
      listNumber: "문항 5",
      title: "무슨 일을 하든 정신을 집중하기 힘들었다.",
    },
    {
      listNumber: "문항 6",
      title: "우울했다.",
    },
    {
      listNumber: "문항 7",
      title: "하는 일마다 힘들게 느껴졌다.",
    },
    {
      listNumber: "문항 8",
      title: "미래에 대하여 희망적이라고 느꼈다.",
    },
    {
      listNumber: "문항 9",
      title: "내 인생은 실패작이라는 생각이 들었다.",
    },
    {
      listNumber: "문항 10",
      title: "두려움을 느꼈다.",
    },
    {
      listNumber: "문항 11",
      title: "잠을 설쳤다 ; 잠을 잘 이루지 못했다.",
    },
    {
      listNumber: "문항 12",
      title: "행복했다.",
    },
    {
      listNumber: "문항 13",
      title: "평소보다 말을 적게 했다 ; 말수가 줄었다.",
    },
    {
      listNumber: "문항 14",
      title: "세상에 홀로 있는 듯한 외로움을 느꼈다.",
    },
    {
      listNumber: "문항 15",
      title: "사람들이 나에게 차갑게 대하는 것 같았다.",
    },
    {
      listNumber: "문항 16",
      title: "생활이 즐거웠다.",
    },
    {
      listNumber: "문항 17",
      title: "갑자기 울음이 나왔다.",
    },
    {
      listNumber: "문항 18",
      title: "슬픔을 느꼈다.",
    },
    {
      listNumber: "문항 19",
      title: "사람들이 나를 싫어하는 것 같았다.",
    },
    {
      listNumber: "문항 20",
      title: "도무지 무엇을 시작할 기운이 나지 않았다.",
    },
  ];
  return (
    <Layout>
      {/* <div className="main">
        <div className="title">
          <h1>우울증 자가진단 테스트</h1>
        </div>
        <br />
        <div className="subtitle">
          우울증 검사의 테스트 결과가 우울증으로 나올 경우 치매 검사 결과가
          정확하지 않을 수 있습니다. <br />
          우울증 검사 결과 점수가 높은 경우, 3일간의 환기 후 테스트에
          임해주세요.
        </div>
        <br />
        <div className="explanation">
          {" "}
          {"<"}답변 구분{">"} <br /> <br />
          극히 드물게(1주 중 1일 이하) <br />
          자주(1주 중 3일~4일) <br />
          가끔(1주 중 1~2일)
          <br />
          거의 대부분(1주 중 5일~7일)
          <br /> <br />
        </div>

        <div className="base-question">
          나는 지난 일주일 동안... <br />
        </div>
      </div>
      {lists.map((item, index) => {
        return (
          <ListComponent
            key={index}
            listNumber={item.listNumber}
            title={item.title}
          />
        );
      })}
      <Link to="/calc-depression">
        <div className="depress_result">
          <div className="move_to_dep_result">
            <div className="menu_description">
              <p className="description_title">우울증 진단 결과 보기</p>
            </div>
          </div>
          <button className="calculation_button">
            <i className="fas fa-angle-right"></i>
          </button>
        </div>
      </Link>
      <br />
      <br />
      <br />
      <br /> */}
    </Layout>
  );
}

export default ListCheck;
