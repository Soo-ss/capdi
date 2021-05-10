import React from "react";
import Layout from "../../../partials/Layout";
import Survey from "../../../partials/Survey";
import { lists } from "../QuestionLists";

const Q14 = () => {
  return (
    <Layout>
      <Survey
        listNumber={lists[14].listNumber}
        title={lists[14].title}
        nextPage={lists[14].nextPage}
      />
    </Layout>
  );
};

export default Q14;
