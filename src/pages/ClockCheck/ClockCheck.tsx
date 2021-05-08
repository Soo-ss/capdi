import React, { useEffect, useRef, useState } from "react";
import "./clockStyle.scss";
import Layout from "../../partials/Layout";
import * as tf from "@tensorflow/tfjs";
import * as tmImage from "@teachablemachine/image";

const ClockCheck = () => {
  // 이미지 업로드 정의
  const [Picture, setPicture] = useState<any>(null);
  const [ImageData, setImageData] = useState<any>(null);

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
  let model: any, labelContainer: any, maxPredictions: any, myImage: any;
  myImage = useRef();
  labelContainer = useRef();

  async function initTM() {
    const publicURL = process.env.PUBLIC_URL;
    const modelURL = publicURL + "model.json";
    const metadataURL = publicURL + "metadata.json";

    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    labelContainer = labelContainer.current;
    for (let i = 0; i < maxPredictions; i++) {
      labelContainer.appendChild(document.createElement("div"));
    }
  }

  async function predict() {
    await initTM();

    // 이미지 가져오기
    myImage = myImage.current;
    // myImage = document.getElementById("myImage");
    const prediction = await model.predict(myImage, false);
    for (let i = 0; i < maxPredictions; i++) {
      const classPrediction =
        prediction[i].className + ": " + prediction[i].probability.toFixed(2);
      labelContainer.childNodes[i].innerHTML = classPrediction;
    }
  }

  return (
    <Layout>
      <h1>시계그리기 검사</h1><br></br>
      <p className="clock_question">Q. 11시 10분을 그리고 사진을 업로드 해주세요.</p>
      <div className="img_upload">
        <img ref={myImage} src={ImageData} />
      </div>

      <div className="upload_btn">
        <p>사진 불러오기</p>
        <input className="file_select" type="file" onChange={onChangePicture} />
      </div>
      <div className="clock_result" ref={labelContainer}></div>
    </Layout>
  );
};

export default ClockCheck;
