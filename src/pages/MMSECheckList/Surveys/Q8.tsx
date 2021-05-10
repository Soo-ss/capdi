import React from "react";
import Layout from "../../../partials/Layout";
import Survey from "../../../partials/Survey";
import { lists } from "../QuestionLists";

const Q8 = () => {
  return (
    <Layout>
      <Survey
        listNumber={lists[8].listNumber}
        title={lists[8].title}
        nextPage={lists[8].nextPage}
      />
    </Layout>
  );
};

export default Q8;
