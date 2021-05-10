import React from "react";
import Layout from "../../../partials/Layout";
import Survey from "../../../partials/Survey";
import { lists } from "../QuestionLists";

const Q17 = () => {
  return (
    <Layout>
      <Survey
        listNumber={lists[17].listNumber}
        title={lists[17].title}
        nextPage={lists[17].nextPage}
      />
    </Layout>
  );
};

export default Q17;
