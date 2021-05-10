import React from "react";
import Layout from "../../../partials/Layout";
import MMSESurvey from "../../../partials/MMSESurvey";
import { lists } from "../QuestionLists";

const Q1 = () => {
  return (
    <Layout>
      <MMSESurvey
        listNumber={lists[1].listNumber}
        title={lists[1].title}
        nextPage={lists[1].nextPage}
      />
    </Layout>
  );
};

export default Q1;
