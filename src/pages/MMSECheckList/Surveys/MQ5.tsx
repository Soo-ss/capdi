import React from "react";
import Layout from "../../../partials/Layout";
import MMSESurvey from "../../../partials/MMSESurvey";
import { lists } from "../QuestionLists";

const MQ5 = () => {
  return (
    <Layout>
      <MMSESurvey
        listNumber={lists[5].listNumber}
        title={lists[5].title}
        nextPage={lists[5].nextPage}
        answer={lists[5].answer}
      />
    </Layout>
  );
};

export default MQ5;
