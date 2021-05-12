import React from 'react'
import { Link } from "react-router-dom";
import Layout from "../../../partials/Layout";
import "../listStyle.scss";

const userInput = ()=> {
    return  (
        <Layout>
            <Link to="/mq1">
                유저 정보입력, 주의사항 적을거임


                <div className="go_MMSE">
                    MMSE검사 시작하기
                </div>
            </Link>

        </Layout>
    );
}

export default userInput;