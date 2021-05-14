import React, { useEffect, useState } from "react";
import Layout from "../../../partials/Layout";
import MMSESurvey from "../../../partials/MMSESurvey";
import { lists } from "../QuestionLists";
//@ts-ignore
import m15 from "../../../audios/m15.mp3";

const MQ15 = () => {
  const [audio] = useState(new Audio(m15));

  useEffect(() => {
    audio.play();
  }, []);

  return (
    <Layout>
      <MMSESurvey
        listNumber={lists[15].listNumber}
        title={lists[15].title}
        nextPage={lists[15].nextPage}
        answer={lists[15].answer}
      />
    </Layout>
  );
};

export default MQ15;
