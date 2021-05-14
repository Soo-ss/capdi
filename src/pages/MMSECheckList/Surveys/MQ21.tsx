import React, { useEffect, useState } from "react";
import Layout from "../../../partials/Layout";
import MMSESurvey from "../../../partials/MMSESurvey";
import { lists } from "../QuestionLists";
//@ts-ignore
import m21 from "../../../audios/m21.mp3";

const MQ21 = () => {
  const [audio] = useState(new Audio(m21));

  useEffect(() => {
    audio.play();
  }, []);

  return (
    <Layout>
      <MMSESurvey
        listNumber={lists[21].listNumber}
        title={lists[21].title}
        nextPage={lists[21].nextPage}
        answer={lists[21].answer}
      />
    </Layout>
  );
};

export default MQ21;
