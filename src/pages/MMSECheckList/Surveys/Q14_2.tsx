import React from "react";
import Layout from "../../../partials/Layout";
import Survey from "../../../partials/Survey";
import { lists } from "../QuestionLists";

const Q14_2 = () => {
  return (
    <Layout>
      <Survey
        listNumber={lists[19].listNumber}
        title={lists[19].title}
        nextPage={lists[19].nextPage}
      />
    </Layout>
  );
};

export default Q14_2;
