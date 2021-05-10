import React from "react";
import Layout from "../../../partials/Layout";
import Survey from "../../../partials/Survey";
import { lists } from "../QuestionLists";

const Q7 = () => {
  return (
    <Layout>
      <Survey
        listNumber={lists[7].listNumber}
        title={lists[7].title}
        nextPage={lists[7].nextPage}
      />
    </Layout>
  );
};

export default Q7;
