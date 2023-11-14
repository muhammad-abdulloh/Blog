import React from 'react';
import zomin from '../static/assets/images/zomin.jpg';
import uzinfocom from '../static/assets/images/uzinfocom.jpg';

const About = () => {
  return (
    <div className='blog__about'>
        <h1>About Me</h1>
        <p>
        I am Muhammad Abdulloh Komilov, a 23-year-old Software Engineer from Andijan, Uzbekistan, currently living in Uzbekistan, Tashkent.
        I am always contributing to developer events by giving a talk or as a mentor. As a developer, I really want to see more diversity in the industry.
        </p>
        <img src={zomin} alt="img" width="450px"/>
        <p>Recently I experimented working standing and found it really useful to stay focused and a little healthier. I was able to transform my workstation with the books I read.
        I am also known as "clever coder", very handy nature for programmers. I love repetitive tasks, I see them as an opportunity for automation.</p>
        <img src={uzinfocom} alt="img" width="450px"/>
    </div>
  )
}

export default About;