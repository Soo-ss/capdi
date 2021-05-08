import React from "react";
import Layout from "../../partials/Layout";

var totalScore = 0;

var answers = new Array(
  "answer",
  "answer2",
  "answer3",
  "answer4",
  "answer5",
  "answer6",
  "answer7",
  "answer8",
  "answer9",
  "answer10",
  "answer11",
  "answer12",
  "answer13",
  "answer14",
  "answer15",
  "answer16",
  "answer17",
  "answer18",
  "answer19",
  "answer20"
);

for (let i = 0; i < 20; i++) {
  Calc(document.getElementsByName(answers[i]).toString());
}

function Calc(answer: any) {
  if (document.getElementsByName(answer).values.toString() == "rarely")
    totalScore += 0;
  else if (document.getElementsByName(answer).toString() == "sometimes")
    totalScore += 1;
  else if (document.getElementsByName(answer).toString() == "often")
    totalScore += 2;
  else if (document.getElementsByName(answer).toString() == "mostly")
    totalScore += 3;
}

function CalcScore() {
  return (
    <Layout>
      <h1>Hi</h1>
    </Layout>
  );
}

export default CalcScore;
