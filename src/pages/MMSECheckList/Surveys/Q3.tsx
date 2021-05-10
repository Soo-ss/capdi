import React from "react";
import Layout from "../../../partials/Layout";
import MMSESurvey from "../../../partials/MMSESurvey";
import { lists } from "../QuestionLists";

const Q3 = () => {
  return (
    <Layout>
      <MMSESurvey
        listNumber={lists[3].listNumber}
        title={lists[3].title}
        nextPage={lists[3].nextPage}
      />
    </Layout>
  );
};

export default Q3;
