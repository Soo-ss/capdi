import React from "react";
import Layout from "../../../partials/Layout";
import SurveyReversed from "../../../partials/SurveyReversed";
import { lists } from "../QuestionLists";

const Q12 = () => {
  return (
    <Layout>
      <SurveyReversed
        listNumber={lists[12].listNumber}
        title={lists[12].title}
        nextPage={lists[12].nextPage}
      />
    </Layout>
  );
};

export default Q12;
