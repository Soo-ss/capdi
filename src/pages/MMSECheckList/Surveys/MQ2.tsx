import React from "react";
import Layout from "../../../partials/Layout";
import MMSESurvey from "../../../partials/MMSESurvey";
import { lists } from "../QuestionLists";

const MQ2 = () => {
  return (
    <Layout>
      <MMSESurvey
        listNumber={lists[2].listNumber}
        title={lists[2].title}
        nextPage={lists[2].nextPage}
      />
    </Layout>
  );
};

export default MQ2;
