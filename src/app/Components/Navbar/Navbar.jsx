'use client'
import React , { useState }from 'react'
import Link from 'next/link'
import styles from "./page.module.css";
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

const Navbar = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      <div className={styles.navbar}>
      <div className={styles.nav}>
      <a href="/">Portfolio</a>
      </div>
      {/*<button className={styles.hamburger} onClick={toggleNav}>
          ☰
        </button>*/}
      <div className={`${styles.navs} ${isNavOpen ? styles.navsOpen : ''}`}>
      <Link href="#About">About</Link>
      <Link href="#Skills">Skills</Link>
      <Link href="#Projects">Projects</Link>
      <Link href="#Contact">Contact</Link>
    </div>
    </div>
    <div className={styles.main}>
        <img src="" alt="this is a picture" height="350px" width="350px" className={styles.img}/>
        <div className={styles.desc}>
        <h5>Hello I'm </h5>
        <h1>[your name]</h1>
        <h3>[your specialization]</h3>
        <div className={styles.file}>
        <a href="" download="resume.pdf">Download CV</a>
        <a href="#Contact">Contact Me</a>
        </div>
        <div className={styles.account}>
          <a href="" target='_blank'><img src="github.png" alt="github profile" height="50px" width="50px"/></a>
          <a href="" target='_blank'><img src="linkedin.png" alt="Linkedin profile" height="50px" width="50px"/></a>
        </div>
        </div>
    </div>
    <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
    </main>
    </div>
  )
}

export default Navbar
