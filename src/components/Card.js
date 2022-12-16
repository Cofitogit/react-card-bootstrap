import React from "react";
import propTypes from "prop-types";
import "./cards.css";

function Card({ imageSource, title, text }) {
  return (
    <div className="card text-center bg-dark animate__animated animate__flipInX">
      <div className="overFlow">
        <img src={imageSource} alt="" className="card-img-top"/>
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">
          {text
            ? text
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam possimus omnis quos odio praesentium? Numquam in laborum sed tempore facilis ut assumenda impedit? Eligendi fugit neque necessitatibus earum at. Distinctio alias mollitia magnam."}
        </p>
        <a className="btn btn-outline-secondary rounded-0" href="#!">
          Go to this website
        </a>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: propTypes.string.isRequired,
  imageSource: propTypes.string,
};

export default Card;
