import React from "react";
import Layout from "../../../partials/Layout";
import Survey from "../../../partials/Survey";
import { lists } from "../QuestionLists";

const Q4 = () => {
  return (
    <Layout>
      <Survey
        listNumber={lists[4].listNumber}
        title={lists[4].title}
        nextPage={lists[4].nextPage}
      />
    </Layout>
  );
};

export default Q4;