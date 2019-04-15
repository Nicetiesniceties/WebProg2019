import React from "react";
import { NavLink } from "react-router-dom";

function Contain(props) {
  return (
    <section className={props.classN}>
      <div className="inner">
        <article className="box">
          <header>
            <NavLink to={"/home/" + props.number}>
              <h2>{props.place}</h2>
            </NavLink>
            <p>{props.time}</p>
          </header>
        </article>
      </div>
    </section>
  );
}

export default Contain;
