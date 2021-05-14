import React, { useEffect, useState } from "react";
import Layout from "../../../partials/Layout";
import MMSESurvey from "../../../partials/MMSESurvey";
import { lists } from "../QuestionLists";
//@ts-ignore
import m1 from "../../../audios/m1.mp3";

const MQ1 = () => {
  const [audio] = useState(new Audio(m1));

  useEffect(() => {
    audio.play();
  }, []);

  return (
    <Layout>
      <MMSESurvey
        listNumber={lists[1].listNumber}
        title={lists[1].title}
        nextPage={lists[1].nextPage}
        answer={lists[1].answer}
      />
    </Layout>
  );
};

export default MQ1;
