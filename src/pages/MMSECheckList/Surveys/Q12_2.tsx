import React from "react";
import Layout from "../../../partials/Layout";
import MMSESurvey from "../../../partials/MMSESurvey";
import { lists } from "../QuestionLists";

const Q12_2 = () => {
  return (
    <Layout>
      <MMSESurvey
        listNumber={lists[13].listNumber}
        title={lists[13].title}
        nextPage={lists[13].nextPage}
      />
    </Layout>
  );
};

export default Q12_2;
