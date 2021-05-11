import React from "react";
import Layout from "../../../partials/Layout";
import MMSESurvey from "../../../partials/MMSESurvey";
import { lists } from "../QuestionLists";

const MQ12And3 = () => {
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

export default MQ12And3;
