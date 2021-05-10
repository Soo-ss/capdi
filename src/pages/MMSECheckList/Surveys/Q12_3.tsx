import React from "react";
import Layout from "../../../partials/Layout";
import MMSESurvey from "../../../partials/MMSESurvey";
import { lists } from "../QuestionLists";

const Q12_3 = () => {
  return (
    <Layout>
      <MMSESurvey
        listNumber={lists[14].listNumber}
        title={lists[14].title}
        nextPage={lists[14].nextPage}
      />
    </Layout>
  );
};

export default Q12_3;
