import React from "react";
import Layout from "../../../partials/Layout";
import SurveyReversed from "../../../partials/SurveyReversed";
import { lists } from "../QuestionLists";

const Q8 = () => {
  return (
    <Layout>
      <SurveyReversed
        listNumber={lists[8].listNumber}
        title={lists[8].title}
        nextPage={lists[8].nextPage}
      />
    </Layout>
  );
};

export default Q8;
