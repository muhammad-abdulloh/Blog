import React from 'react';
import avatar from '../static/assets/images/avtor.jpg'
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import Button from '@mui/material/Button';
function AuthorInfo() {
  return (
    <div>
      <div className="parent-div">
        <div className="about-section">
          <div className='avtor-picture'>
            <img className="profile-picture" src={avatar}
              alt="Azimjon" styles="transform: matrix(1, 0, 0, 1, 0, 0); opacity: 1;" width="200px" height="200px" border-radius="50%" />
          </div>
          <div className="about-detail">
            <h1 className="title">MuhammadAbdulloh Komilov</h1>
            <h3 className="desc">Software Engineer</h3>
            <div className="social-links">
              <a className='icon-youtube' href="https://www.youtube.com/@MuhammadabdullohKomilov">
                <YouTubeIcon />
              </a>
              <a className="icon-github" target="_blank" href="https://github.com/muhammad-abdulloh">
                <GitHubIcon />
              </a>
              <a className="icon-linkedin" target="_blank" href="https://www.linkedin.com/in/muhammadabdulloh/">
                <LinkedInIcon />
              </a>
              <a className="icon-telegram" target="_blank" href="https://t.me/muhammadabdulloh_uz">
                <TelegramIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="detail">
          <p className="size-big anim-item" styles="transform: matrix(1, 0, 0, 1, 0, 0); opacity: 1;">I write about non-technical stuff in the technical world.</p>
          <div className="btns-wrapper anim-item" styles="transform: matrix(1, 0, 0, 1, 0, 0); opacity: 1;">
            <a href="#" className="btn">
              <Button type="button" variant='contained'>Read Blog</Button>
            </a>
            <a href="/about" className="btn-aboutme">
              <Button variant="outlined">About Me</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthorInfo