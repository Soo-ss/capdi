import React from "react";
import Layout from "../../../partials/Layout";
import MMSESurvey from "../../../partials/MMSESurvey";
import { lists } from "../QuestionLists";

const MQ18 = () => {
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
