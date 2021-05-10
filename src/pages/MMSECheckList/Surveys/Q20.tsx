import React from "react";
import Layout from "../../../partials/Layout";
import Survey from "../../../partials/Survey";
import { lists } from "../QuestionLists";

const Q20 = () => {
  return (
    <Layout>
      <Survey
        listNumber={lists[20].listNumber}
        title={lists[20].title}
        nextPage={lists[20].nextPage}
      />
    </Layout>
  );
};

export default Q20;
