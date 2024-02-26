import React from "react";

import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <section className="notFound">
        <div className="container">
          <img src="/notFound.svg" alt="notFound" />
          <h1>404 NOT FOUND</h1>
          <p>你要查找的页面丢失了...</p>
          <p></p>
          <Link to={"/"}>返回主页</Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;
