import React from "react";

const About = ({ data }) => {
  if (data) {
    var name = data.name;
    var profilepic =
      "https://media-exp1.licdn.com/dms/image/C5603AQH5iYaFqtNDoA/profile-displayphoto-shrink_400_400/0/1634043467286?e=1655337600&v=beta&t=87MT6XPoEdGfMf3poB2FyQf_LD2ZWZKIGDYkFjgaA80";
    var bio = data.bio;
    var phone = data.phone;
    var email = data.email;
    var resumeDownload = data.resumedownload;
  }

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilepic}
            alt="Jiny's Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>{bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>{phone}</span>
                <br />
                <span>{email}</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a href={resumeDownload} className="button">
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
