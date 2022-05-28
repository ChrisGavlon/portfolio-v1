import React from 'react';

function Projects(){
    return (
    <div>
        <h2 className="my-projects">My Projects</h2>
        <div className="project-list">
            <div className="project-card">
                <a className="project-link" href='https://critical-mode.herokuapp.com/'>
                    <img src="https://cdn.discordapp.com/attachments/446049761854750722/979976921859383336/36584336.jpg" className="project-img"/>
                    <h4 className="project-title">Critical Mode</h4>
                    <h5 className="project-desc">I built this site with the intention of making a place where people can share their detailed opinions about videogames!</h5>
                </a>
            </div>
            <div className="project-card">
                <a className="project-link" href='https://edible-exchange.herokuapp.com/'>
                    <img src="https://cdn.discordapp.com/attachments/671167612582887442/980018035081490432/Edible_Exhange_Logo.jpg" className="project-img"/>
                    <h4 className="project-title">Edible Exchange</h4>
                    <h5 className="project-desc">I collaborated with my older brother Alex Aguirre, the purpose is for people to share recipes with eachother!</h5>
                </a>
            </div>
        </div>
    </div>
    )
}

export default Projects;