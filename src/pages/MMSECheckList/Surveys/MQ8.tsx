import React, { useEffect, useState } from "react";
import Layout from "../../../partials/Layout";
import MMSESurvey from "../../../partials/MMSESurvey";
import { lists } from "../QuestionLists";
//@ts-ignore
import m8 from "../../../audios/m8.mp3";

const MQ8 = () => {
  const [audio] = useState(new Audio(m8));

  useEffect(() => {
    audio.play();
  }, []);

  return (
    <Layout>
      <MMSESurvey
        listNumber={lists[8].listNumber}
        title={lists[8].title}
        nextPage={lists[8].nextPage}
        answer={lists[8].answer}
      />
    </Layout>
  );
};

export default MQ8;
