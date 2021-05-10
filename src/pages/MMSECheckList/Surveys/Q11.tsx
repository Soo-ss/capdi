import React from "react";
import Layout from "../../../partials/Layout";
import Survey from "../../../partials/Survey";
import { lists } from "../QuestionLists";

const Q11 = () => {
  return (
    <Layout>
      <Survey
        listNumber={lists[11].listNumber}
        title={lists[11].title}
        nextPage={lists[11].nextPage}
      />
    </Layout>
  );
};

export default Q11;
