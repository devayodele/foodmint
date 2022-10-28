import React from "react";
import "./experts.css";

export default function Experts() {
  return (
    <div className="experts">
      <button>EXPERTS</button>
      <h2>KITCHEN EXPERTS</h2>

      <div className="expertTeam">
        <div className="expert">
          <img
            src="https://themesfamily.com/tm/gatherer/assets/img/team/1.jpg"
            alt="expert"
          />
          <p className="expertName">Catherine Doe</p>
          <p>Graphic Designer</p>
        </div>

        <div className="expert">
          <img
            src="https://themesfamily.com/tm/gatherer/assets/img/team/2.jpg"
            alt="expert"
          />
          <p className="expertName">John Doe</p>
          <p>Web Designer</p>
        </div>

        <div className="expert">
          <img
            src="https://themesfamily.com/tm/gatherer/assets/img/team/3.jpg"
            alt="expert"
          />
          <p className="expertName">James Doe</p>
          <p>UI Designer</p>
        </div>

        <div className="expert">
          <img
            src="https://themesfamily.com/tm/gatherer/assets/img/team/4.jpg"
            alt="expert"
          />
          <p className="expertName">Jude Doe</p>
          <p>Frontend Developer</p>
        </div>
      </div>
    </div>
  );
}
