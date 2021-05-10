import React from "react";
import Layout from "../../../partials/Layout";
import MMSESurvey from "../../../partials/MMSESurvey";
import { lists } from "../QuestionLists";

const Q15 = () => {
  return (
    <Layout>
      <MMSESurvey
        listNumber={lists[20].listNumber}
        title={lists[20].title}
        nextPage={lists[20].nextPage}
      />
    </Layout>
  );
};

export default Q15;
