import React from 'react'
import { Link } from "react-router-dom";
import Layout from "../../partials/Layout";
import "./preventiveStyle.scss";

const Preventive = () => {
    return (
      <Layout>
        <h1 className="preventive_title">
          <i className="fas fa-check"></i> 치매 예방법
        </h1>
        <div className="preventive_list">
          <h2 className="preventive_sub">
            <i className="fas fa-running"></i> 적절한 운동을 합니다.
          </h2>
          <p className="preventive_description">
            걷기와 같은 낮은 강도의 운동만으로도 인지기능저하와 치매의 위험을
            낮출 수 있습니다. 또한 운동은 고혈압, 당뇨, 고지혈증, 비만 등의
            뇌혈관질환 위험인자들에 대해서도 보호효과를 가집니다.
          </p>
        </div>

        <div className="preventive_list">
          <h2 className="preventive_sub">
            <i className="fas fa-utensils"></i> 균형 잡힌 영양을 섭취합니다.
          </h2>
          <p className="preventive_description">
            비만을 피하는 식생활을 유지합니다. 일부 연구에서 비타민 C, E,
            항산화제, 불포화지방산이 치매 위험성을 낮춘다고 보고되었으나, 이는
            결과가 일관되지 않아 아직 확립된 내용은 아닙니다.
          </p>
        </div>

        <div className="preventive_list">
          <h2 className="preventive_sub">
            <i className="fas fa-brain"></i> 활발하게 두뇌를 사용합니다.
          </h2>
          <p className="preventive_description">
            적절한 수준의 두뇌 활동을 유지하는 것이 치매 예방에 도움이 됩니다.
            독서, 문화활동,악기 연주, 정원 가꾸기, 운동, 라디오 청취, TV 시청 등
            정신적인 노력이 동반되는 활동을 지속합니다.
          </p>
        </div>
        <Link to="/Preventive2">
          <button className="next_preventive_page">
            다음 페이지 <i className="fas fa-arrow-right"></i>
          </button>
        </Link>
      </Layout>
    );
        

}
export default Preventive