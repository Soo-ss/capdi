import React, { useEffect, useState } from "react";
import Layout from "../../../partials/Layout";
import MMSESurvey from "../../../partials/MMSESurvey";
import { lists } from "../QuestionLists";
//@ts-ignore
import m5 from "../../../audios/m5.mp3";

const MQ5 = () => {
  const [audio] = useState(new Audio(m5));

  useEffect(() => {
    audio.play();
  }, []);

  return (
    <Layout>
      <MMSESurvey
        listNumber={lists[5].listNumber}
        title={lists[5].title}
        nextPage={lists[5].nextPage}
        answer={lists[5].answer}
      />
    </Layout>
  );
};

export default MQ5;
