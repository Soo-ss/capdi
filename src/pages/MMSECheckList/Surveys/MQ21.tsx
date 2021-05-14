import React from "react";
import Layout from "../../../partials/Layout";
import MMSESurvey from "../../../partials/MMSESurvey";
import { lists } from "../QuestionLists";

const MQ21 = () => {
  return (
    <Layout>
      <MMSESurvey
        listNumber={lists[21].listNumber}
        title={lists[21].title}
        nextPage={lists[21].nextPage}
        answer={lists[21].answer}
      />
    </Layout>
  );
};

export default MQ21;
