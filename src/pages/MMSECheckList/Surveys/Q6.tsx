import React from "react";
import Layout from "../../../partials/Layout";
import Survey from "../../../partials/Survey";
import { lists } from "../QuestionLists";

const Q6 = () => {
  return (
    <Layout>
      <Survey
        listNumber={lists[6].listNumber}
        title={lists[6].title}
        nextPage={lists[6].nextPage}
      />
    </Layout>
  );
};

export default Q6;
