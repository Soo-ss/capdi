import React from "react";
import Layout from "../../../partials/Layout";
import Survey from "../../../partials/Survey";
import { lists } from "../QuestionLists";

const Q10 = () => {
  return (
    <Layout>
      <Survey
        listNumber={lists[10].listNumber}
        title={lists[10].title}
        nextPage={lists[10].nextPage}
      />
    </Layout>
  );
};

export default Q10;
