import React, { useEffect, useState } from "react";
import Layout from "../../../partials/Layout";
import MMSESurvey from "../../../partials/MMSESurvey";
import { lists } from "../QuestionLists";
//@ts-ignore
import m22 from "../../../audios/m22.mp3";

const MQ22 = () => {
  const [audio] = useState(new Audio(m22));

  useEffect(() => {
    audio.play();
  }, []);

  return (
    <Layout>
      <MMSESurvey
        listNumber={lists[22].listNumber}
        title={lists[22].title}
        nextPage={lists[22].nextPage}
        answer={lists[22].answer}
      />
    </Layout>
  );
};

export default MQ22;
