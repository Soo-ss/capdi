import React from "react";
import Layout from "../../../partials/Layout";
import MMSESurveyThree from "../../../partials/MMSESurveyThree";
import { lists } from "../QuestionLists";

const MQ11 = () => {
  return (
    <Layout>
      <MMSESurveyThree
        listNumber={lists[11].listNumber}
        title={lists[11].title}
        nextPage={lists[11].nextPage}
        answer={lists[11].answer}
      />
    </Layout>
  );
};

export default MQ11;
