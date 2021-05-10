import React from "react";
import Layout from "../../../partials/Layout";
import Survey from "../../../partials/Survey";
import { lists } from "../QuestionLists";

const Q2 = () => {
  return (
    <Layout>
      <Survey
        listNumber={lists[2].listNumber}
        title={lists[2].title}
        nextPage={lists[2].nextPage}
      />
    </Layout>
  );
};

export default Q2;
