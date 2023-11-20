import React, { useState } from "react";
import "../style/TabPanel.css";
function TabPanel() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="tab-panel">
      <div className="tab-buttons">
        <button
          onClick={() => handleTabClick(0)}
          className={activeTab === 0 ? "active" : ""}
        >
          Space Apps Challenge
        </button>
        <button
          onClick={() => handleTabClick(1)}
          className={activeTab === 1 ? "active" : ""}
        >
          Per Scholas
        </button>
        <button
          onClick={() => handleTabClick(2)}
          className={activeTab === 2 ? "active" : ""}
        >
          California Lutheran University
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 0 && (
          <div>
            <div id="pos-title">Web Developer/3D Artist</div>
            <div id="time-frame">October 2023</div>
            <div id="pos-desc">
              <ul>
                <li>
                  While collaborating with a team of five, I engaged in a
                  NASA-hosted hackathon where we aimed to develop a solution for
                  one of the challenges presented during the event. We had a
                  tight 48-hour timeframe to leverage NASA's provided data and
                  deliver our solution.
                </li>
                <li>
                  We tackled the marketplace challenge, designing a web
                  application to connect research enthusiasts with prestigious
                  open science projects like NASA's. I focused on creating an
                  engaging landing page, skillfully integrating interactive 3D
                  models.
                </li>
                <li>
                  I created the landing page by meticulously crafting 3D assets
                  in Blender and seamlessly integrating them into the
                  application using react-three-fiber. This included advanced
                  animation, precise camera controls, and seamless UI
                  integration with the Chakra library.
                </li>
              </ul>
            </div>
          </div>
        )}
        {activeTab === 1 && (
          <div>
            <div id="pos-title">IT Resident</div>
            <div id="time-frame">June 2023 - September 2023</div>
            <div id="pos-desc">
              <ul>
                <li>
                  Engaged in an immersive 12+ week program tailored for the
                  CompTIA A+ certification. I gained experience in a wide
                  spectrum of technical skills, including advanced software
                  troubleshooting, cloud computing, network management, and
                  hardware installation and repair.
                </li>
                <li>
                  The course was diligently instructed by two seasoned IT
                  professionals, boasting extensive experience and a diverse
                  array of certifications. The curriculum delved into an
                  extensive range of subjects outlined by the CompTIA, offering
                  a comprehensive exploration of vital topics. Additionally, we
                  delved into advanced areas such as configuring Windows virtual
                  environments and the intricacies of crafting a USB OS loader.
                </li>
                <li>
                  Beyond the classroom, I was tasked with virtual lab
                  assignments that intricately replicated diverse IT challenges.
                  These exercises encompassed tasks like conducting PC upgrades,
                  configuring dual-monitor setups, and troubleshooting
                  connectivity issues on problematic computers. In addition,
                  some of my peers established a collaborative Discord platform,
                  which served as a hub for organizing study sessions,
                  exchanging valuable resources, and assisting each other in
                  resolving any technical hurdles we encountered.
                </li>
              </ul>
            </div>
          </div>
        )}
        {activeTab === 2 && (
          <div>
            {" "}
            <div id="pos-title">Computer Science Student</div>
            <div id="time-frame">August 2017 - May 2022</div>
            <div id="pos-desc">
              <ul>
                <li>
                  During my academic journey at California Lutheran, my
                  coursework fostered a well-rounded education, exposing me to
                  diverse areas of study. In my specific field of study, I
                  completed the following courses: Compiler Fundamentals,
                  Systems Analysis, Operating Systems, Data Communications &
                  Networks, Advanced Computer Programming, Concepts of
                  Programming, Intro to Robotics, Organization of Programming
                  Language, and Capstone
                </li>
                <li>
                  Engaged in diverse projects, both individually and
                  collaboratively. In a team environment, I developed a Java
                  application that simulated the interaction between a GUI and a
                  MySQL database. Furthermore, we branched off from this project
                  and created a Java application as a team. This application
                  emulated a user interface for students to place food orders
                  with real-time order updates. For my capstone project, I
                  designed a mobile application to facilitate students in buying
                  and selling books within their school, implementing it in
                  React Native.
                </li>
                <li>
                  Outside of my major I also completed a minor in multimedia
                  with a focus on graphic design. Where I completed the
                  following courses: Visual Effects Motion Graphics &
                  Animations, Maxon Cinema 3D Animation, Multimedia Technology,
                  and Multimedia Community.
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TabPanel;
