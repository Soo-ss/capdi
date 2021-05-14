import React, { useEffect, useState } from "react";
import Layout from "../../../partials/Layout";
import MMSESurvey from "../../../partials/MMSESurvey";
import { lists } from "../QuestionLists";
//@ts-ignore
import m4 from "../../../audios/m4.mp3";

const MQ4 = () => {
  const [audio] = useState(new Audio(m4));

  useEffect(() => {
    audio.play();
  }, []);

  return (
    <Layout>
      <MMSESurvey
        listNumber={lists[4].listNumber}
        title={lists[4].title}
        nextPage={lists[4].nextPage}
        answer={lists[4].answer}
      />
    </Layout>
  );
};

export default MQ4;
