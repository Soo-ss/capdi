import React from "react";
import Layout from "../../../partials/Layout";
import MMSESurvey from "../../../partials/MMSESurvey";
import { lists } from "../QuestionLists";

const MQ12And5 = () => {
  return (
    <Layout>
      <MMSESurvey
        listNumber={lists[16].listNumber}
        title={lists[16].title}
        nextPage={lists[16].nextPage}
      />
    </Layout>
  );
};

export default MQ12And5;
