import React, { useEffect, useState } from "react";
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
  };

  // 티처블머신 시작
  let webcam: any;
  let model: any, labelContainer: any, maxPredictions: any;

  async function initTM() {
    const publicURL = process.env.PUBLIC_URL;
    const modelURL = publicURL + "model.json";
    const metadataURL = publicURL + "metadata.json";

    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    // const flip = true; // whether to flip the webcam
    // webcam = new tmImage.Webcam(200, 200, flip); // width, height, flip
    // await webcam.setup(); // request access to the webcam
    // await webcam.play();
    window.requestAnimationFrame(loop);

    // append elements to the DOM
    // document.getElementById("webcam-container")?.appendChild(webcam.canvas);
    labelContainer = document.getElementById("label-container");
    for (let i = 0; i < maxPredictions; i++) {
      labelContainer.appendChild(document.createElement("div"));
    }
  }

  async function loop() {
    // webcam.update();
    await predict();
    window.requestAnimationFrame(loop);
  }

  async function predict() {
    // 이미지 가져오기
    let image = document.getElementById("myImage");
    // console.log(image);
    const prediction = await model.predict(image, false);
    // const prediction = await model.predict(webcam.canvas);
    for (let i = 0; i < maxPredictions; i++) {
      const classPrediction =
        prediction[i].className + ": " + prediction[i].probability.toFixed(2);
      labelContainer.childNodes[i].innerHTML = classPrediction;
    }
  }

  useEffect(() => {
    initTM();
    console.log("초기화");
  }, []);

  return (
    <Layout>
      <h1>Capdi Image Model</h1>
      <div>
        <input type="file" onChange={onChangePicture} />
      </div>
      <img id="myImage" src={ImageData} />
      <div id="label-container"></div>
    </Layout>
  );
};

export default ClockCheck;
