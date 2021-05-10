import React from "react";
import Layout from "../../partials/Layout";
import ListCheck from "./ListCheck";

function CalcScore() {
  // function Calc(answer: string) {
  //   let elements = document.getElementsByName(answer).values;
  //   let checkedButton;
  //   let totalScore = 0;

  //   var answers = new Array(
  //     "answer",
  //     "answer2",
  //     "answer3",
  //     "answer4",
  //     "answer5",
  //     "answer6",
  //     "answer7",
  //     "answer8",
  //     "answer9",
  //     "answer10",
  //     "answer11",
  //     "answer12",
  //     "answer13",
  //     "answer14",
  //     "answer15",
  //     "answer16",
  //     "answer17",
  //     "answer18",
  //     "answer19",
  //     "answer20"
  //   );

  //   //입력받은 radio value들을 가지고 총 점수를 계산해줘야 함.
  //   //radio value들을 for문을 돌면서 하나씩 보고 total에 더해줄 것.
  //   //이전의 문제 : 라디오버튼을 선택하자마자 함수를 호출하게 될 때의 문제였음. 지금은 상관 x
  //   //지금의 문제 : check된 value가 뭔지를 알아야 함 -> if문이랑 checked property 사용.
  //   //HTMLInputElement가 아니라서 checked property가 없다고 나옴. type casting도 불가능..

  //   for (let i = 0; i < 20; i++) {
  //     Calc(document.getElementsByName(answers[i]).toString());
  //   }

  //   //<HTMLInputElement>document.getElementById("sometimes");
  //   var array_radio = document.getElementsByTagName("radio");

  //   for (var i = 0; i < array_radio.length; i++) {
  //     alert(array_radio[i].nodeValue);
  //   }

  //   /*
  //   console.log(elements);
  //   elements.forEach(e=> {
  //     if(e.checked){

  //     }
  //   })
  //   */

  //   //if(elements.)

  //   if (document.getElementsByName(answer))
  //     //.values[0].toString() === "rarely")
  //     totalScore += 0;
  //   else if (document.getElementsByName(answer).toString() === "sometimes")
  //     //이 비교는 잘못됨. answer 하나를 가져왔으면 그 안의 value들 중 checked value가 뭔지를 확인해야 함.
  //     totalScore += 1;
  //   else if (document.getElementsByName(answer).toString() === "often")
  //     totalScore += 2;
  //   else if (document.getElementsByName(answer).toString() === "mostly")
  //     totalScore += 3;
  // }

  return (
    <Layout>
      <h1>Depression Result</h1>
    </Layout>
  );
}

export default CalcScore;
