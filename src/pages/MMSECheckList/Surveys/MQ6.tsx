import React, { useEffect, useState } from "react";
import Layout from "../../../partials/Layout";
import MMSESurvey from "../../../partials/MMSESurvey";
import { lists } from "../QuestionLists";
//@ts-ignore
import m6 from "../../../audios/m6.mp3";

const MQ6 = () => {
  const [audio] = useState(new Audio(m6));

  useEffect(() => {
    audio.play();
  }, []);

  return (
    <Layout>
      <MMSESurvey
        listNumber={lists[6].listNumber}
        title={lists[6].title}
        nextPage={lists[6].nextPage}
        answer={lists[6].answer}
      />
    </Layout>
  );
};

export default MQ6;
