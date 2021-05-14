import React, { useEffect, useState } from "react";
import Layout from "../../../partials/Layout";
import MMSESurvey from "../../../partials/MMSESurvey";
import { lists } from "../QuestionLists";
//@ts-ignore
import m13 from "../../../audios/m13.mp3";

const MQ13 = () => {
  const [audio] = useState(new Audio(m13));

  useEffect(() => {
    audio.play();
  }, []);

  return (
    <Layout>
      <MMSESurvey
        listNumber={lists[13].listNumber}
        title={lists[13].title}
        nextPage={lists[13].nextPage}
        answer={lists[13].answer}
      />
    </Layout>
  );
};

export default MQ13;
