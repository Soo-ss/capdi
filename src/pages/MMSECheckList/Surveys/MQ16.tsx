import React from "react";
import Layout from "../../../partials/Layout";
import MMSESurvey from "../../../partials/MMSESurvey";
import { lists } from "../QuestionLists";

const MQ16 = () => {
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
