import * as React from "react";
import './about.css'
import styled from "styled-components";
import Footer from "./Footer";
import gaurav from './gaurav.png'
import amol from './amol.png'


const About = () => {
    return (
            <MainContainer>
                <SectionWrapper>
                    <Main>
                        <SectionTitle>Meet the Team</SectionTitle>
                        <Divider />
                        <TeamSection>
                            <TeamMemberGrid>
                                <div className="col-sm-6 col-md-4">
                                        <TeamMemberColumn><img src={gaurav}
                                                               className="team-img" alt="pic"/>
                                            <h3>Gaurav Toravane</h3>
                                            <div className="team-info"><p>Founder and CEO</p></div>
                                            <p>Gaurav is a dynamic Software Professional with 4 years' experience, excels in leading cross-functional teams and shaping resilient application architecture at Amazon Web Services and Fintech companies in the past. Achievements include API transformations, budget management exceeding USD 6 million, and effective vulnerability mitigation.</p>

                                            <ul className="team-icon">
                                                <li>
                                                    <a href="https://www.linkedin.com/in/gauravtoravane/" className="twitter">
                                                        <i className="fa-brands fa-linkedin"></i>
                                                    </a>
                                                </li>

                                                {/*<li><a href="https://www.linkedin.com/in/gauravtoravane/" className="twitter">*/}
                                                {/*    <i className="fa-brands fa-twitter"></i>*/}
                                                {/*</a></li>*/}

                                                <li><a href="#" className="pinterest">
                                                    <i className="fa fa-pinterest"></i>
                                                </a></li>

                                                <li><a href="#" className="facebook">
                                                    <i className="fa fa-facebook"></i>
                                                </a></li>

                                                <li><a href="#" className="dribble">
                                                    <i className="fa fa-dribbble"></i>
                                                </a></li>
                                            </ul>
                                        </TeamMemberColumn>



                                </div>
                                <div className="col-sm-6 col-md-4">

                                    <TeamMemberColumn>
                                        <img src={amol} className="team-img" alt="pic"/>

                                        <h3>Amol Pagar</h3>

                                        <div className="team-info"><p>Engineering Advisor</p></div>

                                        <p>
                                            Amol is a highly versatile and value-driven SME credited with delivering transformational programs and systems. Talent for turning long-term vision into realistic objectives by incorporating a wide range of cutting-edge technologies into strategic direction.
                                        </p>

                                        <ul className="team-icon">

                                            <li><a href="https://www.linkedin.com/in/amol-pagar-92a99592/" className="twitter"><i className="fa-brands fa-linkedin"></i></a></li>

                                            <li><a href="#" className="pinterest"><i className="fa fa-pinterest"></i></a></li>

                                            <li><a href="#" className="facebook"><i className="fa fa-facebook"></i></a></li>

                                            <li><a href="#" className="dribble"><i className="fa fa-dribbble"></i></a></li>

                                        </ul>
                                    </TeamMemberColumn>



                                </div>

                                {/*<div className="col-sm-6 col-md-4">*/}

                                {/*    <TeamMemberColumn>*/}

                                {/*        <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team3a.jpg"*/}
                                {/*             className="team-img" alt="pic"/>*/}

                                {/*        <h3>ELISA JOHANSON</h3>*/}

                                {/*        <div className="team-info"><p>Marketing Manager</p></div>*/}

                                {/*        <p>Elisa first fell in love with digital marketing at the university. He loves to learn, and*/}
                                {/*            looks forward to being part of this new exciting industry for many years.</p>*/}

                                {/*        <ul className="team-icon">*/}

                                {/*            <li><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></li>*/}

                                {/*            <li><a href="#" className="pinterest"><i className="fa fa-pinterest"></i></a></li>*/}

                                {/*            <li><a href="#" className="facebook"><i className="fa fa-facebook"></i></a></li>*/}

                                {/*            <li><a href="#" className="dribble">*/}
                                {/*                <i className="fa fa-dribbble"></i>*/}
                                {/*            </a></li>*/}

                                {/*        </ul>*/}
                                {/*    </TeamMemberColumn>*/}

                                {/*</div>*/}

                            </TeamMemberGrid>
                        </TeamSection>
                    </Main>
                </SectionWrapper>
                <>
                    < Footer />
                </>
            </MainContainer>

    );
};

const MainContainer = styled.main`
  @media (max-width: 991px) {
    max-width: 100%;
  }
  background-color: white !important; // Add !important to override other styles
`;

const SectionWrapper = styled.section`
  max-width: 1195px;
  margin: 60px auto 0;
  width: 100%;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 20px;
  }
`;


const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const SectionTitle = styled.h2`
  color: #090fff;
  text-align: center;
  font: 500 36px/133% Roboto, sans-serif;
  margin-top: 85px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Divider = styled.div`
  width: 100%;
  max-width: 1358px;
  height: 3px;
  background-color: #090fff;
  border: 1px solid #090fff;
  margin-top: 16px;
`;

const TeamSection = styled.section`
  width: 100%;
  max-width: 1294px;
  padding: 0 20px;
  margin-top: 77px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const TeamMemberGrid = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

const TeamMemberColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%; /* Adjust the width as needed */
  padding: 40px 20px; /* Adjust the padding as needed */
  align-items: center;
  @media (max-width: 991px) {
    width: 100%;
  }
  transition: all 0.25s ease-in-out;
  box-sizing: border-box;

  &:hover {
    background: #3956de;
    color: white;
  }

  h3 {
    margin: 20px 0 1px 0 !important;
    color: #454545;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    transition: all 0.25s ease-in-out;
  }
`;

export default About;