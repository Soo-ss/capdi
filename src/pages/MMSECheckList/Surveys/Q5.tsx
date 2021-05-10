import React from "react";
import Layout from "../../../partials/Layout";
import Survey from "../../../partials/Survey";
import { lists } from "../QuestionLists";

const Q5 = () => {
  return (
    <Layout>
      <Survey
        listNumber={lists[5].listNumber}
        title={lists[5].title}
        nextPage={lists[5].nextPage}
      />
    </Layout>
  );
};

export default Q5;
