import React, { useState } from "react";
import Home6 from "../components/Progress/Progress6";
import FormSuccess from "../components/Progress/content2/FormSuccess";

export default function home6() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <div>
      {/* <div className="form-container">
        <span className="close-btn">X</span>
        <div className="form-content-left">
          <img src="/vercel.svg" alt="" className="form-img" />
        </div>
      </div> */}

      {/* <Home6 /> */}
      {!isSubmitted ? <Home6 submitForm={submitForm} /> : <FormSuccess />}
      {/* <FormSuccess /> */}
    </div>
  );
}
