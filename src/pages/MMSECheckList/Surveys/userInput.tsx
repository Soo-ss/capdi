import React from 'react'
import { Link } from "react-router-dom";
import Layout from "../../../partials/Layout";
import "../listStyle.scss";

const userInput = ()=> {
    return  (
        <Layout>
            <Link to="/mq1">
                <h1 className="notice_title">{"< "}주의사항{" >"}</h1>
                <div className="MMSE_notice">
                    <ul>
                        <li>1. 보호자가 반드시 필요합니다.</li>
                        <li>2. 검사자의 학력, 성별, 나이에 따라 검사기준이 달라지므로 정확히 입력해주시기 바랍니다.</li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>

                <div className="MMSE_input">
                    입력창
                </div>


                <div className="go_MMSE">
                    MMSE검사 시작하기
                </div>
            </Link>

        </Layout>
    );
}

export default userInput;