import React, { useEffect, useState } from "react";
import Layout from "../../../partials/Layout";
import MMSESurvey from "../../../partials/MMSESurvey";
import { lists } from "../QuestionLists";
//@ts-ignore
import m14 from "../../../audios/m14.mp3";

const MQ14 = () => {
  const [audio] = useState(new Audio(m14));

  useEffect(() => {
    audio.play();
  }, []);

  return (
    <Layout>
      <MMSESurvey
        listNumber={lists[14].listNumber}
        title={lists[14].title}
        nextPage={lists[14].nextPage}
        answer={lists[14].answer}
      />
    </Layout>
  );
};

export default MQ14;
