import React, { useEffect, useState } from "react";
import Layout from "../../../partials/Layout";
import MMSESurveyThree from "../../../partials/MMSESurveyThree";
import { lists } from "../QuestionLists";
//@ts-ignore
import m17 from "../../../audios/m17.mp3";

const MQ17 = () => {
  const [audio] = useState(new Audio(m17));

  useEffect(() => {
    audio.play();
  }, []);

  return (
    <Layout>
      <MMSESurveyThree
        listNumber={lists[17].listNumber}
        title={lists[17].title}
        nextPage={lists[17].nextPage}
        answer={lists[17].answer}
      />
    </Layout>
  );
};

export default MQ17;
