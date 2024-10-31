import React from "react";

const DidYouKnow: React.FC = () => {
  const style = {
    backgroundColor: "#ffe6e6", // Light red background
    padding: "15px",
    borderRadius: "5px",
    margin: "20px 0",
    fontSize: "1em",
    border: "1px solid #ff9999",
  };

  return (
    <div style={style}>
      <strong>Did You Know?</strong>
      <br />
      <p>
        In 2017, Equifax suffered a massive breach that exposed data of 147
        million people due to an unpatched vulnerability in an open-source
        library. Because security wasn’t embedded in their DevOps pipeline, this
        flaw went unnoticed for months. Had DevSecOps practices like automated
        vulnerability scans been in place, the breach might have been prevented,
        saving Equifax billions in losses and severe reputational damage. This
        incident highlighted the critical need for security-first DevOps,
        sparking a global shift toward DevSecOps.
      </p>
    </div>
  );
};

export default DidYouKnow;
