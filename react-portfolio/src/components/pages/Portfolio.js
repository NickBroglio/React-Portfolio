import React from 'react';
import '../portfolio.css';




function Portfolio() {
    const projects = [
        { 
            title: "SnapShot", 
            description: "An application that allows users to sing up an post pictures in a community.",
            github: "https://github.com/NickBroglio/SnapShot",
            deployed: 'https://snapshot-bh.herokuapp.com/',
            image: '/snapshot.png'
        },
        { 
            title: "Pokemon Data Finder", 
            description: "Searches for a pokemon, the results being their data stats and a video related to the pokemon.",
            github: "https://github.com/NickBroglio/Pokemon-Data-Finder",
            deployed: 'https://nickbroglio.github.io/Pokemon-Data-Finder/',
            image: '/pokemon.png'
        },
        { 
            title: "Weather Dashboard", 
            description: "Searches for the weather in the users area." ,
            github: "https://github.com/NickBroglio/Weather-Homework",
            deployed: 'https://nickbroglio.github.io/Weather-Homework/',
            image: '/weather.png'
        },
        {
            title: 'Day Planner',
            description: 'An application for someone to plan out their day.',
            github: 'https://github.com/NickBroglio/Day-Planner',
            deployed: 'https://nickbroglio.github.io/Day-Planner/',
            image: '/dayplanner.png'
        }
    ]
    return (
        <div className='portfolio'>
            {projects.map(project => {
                return (
                    <div className="card project" key={project.title}>
                        <img className="card-img-top image" src={project.image} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title title">{project.title}</h5>
                            <p className="card-text text">{project.description}</p>
                            <a href={project.github} className="btn btn-primary">Github Repo</a>
                            <a href={project.deployed} className="btn btn-primary">Deployed App</a>
                        </div>
                    </div>
                )
            })}

        </div>

    )
}

export default Portfolio;