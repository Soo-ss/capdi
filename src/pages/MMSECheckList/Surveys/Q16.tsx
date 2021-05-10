import React from "react";
import Layout from "../../../partials/Layout";
import MMSESurveyThree from "../../../partials/MMSESurveyThree";
import { lists } from "../QuestionLists";

const Q16 = () => {
  return (
    <Layout>
      <MMSESurveyThree
        listNumber={lists[21].listNumber}
        title={lists[21].title}
        nextPage={lists[21].nextPage}
      />
    </Layout>
  );
};

export default Q16;
