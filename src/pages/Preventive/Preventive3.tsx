import React from 'react'
import { Link } from "react-router-dom";
import Layout from "../../partials/Layout";
import "./preventiveStyle.scss";

const Preventive3 = () => {
  return (
    <div>
      <Layout>
        <div className="preventive_list">
          <h2 className="preventive_sub">
            <i className="fas fa-stethoscope"></i> 기억력이 떨어지면 조기에
            진료를 받습니다.
          </h2>
          <p className="preventive_description">
            과거에 비하여 기억력 및 인지기능이 떨어진다면 의료기관에서 전문가의
            평가를 받습니다. 퇴행성 뇌질환 이외에도 인지기능 저하를 일으킬 수
            있는 다양한 뇌질환의 가능성에 대한 평가와 치료를 위하여 중요합니다.
            치매의 일부는 조기에 발견하여 치료하면 증상의 호전이나 완치를 기대할
            수 있는 가역적인 원인을 가지고 있습니다.
          </p>
        </div>

        <div className="preventive_list">
          <h2 className="preventive_sub">
            <i className="far fa-hospital"></i> 정기적인 건강검진을 받습니다.
          </h2>
          <p className="preventive_description">
            고혈압, 당뇨, 고지혈증, 비만 등은 뇌혈관질환의 주요 위험
            인자들입니다. 정기적인 건강검진으로 뇌혈관질환의 위험인자를 조기에
            발견하고 적절한 의학적 치료를 하여 악화되지 않도록 합니다.
          </p>
        </div>

      </Layout>
    </div>
  );
};
export default Preventive3;