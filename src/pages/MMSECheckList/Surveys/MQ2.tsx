import React, { useEffect, useState } from "react";
import Layout from "../../../partials/Layout";
import MMSESurvey from "../../../partials/MMSESurvey";
import { lists } from "../QuestionLists";
//@ts-ignore
import m2 from "../../../audios/m2.mp3";

const MQ2 = () => {
  const [audio] = useState(new Audio(m2));

  useEffect(() => {
    audio.play();
  }, []);

  return (
    <Layout>
      <MMSESurvey
        listNumber={lists[2].listNumber}
        title={lists[2].title}
        nextPage={lists[2].nextPage}
        answer={lists[2].answer}
      />
    </Layout>
  );
};

export default MQ2;
