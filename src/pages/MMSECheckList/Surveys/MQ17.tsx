import React from "react";
import Layout from "../../../partials/Layout";
import MMSESurveyThree from "../../../partials/MMSESurveyThree";
import { lists } from "../QuestionLists";

const MQ17 = () => {
  return (
    <Layout>
      <MMSESurveyThree
        listNumber={lists[17].listNumber}
        title={lists[17].title}
        nextPage={lists[17].nextPage}
        answer={lists[17].answer}
      />
    </Layout>
  );
};

export default MQ17;
