import React from "react";
import Layout from "../../../partials/Layout";
import MMSESurvey from "../../../partials/MMSESurvey";
import { lists } from "../QuestionLists";

const MQ9 = () => {
  return (
    <Layout>
      <MMSESurvey
        listNumber={lists[9].listNumber}
        title={lists[9].title}
        nextPage={lists[9].nextPage}
        answer={lists[9].answer}
      />
    </Layout>
  );
};

export default MQ9;
