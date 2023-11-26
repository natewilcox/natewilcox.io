import React from "react";

const Services = ({ classicHeader, darkTheme }) => {
  // services details
  const services = [
    {
      name: "Cyber Security",
      desc: "Expertise in digital security and access management. I bring valuable experience to protect and manage secure environments effectively.",
      icon: "fas fa-lock",
    },
    {
      name: "Web Development",
      desc: "Developed web applications using diverse technologies such as Angular, REACT, .NET, Java, Node.js, Groovy, and Ruby on Rails, among others.",
      icon: "fas fa-desktop",
    },
    {
      name: "DevSecOps Engineering",
      desc: "Hands-on experience leveraging GitLab and Jenkins to build robust CI/CD pipelines, enabling seamless integration and efficient delivery processes.",
      icon: "fas fa-shield",
    },
    {
      name: "Test Automation",
      desc: "Experience in test automation, leveraging tools like QTP and Selenium to ensure continuous integration and delivery.",
      icon: "fas fa-flask-vial",
    },
    {
      name: "Game Developer",
      desc: "An aspiring amateur game developer utilizing Phaser 3.5 to create exciting and immersive gaming experiences. At least in my humble opinion",
      icon: "fas fa-gamepad",
    },
  ];

  return (
    <section
      id="services"
      className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-white-50  opacity-1" : "text-light  opacity-4")
            }
          >
            What I Do
          </h2>
          <p
            className={
              "text-9  fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            Professionally and as a Hobby
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        {/* content start */}
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              {services.length > 0 &&
                services.map((service, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="featured-box style-3 mb-5">
                      <div
                        className={
                          "featured-box-icon text-primary  shadow-sm rounded " +
                          (darkTheme ? "bg-dark-1" : "bg-white")
                        }
                      >
                        <i className={service.icon} />
                      </div>
                      <h3 className={darkTheme ? "text-white" : ""}>
                        {service.name}
                      </h3>
                      <p
                        className={"mb-0 " + (darkTheme ? "text-white-50" : "")}
                      >
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* content end */}
      </div>
    </section>
  );
};

export default Services;
