import React,{useState} from 'react'
import "./Navigation.css"
import {Twitter, Instagram, GitHub, LinkedIn, NightsStay,Brightness7}  from '@material-ui/icons'
import Tilt from 'react-tilt'
import Fade from 'react-reveal/Fade'

function Navigation() {
    const [Navbar, setNavbar] = useState(false)
    const [DarkMode, setDarkMode] = useState(false)

    const background  = () =>{
        if (window.scrollY >= 80){
          setNavbar(true)
        }else{
            setNavbar(false)
        }
    }
    window.addEventListener("scroll", background)

    const dark = () =>{
        setDarkMode(!DarkMode)
    }
    return (
     <div className={DarkMode?"color_four":"color_five"}>
            <nav className={Navbar? "nav_class_active": "nav_class"}>
                <b className="martins">Martins</b>
                <div className="display_flex contact_resume_two ">
                    <a href="mailto:chukwuekeuzoma@gmail.com">
                      <div className="hover contact_resume">Contact</div>
                    </a>  
                    <a href="mailto:chukwuekeuzoma@gmail.com">
                       <div className="hover contact_resume" >Resume</div>
                    </a>
                    <div onClick={dark}>
                      {DarkMode?  <NightsStay className="color_two dark_light hover_three"/> 
                        :
                      <Brightness7 className="color_three dark_light hover_three"/>}
                    </div>
                </div>
            </nav>
            <div className="margin_top_50">
                 <div className="display_flex_two">
                   <Tilt  options={{ max :80 }}>
                      <div className="my_image"></div>
                   </Tilt>
                   
                 </div>
                  
                <div className="display_flex_two margin_top_30">
                <Fade left delay={3000}>
                  <div className="hover_two">
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                     <Twitter className={DarkMode?"icon_classes_dark":"icon_classes"}/>
                    </a>
                  </div>  
                  
                 
                  </Fade>
                  <Fade left delay={1000}>
                    <div className="hover_two">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <Instagram  className={DarkMode?"icon_classes_dark":"icon_classes"}/>
                        </a>
                    </div> 
                  </Fade> 
                  <Fade right delay={2000}>
                    <div className="hover_two">
                        <a href="https://www.github.com"  target="_blank" rel="noopener noreferrer">
                        <GitHub  className={DarkMode?"icon_classes_dark":"icon_classes"}/>
                        </a>
                    </div> 
                  </Fade>
                  <Fade right delay={4000}>
                    <div className="hover_two">
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <LinkedIn className={DarkMode?"icon_classes_dark":"icon_classes"}/>
                        </a>
                    </div> 
                  </Fade> 
                </div>
            </div>
            <div className="display_flex_three  margin_top_30">
             <Fade left delay={1000} duration={1000}>
                <div className={DarkMode?"box_dark":"box"}>
                
                    <div className={DarkMode?"color_six dispaly_flex_four":"dispaly_flex_four color"}>
                     <h1>Hello World! 😄</h1>
                    </div>
                    <div className={DarkMode?"color_six display_flex_two":"display_flex_two color" }>
                    
                        You've just come across a software engineer and tehnical writer 🤓.
                        <br/>
                        Find below few of my works, articles, and a little bit about me.
                    </div>
                
                </div>
                </Fade>
            </div>
            <div className="display_flex_three  margin_top_30" >
                <Fade left delay={1000} duration={1000}>
                    <div className={DarkMode?"box_dark":"box"}>
                        <div className={DarkMode?"color_six dispaly_flex_four":"dispaly_flex_four color"}>
                        <h1>Hi, I'm Henry</h1> 
                        I'm a full stack web developer building creative products at Skernel.<br/>
                        I am currently based in Lagos, Nigeria.
                        I'm a student at University of the people , <br/>
                        Aiming to complete 50 semesters towards a computer science degree.
                        I'm a massive fan of Javascript(vue.js, node, typescript and vanilla Javascript)<br/>
                        hence I love integrating and building products using Javascript
                        </div>
                    </div>
                </Fade>
            </div>
            <div className="display_flex_three  margin_top_30">
              <Fade left delay={1000} duration={1000}>
                <div className={DarkMode?"box_dark":"box"}>
                  <div className={DarkMode?"color_six dispaly_flex_four":"dispaly_flex_four color"}>
                     <h1>Technologies</h1>
                     During my years of active development, I have learnt and worked with technologies like Javascript,<br/> 
                     Vue, Node, Express, Typescript, Mocha, Webpack, Python, Java, Jest, Sinon e.t.c.<br/> 
                     I am a huge practitioner of test driven development and Agile development
                    </div>
                </div>
               </Fade>
            </div>
            <div className="display_flex_three  margin_top_30">
                <Fade left delay={1000} duration={1000}>
                    <div className={DarkMode?"box_dark":"box"}>
                    <div  className={DarkMode?"color_six dispaly_flex_four":"dispaly_flex_four color"} >
                        <h1>Projects</h1>
                        </div>
                    </div>
                </Fade>
            </div>
            <div  className="display_flex_three  margin_top_30">
              <Fade left delay={1000} duration={1000}>
                    <div className={DarkMode?"box_dark":"box"}>
                        <div className={DarkMode?"color_six dispaly_flex_four":"dispaly_flex_four color"}>
                        <h1>Gizmo(frontend)</h1>
                            APPLICATION GIT REPO
                            Typescript, Vue.js, Vuetify, Express, Mocha, Chai, CircleCi
                            Gizmo is a real estate application where users purchase land,<br/>
                            houses and properties with utmost
                            
                        </div>
                    </div>
               </Fade>
            </div>  
            <div  className="display_flex_three  margin_top_30">
              <Fade left delay={1000} duration={1000}>
                    <div className={DarkMode?"box_dark":"box"}>
                        <div className={DarkMode?"color_six dispaly_flex_four":"dispaly_flex_four color"} >
                        <h1> Interest.</h1>
                            I have a ton of interests in so many fields some of which are Programming,<br/>
                            Artificial intelligence,
                            music, entertainment, humans psychology, dogs, entrepreneurship, books,<br/>
                            art, African culture e.t.c
                                            
                        </div>
                    </div>
              </Fade>
            </div>   
            <footer className={DarkMode?"color_six margin_top_30":"margin_top_30 color"}>
                <h3>copywrite@Martins 2021</h3>
            </footer>      

                    

            
     </div>           
    )
}

export default Navigation
