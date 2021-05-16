import React, { useEffect, useRef, useState } from "react";
import "../../../partials/surveyStyle.scss";
import Layout from "../../../partials/Layout";
import * as tf from "@tensorflow/tfjs";
import * as tmImage from "@teachablemachine/image";
import background from "./img/pentagon.png";
import upload from "../../../images/upload.png";
import { Link } from "react-router-dom";
import MMSESurveyThree from "../../../partials/MMSESurveyThree";
import { lists } from "../QuestionLists";
//@ts-ignore
import m20 from "../../../audios/m20.mp3";
import useCalcScore from "../../../redux/hooks/useCalcScore";

const MQ20 = () => {
  const [audio] = useState(new Audio(m20));

  useEffect(() => {
    audio.play();
  }, []);

  // 이미지 업로드 정의
  const [Picture, setPicture] = useState<any>(null);
  const [ImageData, setImageData] = useState<any>(background);
  const [PentagonGood, setPentagonGood] = useState(-1);
  const { onMMSECalcScore } = useCalcScore();

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

    // [0, 1, 2, 3] Pentagon Good만 가져오기
    setPentagonGood(prediction[2].probability.toFixed(2) * 100);
  }

  const renderResult = () => {
    // PentagonGood 80% 이상
    if (PentagonGood === -1) {
      return (
        <h2 className="pentagon_result">
          이미지를 업로드 후, 3초만 기다려주세요.
        </h2>
      );
    } else if (PentagonGood >= 80) {
      return <h4 className="pentagon_result">정상입니다.</h4>;
    } else {
      return <h4 className="pentagon_result">치매가 의심됩니다.</h4>;
    }
  };

  return (
    <Layout>
      <div className="question-title">문항 15</div>
      <div className="outer">
        <h3 className="Question_mq">
          Q. 아래 그림과 같이 오각형이 겹쳐져 있는 그림이 있습니다. 이 그림을
          따라 그리고 사진을 올려주세요.
        </h3>
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
      {renderResult()}
      {PentagonGood === -1 ? (
        <p className="check_alert"> </p>
      ) : (
        <div className="next_wrap">
          <Link
            style={{ padding: "10px auto", fontSize: "20px" }}
            onClick={
              PentagonGood >= 80
                ? () => onMMSECalcScore(1)
                : () => onMMSECalcScore(0)
            }
            to={lists[20].nextPage}>
            <button className="next_page">
              다음 페이지 <i className="fas fa-arrow-right"></i>
            </button>
          </Link>
        </div>
      )}
    </Layout>
  );
};

export default MQ20;
