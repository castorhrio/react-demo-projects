import React from "react";

import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">关于我们</h1>
            <p>既然生活，就要有滋有味</p>
          </div>
          <p className="mid">
            每个生命都有一个食谱，新鲜的食物，新鲜的想法，生活的味道就在咫尺之遥。为美食而来，为气氛而驻足，享受我们的季节性菜单，体验自然之美，适合每个人的五星级口味。真正的成分，真正的味道，真正的热情，用我们的美食满足您的灵魂，我们不仅仅是一家餐厅，我们是一种文化体验。
          </p>
          <Link to={"/"}>
            浏览菜单{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>

        <div className="banner">
          <img src="/about.png" alt="关于我们" />
        </div>
      </div>
    </section>
  );
};

export default About;
