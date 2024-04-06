import React from "react";
import cardData from "../cardData"

const Card = ({ cardData }) => {
    return (
        <div className="col-10 col-sm-5 col-xl-3 mx-auto mb-3 p-1 p-sm-0 p-xl-3">
            <div className="card" key={cardData.id}>
                <img src={cardData.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{cardData.title}</h5>
                    <p className="card-text">{cardData.text}</p>
                    <a href="#" className="btn btn-primary">{cardData.buttonText}</a>
                </div>
            </div>
        </div>
    )
}

export default Card;