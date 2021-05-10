import React from "react";
import Layout from "../../../partials/Layout";
import Survey from "../../../partials/Survey";
import { lists } from "../QuestionLists";

const Q1 = () => {
  return (
    <Layout>
      <Survey
        listNumber={lists[1].listNumber}
        title={lists[1].title}
        nextPage={lists[1].nextPage}
      />
    </Layout>
  );
};

export default Q1;
