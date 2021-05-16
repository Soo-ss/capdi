import React, { useEffect, useState } from "react";
import Layout from "../../../partials/Layout";
import MMSESurvey from "../../../partials/MMSESurvey";
import { lists } from "../QuestionLists";
import pencil from "./img/pencil_img.png";
//@ts-ignore
import m19 from "../../../audios/m19.mp3";

const MQ19 = () => {
  const [audio] = useState(new Audio(m19));

  useEffect(() => {
    audio.play();
  }, []);

  return (
    <Layout>
      <div className="pImg_wrap">
        <img src={pencil} alt="mypic" className="pentagon__img" />
      </div>
      <MMSESurvey
        listNumber={lists[19].listNumber}
        title={lists[19].title}
        nextPage={lists[19].nextPage}
        answer={lists[19].answer}
      />
    </Layout>
  );
};

export default MQ19;
