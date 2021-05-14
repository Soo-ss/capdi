import React, { useEffect, useState } from "react";
import Layout from "../../../partials/Layout";
import MMSESurvey from "../../../partials/MMSESurvey";
import { lists } from "../QuestionLists";
//@ts-ignore
import m18 from "../../../audios/m18.mp3";

const MQ18 = () => {
  const [audio] = useState(new Audio(m18));

  useEffect(() => {
    audio.play();
  }, []);

  return (
    <Layout>
      <MMSESurvey
        listNumber={lists[18].listNumber}
        title={lists[18].title}
        nextPage={lists[18].nextPage}
        answer={lists[18].answer}
      />
    </Layout>
  );
};

export default MQ18;
