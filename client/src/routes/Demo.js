import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../components/Demostyles.css";

const Demo = () => {
  const [showResult, setShowResult] = useState(false);

  const handleShowResult = () => {
    setShowResult(true);
  };

  return (
    <div>
      <NavBar />
      <div className="demodiv">
        <div className="demodivresults">
          <h2>Welcome to the Alzheimer's Detection App</h2>
          <p>
            This app is designed to help users identify and manage their
            Alzheimer's symptoms. It uses advanced machine learning algorithms
            to analyze brain scans and detect potential dementia.
          </p>
        </div>
        <div className="resultdiv">
          <h2>Text For Positive Alzheimer Case</h2>
          <div className="stammringresult">
            <p>
              "the boy is on a stool that is falling while he's trying to get
              some cookies out_of the cookie jar in the top shelf (.) of the
              cupboard . the little girl is reaching for a cookie . it looks
              like she's sort of laughing at the boy or putting her finger up to
              her mouth to be quiet so her mother doesn't hear who is in the
              kitchen drying dishes but the water in the sink is overflowing
              onto the floor and she's stepping in the water . the window is
              open . looks like &+s it's summer outside . [+ gram] yeah there's
              trees with leaves . is that all (.) you want me to do ? [+ exc]
              she's [//] (.) doesn't look it's like she hears them . she doesn't
              seem to be aware of them . some of the dishes are already washed
              and dried . is that all you want me to say ? [+ exc]"
            </p>
          </div>
          <h2>Results For The Above Text</h2>
          <button onClick={handleShowResult} className="resultshowbtn">
            Show Results
          </button>
          {showResult && (
            <div className="alzmhrresult">
              <p>
                We regret to inform you that the assessment indicates a positive
                diagnosis for Alzheimer's disease. This is undoubtedly
                distressing news, and we understand that it may bring about a
                range of emotions. Please know that you are not alone, and
                support is available. It's essential to consult with a
                healthcare professional to discuss next steps, treatment
                options, and to receive personalized support and guidance.
                Remember, early detection and intervention can make a
                significant difference in managing Alzheimer's disease and
                improving quality of life. Please take the time you need to
                process this information and reach out to loved ones or support
                groups for emotional support.
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Demo;
