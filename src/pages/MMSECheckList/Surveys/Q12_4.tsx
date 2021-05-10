import React from "react";
import Layout from "../../../partials/Layout";
import MMSESurvey from "../../../partials/MMSESurvey";
import { lists } from "../QuestionLists";

const Q12_4 = () => {
  return (
    <Layout>
      <MMSESurvey
        listNumber={lists[15].listNumber}
        title={lists[15].title}
        nextPage={lists[15].nextPage}
      />
    </Layout>
  );
};

export default Q12_4;
