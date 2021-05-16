import React, { useEffect, useState } from "react";
import Layout from "../../../partials/Layout";
import MMSESurvey from "../../../partials/MMSESurvey";
import { lists } from "../QuestionLists";
import clock from "./img/clock_img.png";
//@ts-ignore
import m18 from "../../../audios/m18.mp3";

const MQ18 = () => {
  const [audio] = useState(new Audio(m18));

  useEffect(() => {
    audio.play();
  }, []);

  return (
    <Layout>
      <div className="pImg_wrap">
        <img src={clock} alt="mypic" className="pentagon__img" />
      </div>
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
