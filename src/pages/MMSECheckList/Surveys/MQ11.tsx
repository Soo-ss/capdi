import React, { useEffect, useState } from "react";
import Layout from "../../../partials/Layout";
import MMSESurveyThree from "../../../partials/MMSESurveyThree";
import { lists } from "../QuestionLists";
//@ts-ignore
import m11 from "../../../audios/m11.mp3";

const MQ11 = () => {
  const [audio] = useState(new Audio(m11));

  useEffect(() => {
    audio.play();
  }, []);

  return (
    <Layout>
      <MMSESurveyThree
        listNumber={lists[11].listNumber}
        title={lists[11].title}
        nextPage={lists[11].nextPage}
        answer={lists[11].answer}
      />
    </Layout>
  );
};

export default MQ11;
