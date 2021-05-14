import React from "react";
import Layout from "../../../partials/Layout";
import MMSESurvey from "../../../partials/MMSESurvey";
import { lists } from "../QuestionLists";

const MQ4 = () => {
  return (
    <Layout>
      <MMSESurvey
        listNumber={lists[4].listNumber}
        title={lists[4].title}
        nextPage={lists[4].nextPage}
        answer={lists[4].answer}
      />
    </Layout>
  );
};

export default MQ4;
