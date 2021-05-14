import React, { useEffect, useState } from "react";
import Layout from "../../../partials/Layout";
import MMSESurvey from "../../../partials/MMSESurvey";
import { lists } from "../QuestionLists";
//@ts-ignore
import m10 from "../../../audios/m10.mp3";

const MQ10 = () => {
  const [audio] = useState(new Audio(m10));

  useEffect(() => {
    audio.play();
  }, []);

  return (
    <Layout>
      <MMSESurvey
        listNumber={lists[10].listNumber}
        title={lists[10].title}
        nextPage={lists[10].nextPage}
        answer={lists[10].answer}
      />
    </Layout>
  );
};

export default MQ10;
