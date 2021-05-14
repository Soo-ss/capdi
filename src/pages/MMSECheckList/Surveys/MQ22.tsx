import React from "react";
import Layout from "../../../partials/Layout";
import MMSESurvey from "../../../partials/MMSESurvey";
import { lists } from "../QuestionLists";

const MQ22 = () => {
  return (
    <Layout>
      <MMSESurvey
        listNumber={lists[22].listNumber}
        title={lists[22].title}
        nextPage={lists[22].nextPage}
        answer={lists[22].answer}
      />
    </Layout>
  );
};

export default MQ22;
