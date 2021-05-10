import React from "react";
import Layout from "../../../partials/Layout";
import MMSESurvey from "../../../partials/MMSESurvey";
import { lists } from "../QuestionLists";

const Q9 = () => {
  return (
    <Layout>
      <MMSESurvey
        listNumber={lists[9].listNumber}
        title={lists[9].title}
        nextPage={lists[9].nextPage}
      />
    </Layout>
  );
};

export default Q9;
