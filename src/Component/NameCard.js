import React from "react";
import "./NameCard.css";
import avatar from "../images/women.png";


function NameCard(props){
    return(
        <div clasName="card-container">
                <header>
                    <img src={avatar} alt={props.name}/>
                </header>
                <h1 clasName="bold-text">
                    {props.name} <span clasName="normal-text"></span>
                </h1>
                <h3 clasName="normal-text">{props.position}</h3>
            <div className="social-container1">
				<div className="email">
					<h2 className="bold-text">{props.email}</h2>
				</div>

				<div className="phone">
					<h2 className="bold-text">{props.phone}</h2>
				</div>

            </div>
            <div className="social-container2">
                    <div className="home">
					    <h2 className="bold-text">{props.home}</h2>
				    </div>
                    <div className="website">
					    <h2 className="bold-text">{props.website}</h2>
				    </div>
            </div>
        </div>
    );
}

export default NameCard;
