import React from "react";
import Layout from "../../../partials/Layout";
import MMSESurvey from "../../../partials/MMSESurvey";
import { lists } from "../QuestionLists";

const MQ7 = () => {
  return (
    <Layout>
      <MMSESurvey
        listNumber={lists[7].listNumber}
        title={lists[7].title}
        nextPage={lists[7].nextPage}
        answer={lists[7].answer}
      />
    </Layout>
  );
};

export default MQ7;
