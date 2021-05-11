import React from "react";
import Layout from "../../../partials/Layout";
import MMSESurveyThree from "../../../partials/MMSESurveyThree";
import { lists } from "../QuestionLists";

const MQ13 = () => {
  return (
    <Layout>
      <MMSESurveyThree
        listNumber={lists[17].listNumber}
        title={lists[17].title}
        nextPage={lists[17].nextPage}
      />
    </Layout>
  );
};

export default MQ13;
