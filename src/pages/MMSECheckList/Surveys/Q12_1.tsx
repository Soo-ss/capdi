import React from "react";
import Layout from "../../../partials/Layout";
import MMSESurvey from "../../../partials/MMSESurvey";
import { lists } from "../QuestionLists";

const Q12_1 = () => {
  return (
    <Layout>
      <MMSESurvey
        listNumber={lists[12].listNumber}
        title={lists[12].title}
        nextPage={lists[12].nextPage}
      />
    </Layout>
  );
};

export default Q12_1;
