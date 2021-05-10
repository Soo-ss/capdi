import React from "react";
import Layout from "../../../partials/Layout";
import MMSESurvey from "../../../partials/MMSESurvey";
import { lists } from "../QuestionLists";

const Q10 = () => {
  return (
    <Layout>
      <MMSESurvey
        listNumber={lists[10].listNumber}
        title={lists[10].title}
        nextPage={lists[10].nextPage}
      />
    </Layout>
  );
};

export default Q10;
