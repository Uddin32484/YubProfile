import React from "react";
import "./FlipCard.css";


const FlipCard = () => {
  return (
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img
            src="/assets/images/line/Yubprofile2.jpg"
            alt="Avatar"
            style={{width: "300px", height: "300px"}}
          />
        </div>
      {/*   <div className="flip-card-back">
          <ReactMarkdown source={back}></ReactMarkdown>
        </div> */}
      </div>
    </div>
  );
};

export default FlipCard;
