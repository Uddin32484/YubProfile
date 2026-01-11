import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';


function Main() {
    return (
        <div className="main">
        <div className="s1">
        
        
        {/*   Navigation Wrapper */}
        <div className="intro-wrapper">
             <div className="nav-wrapper">
                <div className="dots-wrapper">
                   
                </div>
                      <div className="dots-wrapper">
                 
                </div>
                   <ul className="navigation">
                    <li><a href="#"></a></li>
                     
                  
                 
                </ul>
             </div>
                <div className="left-column">
               
               {/*   <img  id ="profile_pic" src="/assets/images/line/Yubprofile2.jpg" alt="" /> */}
                  <img id="profile_pic" src ="https://drive.google.com/file/d/1Y7cGDLKopjZtsTJRBKkERGdmKNxj4tB8/view" alt="" />
                 <p id="personal_Theme" style={{color:'Yellow'}}>Sr Software Engineer(SDET)</p>


                    <div className="theme-option-wrapper">
                  <div data-mode="light" id="light-mode" class="theme-dot"></div>
		            	<div data-mode="blue" id="blue-mode" class="theme-dot"></div>
					      <div data-mode="green" id="green-mode" class="theme-dot"></div>
						    <div data-mode="purple" id="purple-mode" class="theme-dot"></div>
                         
                    </div>
                        
               </div>
                  <div className="right-column">
                     <h3> WHO AM I ?</h3>
                  <div id="preview_shadow">
                          
                    <div id="preview">
                      <div  id="corner-tl" className="corner"></div>
                       <div  id="corner-tr" className="corner"></div>
                      <ul className="previewul">
                      <li>
                         <p>Senior Software Development Engineer in Test (SDET) with 13+ years of experience in designing scalable automation frameworks across Telecom, Finance, Retail, and Healthcare. Proven ability to cut manual testing by 85% and speed release cycles by 60% in Agile/DevOps environments. Skilled in UI, API, and backend automation using Selenium, Cypress, Playwright, and more. Expert in CI/CD integration with Jenkins, GitHub Actions, AWS, and Azure DevOps. Specialized in AI-driven quality engineering, including RAG testing and LLM/ML model validation using OpenAI and Hugging Face.</p>
                      </li>
                       <li>
                       <p style={{color:'yellow'}}>A passionate Automation Developer in Test .</p>
                      </li>
                      </ul>
                     
                        
                           <div className="dots-wrapper1">
                             <div id="dot-1" className="browser-dot1"></div>
                                 <div id="dot-2" className="browser-dot1"></div>
                                <div id="dot-3" className="browser-dot1"></div>
                           </div>
                         <div  id="corner-br" className="corner"></div>
                          <div  id="corner-bl" className="corner"></div>

                        
                    </div>
                   </div>

                  

               </div>
             
         </div>
        <div className="logo1">
      {/*  <Logo/> */}
        </div>
          
        </div>
     {/*    Card Display */}
       {/* <div className="s1111">
           <div className="main-container11">
             <h3>Some of my project</h3>
               <div className="post-wrapper">
                <div>
                  <div className="post">
                     <img className="thumbnail" src="/assets/images/line/Yubprofile2.jpg" alt="" />
                       <div className="post-preview">
                          <h6 className="post-title ">Post Title</h6>
                          <p className="post-intro">This is a sentance . Some nOte</p>
                       </div>
                   </div>
              </div>
       
                <div>
                  <div className="post">
                     <img className="thumbnail" src="/assets/images/line/Yubprofile2.jpg" alt="" />
                       <div className="post-preview">
                          <h6 className="post-title ">Post Title</h6>
                          <p className="post-intro">This is a sentance . Some nOte</p>
                       </div>
                   </div>
              </div>
                <div>
                  <div className="post">
                     <img className="thumbnail" src="/assets/images/line/Yubprofile2.jpg" alt="" />
                       <div className="post-preview">
                          <h6 className="post-title ">Post Title</h6>
                          <p className="post-intro">This is a sentance . Some nOte</p>
                       </div>
                   </div>
              </div>

               <div>
                  <div className="post">
                     <img className="thumbnail" src="/assets/images/line/Yubprofile2.jpg" alt="" />
                       <div className="post-preview">
                          <h6 className="post-title ">Post Title</h6>
                          <p className="post-intro">This is a sentance . Some nOte</p>
                       </div>
                   </div>
              </div>  


              </div>
            </div>
        </div> */}

          
<Link to="/Projects">
<div class="card1">

    <div class="image">
      <img src="https://th.bing.com/th/id/OIP.CF0QQmel9uqe9xkQ6ojVGAAAAA?w=238&h=180&c=7&o=5&dpr=1.75&pid=1.7"/>
    </div>
<div class="title">
 <h1>
Projects</h1>
</div>
<div class="des">
 <p>You can Add Desccription Here...</p>
<button>Read More...</button>
</div>
</div>
</Link>

<Link to="/skills">
<div class="card2">
 
    <div class="image">
      <img src="https://th.bing.com/th/id/OIP.awfUFHqzNY3vOMtrnk3gRgHaHa?w=166&h=180&c=7&o=5&dpr=1.75&pid=1.7"/>
    </div>
<div class="title">
    <h1>Skills</h1>
</div>
 <div class="des">
    <p>You can Add Desccription Here...</p>
   <button>Read More...</button>
 </div>
</div>

</Link>
<Link to="/jobs">
<div class="card3">

    <div class="image">
      <img src="https://th.bing.com/th/id/OIP.ez5B51qzaex5JEyrI_eVJQAAAA?w=166&h=180&c=7&o=5&dpr=1.75&pid=1.7"/>
    </div>
<div class="title">
 <h1>
     Jobs</h1>
</div>
<div class="des">
 <p>You can Add Desccription Here...</p>
<button>Read More...</button>
</div>
</div>

 </Link>


<div class="card4">

    <div class="image">
      <img src="https://th.bing.com/th/id/OIP.T0QdUCAXtmpQrwILwd7ocQHaE8?w=254&h=180&c=7&o=5&dpr=1.75&pid=1.7"/>
    </div>
<div class="title">
 <h1>
Photos</h1>
</div>
<div class="des">
 <p>You can Add Desccription Here...</p>
<button>Read More...</button>
</div>
</div>
<Link to="/resume">
<div class="card5">

    <div class="image">
      <img src="https://th.bing.com/th/id/OIP.3yCHovNiMC8QW71lMZOdDQHaHa?w=165&h=180&c=7&o=5&dpr=1.75&pid=1.7"/>
    </div>
<div class="title">
 <h1>
 Resume</h1>
</div>
<div class="des">
 <p>You can Add Desccription Here...</p>
<button>Read More...</button>
</div>
</div>
</Link>

        </div>
    )
}

export default Main
