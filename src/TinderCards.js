import React, { useState } from 'react';
import TC from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: "Elon Musk",
            url: 
            "https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/getty_1175368064_200013332000928044_kjqjsa.jpg",
        },
        {
            name: "Jeff Bezos",
            url: 
            "https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/GettyImages-1169506489_465778_wjerel.jpg",
        },
        {
            name: "Mark Juckerberg",
            url: 
            "https://www.incimages.com/uploaded_files/image/1920x1080/getty_962130392_2000133320009280233_380105.jpg",
        },
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing:" + nameToDelete);
    };

    const outOfFrame = (name) => {
        console.log(name + " left the screen!");
    };

    return (
        <div className="tinder-cards">
            <div className="profile-box">
                {people.map((person) => (
                    <TC
                        className="Swipe"
                        key={person.name}
                        preventSwipe={["up","down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div
                        style={{backgroundImage: `url(${person.url})`}}
                        className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TC>
                ))}
            </div>
        </div>
    )
}

export default TinderCards;
