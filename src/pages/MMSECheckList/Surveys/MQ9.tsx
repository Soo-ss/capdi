import React, { useEffect, useState } from "react";
import Layout from "../../../partials/Layout";
import MMSESurvey from "../../../partials/MMSESurvey";
import { lists } from "../QuestionLists";
//@ts-ignore
import m9 from "../../../audios/m9.mp3";

const MQ9 = () => {
  const [audio] = useState(new Audio(m9));

  useEffect(() => {
    audio.play();
  }, []);

  return (
    <Layout>
      <MMSESurvey
        listNumber={lists[9].listNumber}
        title={lists[9].title}
        nextPage={lists[9].nextPage}
        answer={lists[9].answer}
      />
    </Layout>
  );
};

export default MQ9;
