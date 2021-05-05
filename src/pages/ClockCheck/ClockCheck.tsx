import React from "react";
import $ from "jquery";
import "./clockStyle.scss";
import Layout from "../../partials/Layout";

// rafce

const ClockCheck = () => {
  function readURL(input: any) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $(".image-upload-wrap").hide();

        $(".file-upload-image").attr("src");
        $(".file-upload-content").show();

        $(".image-title").html(input.files[0].name);
      };

      reader.readAsDataURL(input.files[0]);
    } else {
      removeUpload();
    }
  }

  function removeUpload() {
    $(".file-upload-input").replaceWith($(".file-upload-input").clone());
    $(".file-upload-content").hide();
    $(".image-upload-wrap").show();
  }
  $(".image-upload-wrap").bind("dragover", function () {
    $(".image-upload-wrap").addClass("image-dropping");
  });
  $(".image-upload-wrap").bind("dragleave", function () {
    $(".image-upload-wrap").removeClass("image-dropping");
  });

  return (
    <Layout>
      <script
        className="jsbin"
        src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
      <div className="text-title">
        <h6>Upload Image</h6>
      </div>
      <div className="file-upload">
        <div className="image-upload-wrap">
          <input
            className="file-upload-input"
            type="file"
            onChange={(e) => readURL(this)}
            accept="image/*"
          />
          <div className="drag-text">
            <h3>Drag and drop a file or select add Image</h3>
          </div>
        </div>
        <button
          className="file-upload-btn"
          type="button"
          onClick={(e) => $(".file-upload-input").trigger("click")}>
          Upload file
        </button>
        <div className="file-upload-content">
          <img className="file-upload-image" src="#" alt="your image" />
          <div className="image-title-wrap">
            <button
              type="button"
              onClick={(e) => removeUpload()}
              className="remove-image">
              Remove <span className="image-title">Upload file</span>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ClockCheck;
