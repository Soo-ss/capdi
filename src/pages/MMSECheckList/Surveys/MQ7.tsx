import React, { useEffect, useState } from "react";
import Layout from "../../../partials/Layout";
import MMSESurvey from "../../../partials/MMSESurvey";
import { lists } from "../QuestionLists";
//@ts-ignore
import m7 from "../../../audios/m7.mp3";

const MQ7 = () => {
  const [audio] = useState(new Audio(m7));

  useEffect(() => {
    audio.play();
  }, []);

  return (
    <Layout>
      <MMSESurvey
        listNumber={lists[7].listNumber}
        title={lists[7].title}
        nextPage={lists[7].nextPage}
        answer={lists[7].answer}
      />
    </Layout>
  );
};

export default MQ7;
