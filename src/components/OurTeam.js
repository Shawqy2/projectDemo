import React from "react";

const OurTeam = () => {
    return (
        <section className="our-team" id="our-team">
            <h2>Meet Our Team</h2>
            <div className="team-container">
                {/* Repeat this block for each team member */}
                <div className="team-member">
                    <img src={`${process.env.PUBLIC_URL}/images/TEAM.jpg`} alt="Team Member 1" />
                    <h3>Shawqy Hussien</h3>
                    <p className="role">Front-End Developer</p>
                    <p className="description">
                        ....
                    </p>
                    <a href="#">Contact</a>
                </div>
                <div className="team-member">
                    <img src={`${process.env.PUBLIC_URL}/images/TEAM.jpg`} alt="Team Member 1" />

                    <h3>Shawqy Hussien</h3>
                    <p className="role">Front-End Developer</p>
                    <p className="description">
                        ....
                    </p>
                    <a href="#">Contact</a>
                </div>
                <div className="team-member">
                    <img src={`${process.env.PUBLIC_URL}/images/TEAM.jpg`} alt="Team Member 1" />
                    <h3>Shawqy Hussien</h3>
                    <p className="role">Front-End Developer</p>
                    <p className="description">
                        ....
                    </p>
                    <a href="#">Contact</a>
                </div>
                <div className="team-member">
                    <img src={`${process.env.PUBLIC_URL}/images/TEAM.jpg`} alt="Team Member 1" />

                    <h3>Shawqy Hussien</h3>
                    <p className="role">Front-End Developer</p>
                    <p className="description">
                        ....
                    </p>
                    <a href="#">Contact</a>
                </div>
                <div className="team-member">
                    <img src={`${process.env.PUBLIC_URL}/images/TEAM.jpg`} alt="Team Member 1" />

                    <h3>Shawqy Hussien</h3>
                    <p className="role">Front-End Developer</p>
                    <p className="description">
                        ....
                    </p>
                    <a href="#">Contact</a>
                </div>
                <div className="team-member">
                    <img src={`${process.env.PUBLIC_URL}/images/TEAM.jpg`} alt="Team Member 1" />

                    <h3>Shawqy Hussien</h3>
                    <p className="role">Front-End Developer</p>
                    <p className="description">
                        ....
                    </p>
                    <a href="#">Contact</a>
                </div>

            </div>
        </section>
    );
};

export default OurTeam;
