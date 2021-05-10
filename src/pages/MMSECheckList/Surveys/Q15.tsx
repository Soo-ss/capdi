import React from "react";
import Layout from "../../../partials/Layout";
import Survey from "../../../partials/Survey";
import { lists } from "../QuestionLists";

const Q15 = () => {
  return (
    <Layout>
      <Survey
        listNumber={lists[15].listNumber}
        title={lists[15].title}
        nextPage={lists[15].nextPage}
      />
    </Layout>
  );
};

export default Q15;
