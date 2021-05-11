import React from "react";
import Layout from "../../../partials/Layout";
import MMSESurvey from "../../../partials/MMSESurvey";
import { lists } from "../QuestionLists";

const MQ8 = () => {
  return (
    <Layout>
      <MMSESurvey
        listNumber={lists[8].listNumber}
        title={lists[8].title}
        nextPage={lists[8].nextPage}
      />
    </Layout>
  );
};

export default MQ8;
