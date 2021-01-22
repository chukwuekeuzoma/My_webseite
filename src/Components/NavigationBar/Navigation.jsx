import React, { useState, useEffect } from 'react'
import "./Navigation.css"
import { Twitter, Instagram, GitHub, LinkedIn, NightsStay, Brightness7, Menu, Clear } from '@material-ui/icons'
import Tilt from 'react-tilt'
import Fade from 'react-reveal/Fade'

function Navigation() {
    const [Navbar, setNavbar] = useState(false)
    const [DarkMode, setDarkMode] = useState(getInitialMode())
    const [Snav, setSnav] = useState(false)



    const background = () => {
        if (window.scrollY >= 10) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
    window.addEventListener("scroll", background)

    const dark = () => {
        setDarkMode(!DarkMode)
    }

    const Navchange = () => {
        setSnav(!Snav)
    }

    useEffect(() => {
        localStorage.setItem("dark", JSON.stringify(DarkMode))
    }, [DarkMode]);

    function getInitialMode() {
        const savedMode = JSON.parse(localStorage.getItem("dark"));
        return savedMode || false
    }
    return (
        <div className={DarkMode ? "color_four" : "color_five"}>
            <nav className={Navbar ? "nav_class_active" : "nav_class"}>
                <b className="martins">Martins</b>
                <div className="display_flex_nav_div contact_resume_two">
                    <a href="mailto:chukwuekeuzoma@gmail.com">
                        <div className="hover contact_resume">Contact</div>
                    </a>
                    <a href="mailto:chukwuekeuzoma@gmail.com">
                        <div className="hover contact_resume" >Resume</div>
                    </a>
                    <div onClick={dark}>
                        {DarkMode ? <NightsStay className="color_two dark_light hover_three" />
                            :
                            <Brightness7 className="color_three dark_light hover_three" />}
                    </div>
                </div>
                {/* the section for mobile  screen nav_bar two */}
                <div className="nav_bar_two">
                    <div onClick={Navchange}>
                        {Snav ? <Clear className="color_seven " /> : <Menu className="color_seven" />}
                    </div>
                </div>
                {/* end */}
            </nav>
            <div className={Navbar ? "nav_class_s_active" : "nav_class_s"}>
                <div className={Snav ? "nav_bar_down_in" : "nav_bar_down_out"}>
                    <a href="mailto:chukwuekeuzoma@gmail.com">
                        <div className="hover_s contact_resume_s">Contact</div>
                    </a>
                    <a href="mailto:chukwuekeuzoma@gmail.com">
                        <div className="hover_s contact_resume_s" >Resume</div>
                    </a>
                    <div onClick={dark}>
                        {DarkMode ? <NightsStay className="color_two_s dark_light_s hover_three_s" />
                            :
                            <Brightness7 className="color_three_s dark_light_s hover_three_s" />}
                    </div>
                </div>
            </div>
            <div className="margin_top_50">
                <div className="display_flex_two">
                    <Tilt options={{ max: 80 }}>
                        <div className="my_image"></div>
                    </Tilt>

                </div>

                <div className="display_flex_two margin_top_30">
                    <Fade left delay={3000}>
                        <div className="hover_two">
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <Twitter className={DarkMode ? "icon_classes_dark" : "icon_classes"} />
                            </a>
                        </div>


                    </Fade>
                    <Fade left delay={1000}>
                        <div className="hover_two">
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <Instagram className={DarkMode ? "icon_classes_dark" : "icon_classes"} />
                            </a>
                        </div>
                    </Fade>
                    <Fade right delay={2000}>
                        <div className="hover_two">
                            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                                <GitHub className={DarkMode ? "icon_classes_dark" : "icon_classes"} />
                            </a>
                        </div>
                    </Fade>
                    <Fade right delay={4000}>
                        <div className="hover_two">
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <LinkedIn className={DarkMode ? "icon_classes_dark" : "icon_classes"} />
                            </a>
                        </div>
                    </Fade>
                </div>
            </div>
            <div className="display_flex_three  margin_top_30">
                <Fade left delay={1000} duration={1000}>
                    <div className={DarkMode ? "box_dark" : "box"}>

                        <div className={DarkMode ? "color_six dispaly_flex_four" : "dispaly_flex_four color"}>
                            <h1>Hello World! 😄</h1>
                        </div>
                        <div className={DarkMode ? "color_six display_flex_two" : "display_flex_two color"}>

                            You've just come across a Electrical and Software engineer  🤓.
                        <br />
                        Find below few of my works, and a little bit about me.
                    </div>

                    </div>
                </Fade>
            </div>
            <div className="display_flex_three  margin_top_30" >
                <Fade left delay={1000} duration={1000}>
                    <div className={DarkMode ? "box_dark" : "box"}>
                        <div className={DarkMode ? "color_six dispaly_flex_four" : "dispaly_flex_four color"}>
                            <h1>Hi, I'm Martins</h1>
                        I'm a frontend  developer.<br />
                        I am currently based in Lagos, Nigeria.
                        I'm a Graduate of Electrical/Electonics from Enugu State University of Science and Technology.<br />
                        I'm a massive fan of Javascript(React.js,node,SCSS,CSS and vanilla Javascript)<br />
                        hence I love integrating and building products using Javascript
                        </div>
                    </div>
                </Fade>
            </div>
            <div className="display_flex_three  margin_top_30">
                <Fade left delay={1000} duration={1000}>
                    <div className={DarkMode ? "box_dark" : "box"}>
                        <div className={DarkMode ? "color_six dispaly_flex_four" : "dispaly_flex_four color"}>
                            <h1>Technologies</h1>
                     During my years of active development, I have learnt and worked with technologies like Javascript,<br />
                     React, Node, CSS, SCC3, SCSS,React Redux, HTML e.t.c.<br />
                     I am a huge practitioner of test driven development and Agile development
                    </div>
                    </div>
                </Fade>
            </div>
            <div className="display_flex_three  margin_top_30">
                <Fade left delay={1000} duration={1000}>
                    <div className={DarkMode ? "box_dark" : "box"}>
                        <div className={DarkMode ? "color_six dispaly_flex_four" : "dispaly_flex_four color"} >
                            <h1>Projects</h1>
                        </div>
                    </div>
                </Fade>
            </div>
            <div className="display_flex_three  margin_top_30">
                <Fade left delay={1000} duration={1000}>
                    <div className={DarkMode ? "box_dark" : "box"}>
                        <div className={DarkMode ? "color_six dispaly_flex_four" : "dispaly_flex_four color"}>
                            <h1>Martinsgizmo</h1>
                            APPLICATION GIT REPO
                            Javascript, React.js, CSS3, HTML.
                        </div>
                    </div>
                </Fade>
            </div>
            <div className="display_flex_three  margin_top_30">
                <Fade left delay={1000} duration={1000}>
                    <div className={DarkMode ? "box_dark" : "box"}>
                        <div className={DarkMode ? "color_six dispaly_flex_four" : "dispaly_flex_four color"} >
                            <h1> Interest.</h1>
                            I have a ton of interests in so many fields some of which are Programming,<br />
                            Electrical technologies,Astronomical Bodies, Forex trading,
                            music, entertainment, humans psychology, dogs, entrepreneurship, books,<br />
                            art, African culture e.t.c

                        </div>
                    </div>
                </Fade>
            </div>
            <footer className={DarkMode ? "color_six margin_top_30" : "margin_top_30 color"}>
                <h3>copywrite@Martins 2021</h3>
            </footer>




        </div>
    )
}

export default Navigation
