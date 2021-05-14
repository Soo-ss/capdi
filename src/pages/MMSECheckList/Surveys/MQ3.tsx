import React, { useEffect, useState } from "react";
import Layout from "../../../partials/Layout";
import MMSESurvey from "../../../partials/MMSESurvey";
import { lists } from "../QuestionLists";
//@ts-ignore
import m3 from "../../../audios/m3.mp3";

const MQ3 = () => {
  const [audio] = useState(new Audio(m3));

  useEffect(() => {
    audio.play();
  }, []);

  return (
    <Layout>
      <MMSESurvey
        listNumber={lists[3].listNumber}
        title={lists[3].title}
        nextPage={lists[3].nextPage}
        answer={lists[3].answer}
      />
    </Layout>
  );
};

export default MQ3;
