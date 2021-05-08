import React from "react";
import Layout from "../../partials/Layout";
import "./shapeStyle.scss";

const ShapeCheck = () => {
  return (
    <Layout>
      <h1>MMSE 검사</h1>
      <div className="mmse__check">
        <div className="question">
          <p>1. 오늘은 며칠입니까? (5점)</p>
          <input type="text" name="date"/>
        </div>
        <div className="question">
          <p>2. 당신의 주소는? (4점)</p>
          <input type="text" name="address" placeholder="시(도) 구(군) 동(면) 번지"/>
        </div> 
        <div className="question">
          <p>3. 여기는 무엇을 하는 곳 입니까? (1점)</p>
          <input type="text" name="place" placeholder="예:거실, 주택, 아파트"/>
        </div>

        <div className="remember">
          <div className="question">
            <p>4. 물건 이름 세 가지를 적으시오. (3점)</p>
            <input type="text" name=""/>
          </div>
        </div>






      </div>
      
    </Layout>
  );
};

export default ShapeCheck;
