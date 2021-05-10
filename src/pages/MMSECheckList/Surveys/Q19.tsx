import React from "react";
import Layout from "../../../partials/Layout";
import MMSESurvey from "../../../partials/MMSESurvey";
import { lists } from "../QuestionLists";

const Q19 = () => {
  return (
    <Layout>
      <MMSESurvey
        listNumber={lists[24].listNumber}
        title={lists[24].title}
        nextPage={lists[24].nextPage}
      />
    </Layout>
  );
};

export default Q19;
