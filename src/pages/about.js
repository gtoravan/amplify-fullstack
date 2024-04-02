import * as React from "react";
import logo from './logo_transparent.png';
import './about.css'

const teamMembers = [
    {
        imgUrl: logo,
        name: 'Thein Dan Ma',
        position: 'Production Designer'
    },

    {
        imgUrl: logo,
        name: 'Ngwe Pu',
        position: 'Product Designer'
    },

    {
        imgUrl: logo,
        name: 'OK Tal Mg Lay',
        position: 'Customer Service'
    },

    {
        imgUrl: logo,
        name: 'Ma Ma Saung',
        position: 'Project Leader'
    },
]


const About = () => {
    return (
        <section className='our__team'>
            <div className='container'>
                <div className='team__content'>
                    <h6 className='subtitle'>Our Team</h6>
                    <h2>
                        Join With <span className='highlight'>Our Team</span>
                    </h2>
                </div>
                <div className='team__wrapper'>
                    {
                        teamMembers.map((item, index) => (
                            <div className='team__item' key={index}>
                                <div className='team__img'>
                                    <img src={item.imgUrl} alt=''/>
                                </div>
                                <div className='team__details'>
                                    <h4>{item.name}</h4>
                                    <p className='description'>{item.position}</p>

                                    <div className='team__member-social'>
                                        <span><i className='ri-linkedin-line'></i></span>
                                        <span><i className='ri-twitter-line'></i></span>
                                        <span><i className='ri-facebook-line'></i></span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default About;
