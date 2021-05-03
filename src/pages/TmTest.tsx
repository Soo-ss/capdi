import React from "react";
import Layout from "../partials/Layout";

declare global {
  interface Window {
    tmImage: any;
  }
}

const TmTest = () => {
  let model: any, webcam: any, labelContainer: any, maxPredictions: any;

  const tmImage = window.tmImage;

  async function init() {
    const publicURL = process.env.PUBLIC_URL;
    const modelURL = publicURL + "model.json";
    const metadataURL = publicURL + "metadata.json";

    // load the model and metadata
    // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
    // Note: the pose library adds a tmPose object to your window (window.tmPose)
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    // Convenience function to setup a webcam
    const flip = true; // whether to flip the webcam
    webcam = new tmImage.Webcam(200, 200, flip); // width, height, flip
    await webcam.setup(); // request access to the webcam
    await webcam.play();
    window.requestAnimationFrame(loop);

    // append elements to the DOM
    document.getElementById("webcam-container")?.appendChild(webcam.canvas);
    labelContainer = document.getElementById("label-container");
    for (let i = 0; i < maxPredictions; i++) {
      // and class labels
      labelContainer.appendChild(document.createElement("div"));
    }
  }

  async function loop() {
    webcam.update(); // update the webcam frame
    await predict();
    window.requestAnimationFrame(loop);
  }

  // run the webcam image through the image model
  async function predict() {
    // predict can take in an image, video or canvas html element
    const prediction = await model.predict(webcam.canvas);
    for (let i = 0; i < maxPredictions; i++) {
      const classPrediction =
        prediction[i].className + ": " + prediction[i].probability.toFixed(2);
      labelContainer.childNodes[i].innerHTML = classPrediction;
    }
  }
  return (
    <Layout>
      <h1>Capdi Image Model</h1>
      <button type="button" onClick={init}>
        Start
      </button>
      <div id="webcam-container"></div>
      <div id="label-container"></div>
    </Layout>
  );
};

export default TmTest;
