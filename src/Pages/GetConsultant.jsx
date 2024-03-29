import React from "react";

function GetConsultant() {
  return (
    <div className="Get-ConsultantDiv">
      <div className="Get-Consultant-Inner">
        <h3>Get Consultant</h3>
        <div className="Get-Consultant-Customer">
          <h4>Dear Customer,</h4>
          <p>
            Please note you can reach consultant on below mentioned timinig's on
            every week.(Public holiday's and govt holiday's are office not
            operatable)
          </p>
        </div>
        <div className="Get-Consultants-Timings">
          <p>
            Monday <span>10:00 AM to 11:50 AM</span> &{" "}
            <span>5:00 PM to 7:00 PM</span>
          </p>
          <p>
            Tuesday <span>10:00 AM to 11:50 AM</span> &{" "}
            <span>5:30 PM to 7:30 PM</span>
          </p>
          <p>
            Wednesday <span>10:00 AM to 11:50 AM</span> &{" "}
            <span>6:00 PM to 7:50 PM</span>
          </p>
          <p>
            Thrusday <span>10:00 AM to 11:50 AM</span> &{" "}
            <span>6:00 PM to 8:00 PM</span>
          </p>
          <p>
            Friday <span>10:00 AM to 11:50 AM</span> &{" "}
            <span>6:00 PM to 7:50 PM</span>
          </p>
          <p>
            Saturday <span>11:00 AM to 12:00 PM</span>
          </p>
          <h5>
            <b>SUNDAY HOLIDAY</b>
          </h5>
        </div>
        <div className="Get-Consultants-Contacts">
          <p>
            <u>Contact Line's:</u>
          </p>
          <p> +91 76007 86008</p>
          <p> +91 76007 86009</p>
          <p> +91 76007 86010</p>
          <p> +91 76007 86012</p>
        </div>
        <p>
          Back to <a href="/all-products">Products</a>
        </p>
      </div>
    </div>
  );
}

export default GetConsultant;
