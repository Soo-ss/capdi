import React from "react";
import Layout from "../../../partials/Layout";
import Survey from "../../../partials/Survey";
import { lists } from "../QuestionLists";

const Q14_1 = () => {
  return (
    <Layout>
      <Survey
        listNumber={lists[18].listNumber}
        title={lists[18].title}
        nextPage={lists[18].nextPage}
      />
    </Layout>
  );
};

export default Q14_1;
