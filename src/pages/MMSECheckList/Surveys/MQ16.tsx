import React, { useEffect, useState } from "react";
import Layout from "../../../partials/Layout";
import MMSESurvey from "../../../partials/MMSESurvey";
import { lists } from "../QuestionLists";
//@ts-ignore
import m16 from "../../../audios/m16.mp3";

const MQ16 = () => {
  const [audio] = useState(new Audio(m16));

  useEffect(() => {
    audio.play();
  }, []);

  return (
    <Layout>
      <MMSESurvey
        listNumber={lists[16].listNumber}
        title={lists[16].title}
        nextPage={lists[16].nextPage}
        answer={lists[16].answer}
      />
    </Layout>
  );
};

export default MQ16;
