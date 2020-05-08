import React, { Component } from "react";
import "./Resume.css";
import ResumePdf from "../../Files/resume.pdf";

class Resume extends Component {
  componentDidMount() {
    this.props.setHighLight(this.props.index);
  }
  render() {
    return (
      <div className="resume-div">
        <div className="resume-opt"></div>
        <iframe
          className="resume-pdf"
          src={`${ResumePdf}#zoom=FitH"`}
          name="ShiminRao_Resume.pdf"
          title="ShiminRao_Resume.pdf"
        >
          This browser does not support PDFs. Please download the PDF to view
          it:
          <a href={ResumePdf}>Download PDF</a>
        </iframe>
        {/* <object
        id="pdf_content"
        width="100%"
        height="1500px"
        type="application/pdf"
        trusted="yes"
        application="yes"
        title="Assembly"
        data={`${ResumePdf}#zoom=FitH"`} 
      >*/}
        {/* <embed
        src={`${ResumePdf}#zoom=FitH"`}
        width="100%"
        height="100%"
        type="application/x-pdf"
        trusted="yes"
        application="yes"
        title="Assembly"
      ></embed> */}
        {/* <p>System Error - This PDF cannot be displayed, please contact IT.</p>
      </object> */}
      </div>
    );
  }
}

export default Resume;
