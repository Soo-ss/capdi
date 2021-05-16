import React, { useEffect, useRef, useState } from "react";
import "./clockStyle.scss";
import Layout from "../../partials/Layout";
import * as tf from "@tensorflow/tfjs";
import * as tmImage from "@teachablemachine/image";
import background from "../../images/origin.png";
import upload from "../../images/upload.png";
import { Link } from "react-router-dom";

const ClockCheck = () => {
  // 이미지 업로드 정의
  const [Picture, setPicture] = useState<any>(null);
  const [ImageData, setImageData] = useState<any>(background);
  const [ClockGood, setClockGood] = useState(-1);

  const onChangePicture = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }

    if (event.target.files[0]) {
      // console.log("Picture: ", event.target.files);
      setPicture(event.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImageData(reader.result);
      });
      reader.readAsDataURL(event.target.files[0]);
    }

    // 파일업로드 이후 바로 예측하기
    predict();
  };

  // 티처블머신 시작
  let model: any, maxPredictions: any, myImage: any;
  myImage = useRef();

  async function initTM() {
    const publicURL = process.env.PUBLIC_URL;
    const modelURL = publicURL + "model.json";
    const metadataURL = publicURL + "metadata.json";

    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();
  }

  async function predict() {
    await initTM();

    // 이미지 가져오기
    myImage = myImage.current;
    // myImage = document.getElementById("myImage");
    const prediction = await model.predict(myImage, false);

    // [0, 1, 2, 3] Clock Good만 가져오기
    setClockGood(prediction[0].probability.toFixed(2) * 100);
  }

  const renderResult = () => {
    // ClockGood 80% 이상
    if (ClockGood === -1) {
      return (
        <h4 className="wait-message">
          이미지를 업로드 후, 3초만 기다려주세요.
        </h4>
      );
    } else if (ClockGood >= 80) {
      return <h2 className="normal">정상입니다~</h2>;
    } else {
      return (
        <h2 className="abnormal">
          치매가 의심됩니다. 가까운 병원에서 정밀검사를 받아보세요.
        </h2>
      );
    }
  };

  return (
    <Layout>
      <h1 className="clock_check_title">시계그리기 검사</h1>
      <div className="outer">
        <h2>Q. 11시 10분을 그리고 사진을 올려주세요.</h2>
      </div>

      <div className="image-upload-wrap">
        <img ref={myImage} src={ImageData} className="image_upload" />
      </div>
      <div className="btn_wrap">
        <label htmlFor="ex_file">
          <p>Upload file</p>
          <img src={upload}></img>
        </label>
        <input
          type="file"
          onChange={onChangePicture}
          className="file_upload_btn"
          id="ex_file"
        />
      </div>
      <div className="outer"> {renderResult()}</div>
      {/* <div className="submit_wrap">
        <Link to="/result">
          <button className="submit_btn">제출하기</button>
        </Link>
      </div> */}
    </Layout>
  );
};

export default ClockCheck;
