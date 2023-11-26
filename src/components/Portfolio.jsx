import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = ({ classicHeader, darkTheme }) => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  const filters = {
    APPLICATIONS: "Applications",
    GAMES: "Games",
    PHOTOS: "Photos",
  };

  const projectsData = [
    {
      title: "Open Source Battle Royale",
      projectInfo:
        "This online battle royale game brings together the thrilling gameplay of a battle royale with the beloved characters and art style of Legend of Zelda. Set in the fantastical world of Hyrule, players battle it out to be the last one standing using an array of weapons, items, and abilities from the iconic franchise.",
      //client: "Ruby Clinton",
      technologies: "HTML5, Phaser 3.5, Firebase, AWS, Gitlab",
      industry: "Game Development",
      date: "July 16, 2022",
      url: {
        name: "osbr.natewilcox.io",
        link: "https://osbr.natewilcox.io",
      },
      // socialLinks: {
      //   facebook: "http://www.facebook.com/",
      //   twitter: "http://www.twitter.com/",
      //   google: "http://www.google.com/",
      //   instagram: "http://www.instagram.com/",
      //   mail: "mailto:example@gmail.com",
      // },
      thumbImage: "images/projects/osbr.png",
      sliderImages: [
        "images/projects/osbr.png"
      ],
      categories: [filters.GAMES],
    },
    {
      title: "Dungeon Crawler",
      projectInfo:
        "In Dungeon Crawler, players will take on the role of a hero trying to escape from a dangerous dungeon before their torch goes out. The game will be played in a top-down perspective and will feature simple controls for movement and limited combat options. Players will need to navigate through the dungeon, avoiding enemies and collecting loot along the way while keeping an eye on their torch's remaining time. If the hero's torch runs out of fuel, the hero will die as monsters lurking in the shadows will attack.",
      //client: "Ruby Clinton",
      technologies: "HTML5, Phaser 3.5",
      industry: "Game Development",
      date: "Jan 1, 2023",
      url: {
        name: "dungeon-crawler.natewilcox.io",
        link: "https://dungeon-crawler.natewilcox.io",
      },
      // socialLinks: {
      //   facebook: "http://www.facebook.com/",
      //   twitter: "http://www.twitter.com/",
      //   google: "http://www.google.com/",
      //   instagram: "http://www.instagram.com/",
      //   mail: "mailto:example@gmail.com",
      // },
      thumbImage: "images/projects/dungeon-crawler.png",
      sliderImages: [
        "images/projects/dungeon-crawler.png"
      ],
      categories: [filters.GAMES],
    },
    {
      title: "Cincinnati Gamestore Review",
      projectInfo:
        "This site is dedicated to reviewing retro game stores in Cincinnati, Ohio, providing a valuable resource for local gamers and collectors. Our passion for vintage gaming led us to create this platform, which offers unbiased reviews of various stores in the area. We aim to provide a comprehensive overview of each store, including their game selection, pricing, customer service, and atmosphere, to help users make informed decisions about where to shop. ",
      //client: "Ruby Clinton",
      technologies: "HTML5, Angular, Typescript",
      industry: "Game Development",
      date: "Oct 1, 2022",
      url: {
        name: "cgr.natewilcox.io",
        link: "https://cgr.natewilcox.io",
      },
      // socialLinks: {
      //   facebook: "http://www.facebook.com/",
      //   twitter: "http://www.twitter.com/",
      //   google: "http://www.google.com/",
      //   instagram: "http://www.instagram.com/",
      //   mail: "mailto:example@gmail.com",
      // },
      thumbImage: "images/projects/cgr.png",
      sliderImages: [
        "images/projects/cgr.png"
      ],
      categories: [filters.APPLICATIONS],
    },
    {
      title: "Code Path",
      projectInfo:
        "I have developed a fun and educational app that teaches programming to children. With this app, kids can guide a car to its target location by selecting commands, such as \"move forward\", \"turn left\" or \"turn right\". The game requires logic and problem-solving skills as players must navigate obstacles and avoid pitfalls to reach their goal. Through this app, my daughter has learned programming concepts such as loops, conditionals and sequencing in a fun and interactive way. With its colorful graphics, engaging gameplay and educational benefits, this app is perfect for any child who wants to learn the basics of programming.",
      //client: "Ruby Clinton",
      technologies: "HTML5, Angular, Typescript",
      industry: "Application Development",
      date: "Mar 1, 2022",
      url: {
        name: "codepath.natewilcox.io",
        link: "https://codepath.natewilcox.io",
      },
      // socialLinks: {
      //   facebook: "http://www.facebook.com/",
      //   twitter: "http://www.twitter.com/",
      //   google: "http://www.google.com/",
      //   instagram: "http://www.instagram.com/",
      //   mail: "mailto:example@gmail.com",
      // },
      thumbImage: "images/projects/codepath.png",
      sliderImages: [
        "images/projects/codepath.png"
      ],
      categories: [filters.APPLICATIONS],
    },
    {
      title: "FitRace",
      projectInfo:
        "A web app that loads mine and my daughter's Fitbit steps, displaying racing images based on step counts.",
      //client: "Ruby Clinton",
      technologies: "HTML5, Angular, Typescript, FitBit Web API",
      industry: "Application Development",
      date: "July 25, 2023",
      url: {
        name: "race.natewilcox.io",
        link: "https://race.natewilcox.io",
      },
      // socialLinks: {
      //   facebook: "http://www.facebook.com/",
      //   twitter: "http://www.twitter.com/",
      //   google: "http://www.google.com/",
      //   instagram: "http://www.instagram.com/",
      //   mail: "mailto:example@gmail.com",
      // },
      thumbImage: "images/projects/race.png",
      sliderImages: [
        "images/projects/race.png"
      ],
      categories: [filters.APPLICATIONS],
    },
    {
      title: "TIC TAC TOE",
      projectInfo:
        "Simple Tic Tac Toe game built with HTML, CSS, and Javascript. Challenge your friend online or play a stranger",
      technologies: "HTML5, PHASER3.5, Typescript",
      industry: "Game Development",
      date: "November 25, 2023",
      url: {
        name: "tic-tac-toe.natewilcox.io",
        link: "https://tic-tac-toe.natewilcox.io/",
      },
      thumbImage: "images/projects/ttt.png",
      sliderImages: [
        "images/projects/ttt.png"
      ],
      categories: [filters.GAMES],
    }
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <section
        id="portfolio"
        className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
      >
        <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
          {/* Heading */}
          <div className="position-relative d-flex text-center mb-5">
            <h2
              className={
                "text-24  text-uppercase fw-600 w-100 mb-0 " +
                (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
              }
            >
              Side Projects
            </h2>
            <p
              className={
                "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                (darkTheme ? "text-white" : "text-dark")
              }
            >
              {" "}
              Some Unfinished Side Projects
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}
          {/* Filter Menu */}
          <ul
            className={
              "portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-5 " +
              (darkTheme ? "nav-light" : "")
            }
          >
            <li className="nav-item">
              <button
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
              >
                All
              </button>
            </li>
            {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-item" key={i}>
                <button
                  className={
                    "nav-link " +
                    (filterKey === filters[oneKey] ? "active" : "")
                  }
                  onClick={handleFilterKeyChange(filters[oneKey])}
                >
                  {filters[oneKey]}
                </button>
              </li>
            ))}
          </ul>
          {/* Filter Menu end */}
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-6 col-lg-4 filter-item " +
                      project.categories.join(" ")
                    }
                    key={index}
                  >
                    <div className="portfolio-box rounded">
                      <div className="portfolio-img rounded">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage}
                          alt=""
                        />
                        <div className="portfolio-overlay">
                          <a
                            className="popup-ajax stretched-link"
                            href="###"
                            onClick={() => {
                              setSelectedProjectDetails(projectsData[index]);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          > </a>
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white fw-400">
                              {project.title}
                            </h5>
                            <span className="text-light">{project.categories}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          darkTheme={darkTheme}
        ></ProjectDetailsModal>
      </div>
    </>
  );
};

export default Portfolio;
