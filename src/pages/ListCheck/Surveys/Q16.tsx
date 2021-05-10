import React from "react";
import Layout from "../../../partials/Layout";
import Survey from "../../../partials/Survey";
import { lists } from "../QuestionLists";

const Q16 = () => {
  return (
    <Layout>
      <Survey
        listNumber={lists[16].listNumber}
        title={lists[16].title}
        nextPage={lists[16].nextPage}
      />
    </Layout>
  );
};

export default Q16;
