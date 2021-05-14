import React, { useEffect, useState } from "react";
import Layout from "../../../partials/Layout";
import MMSESurvey from "../../../partials/MMSESurvey";
import { lists } from "../QuestionLists";
//@ts-ignore
import m12 from "../../../audios/m12.mp3";

const MQ12 = () => {
  const [audio] = useState(new Audio(m12));

  useEffect(() => {
    audio.play();
  }, []);

  return (
    <Layout>
      <MMSESurvey
        listNumber={lists[12].listNumber}
        title={lists[12].title}
        nextPage={lists[12].nextPage}
        answer={lists[12].answer}
      />
    </Layout>
  );
};

export default MQ12;
