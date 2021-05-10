import React from "react";
import Layout from "../../../partials/Layout";
import MMSESurvey from "../../../partials/MMSESurvey";
import { lists } from "../QuestionLists";

const Q18 = () => {
  return (
    <Layout>
      <MMSESurvey
        listNumber={lists[23].listNumber}
        title={lists[23].title}
        nextPage={lists[23].nextPage}
      />
    </Layout>
  );
};

export default Q18;
