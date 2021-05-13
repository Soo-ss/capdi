import React from 'react'
import { Link } from "react-router-dom";
import Layout from "../../partials/Layout";
import "./preventiveStyle.scss";


const Preventive2 = () => {
    
    return (
        <Layout>
            <div className="preventive_list">
                <h2 className="preventive_sub">
                    <i className="fas fa-smoking-ban"></i> {" "}
                    과도한 음주와 흡연을 피합니다.
                    </h2>
                <p className="preventive_description">
                과도한 음주, 습관적인 음주는 뇌세포를 파괴하여 알코올성 치매를 일으킬 수 있습니다.
                흡연을 하면 담배의 성분 중 니코틴이 뇌혈관을 수축시켜 뇌세포를 
                손상시킬 수 있습니다.
                </p>
            </div>

            <div className="preventive_list">
                <h2 className="preventive_sub">
                    <i className="far fa-handshake"></i> {" "}
                    대인관계와 사회활동을 유지합니다.
                    </h2>
                <p className="preventive_description">
                혼자 고립되어 지내는 것 보다 적당한 대인관계와 사회활동을 유지하는 것이
                인지기능을 유지하고 치매를 예방하는 데에 도움이 됩니다. 
                가족과 대화를 나누고, 모임이나 노인정 등에 나가 사회활동을 지속하는 것이 좋습니다.
                </p>
            </div>


            <div className="preventive_list">
                <h2 className="preventive_sub">
                <i className="far fa-sad-tear"></i> {" "}
                    우울증을 치료합니다.
                    </h2>
                <p className="preventive_description">
                우울증이 있을 경우 치매의 발병률이 약 2-3배 높아진다는 것이 여러 연구에서 알려져 있습니다.
                기전은 명확히 알려져 있지 않으나, 우울증이 있을 경우 스트레스 호르몬인 코티졸의 분비가 지속적으로 높아져 
                뇌에서 기억을 담당하는 해마 부위의 손상을 초래할 가능성이 있습니다.
                </p>
            </div>

            <Link to="/Preventive">
                <button className="next_preventive_page">
                    <i className="fas fa-arrow-left"></i>
                    이전 페이지
                </button>
            </Link>
        </Layout>
    )
}

export default Preventive2;