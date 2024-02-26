import React from "react";
import { data } from "../restApi.json";
const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">我们的团队</h1>
          <p>
            我们的厨师团队具备丰富的经验和烹饪技艺。他们在过去的项目中表现出色，赢得了许多好评。他们的专业知识和技艺使他们能够创造出独特而美味的菜肴。
          </p>
        </div>

        <div className="team_container">
          {data[0].team.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.name} />
                <h3>{element.name}</h3>
                <p>{element.designation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
