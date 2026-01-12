import React from 'react'
import './Skills.css'
function Skills() {
    return (
     
        <div className="main1">
       

        <div className="intro-wrapper1">
            <div className="nav-wrapper">
               
                     
                 
                     
                   <ul className="navigation">
                       <li><a href="/" ></a></li>
                      <div className="dots-wrapper">
                    
                      </div>
                  
                 
                </ul>
             </div>
                <div className="brand">
                 <h4>Skills:</h4>
                 </div>
                <div className="column">
                  
                       {/*   preview box-1 */}
                       <div id="preview1">
                         <div  id="corner-tl" className="corner"></div>
                         <div  id="corner-tr" className="corner"></div>
                             <div class="image">
                            
                             <img src="" alt=""/>
                              </div> 
                          {/*    Object begin */}
                           <h5> Programming - Languages</h5>
                            <ul class="objectul">
                             <li>Java</li>
                               <li>Python</li>
                                  <li>C#</li>
                             <li>Javascript</li>
                             <li>Typescript</li>
                             <li>Node js</li>
                               <li>Swift</li>
                             
                             
                            </ul>
                            <h5>Databases</h5>
                             <ul>
                               <li>Oracle</li>
                               <li>MongoDB</li>
                                  <li>MySQL</li>
                                  <li>PostgreSQL</li>
                                 <li>SQLite</li>
                                 <li>Firebase</li>
                                 </ul>
                                  <h5>Web Frameworks</h5>
                            <ul> 
                               <li>Angular</li>
                                <li>Ionic</li>
                                 <li>React js</li>
                                 <li>Express js </li>
                                  <li>React Native</li>
                                  <li>Spring MVC </li>
                                   <li>Hibernate </li>
                                    </ul>
                            {/*  Object End */}
                         <div className="dots-wrapper1">
                             <div id="dot-1" className="browser-dot1"></div>
                                 <div id="dot-2" className="browser-dot1"></div>
                                <div id="dot-3" className="browser-dot1"></div>
                           </div>
                         <div  id="corner-br" className="corner"></div>
                          <div  id="corner-bl" className="corner"></div>
                       </div>
                        {/*   preview box-2 */}
                       <div id="preview1">
                         <div  id="corner-tl" className="corner"></div>
                         <div  id="corner-tr" className="corner"></div>
                           <div class="image">
                             <img src=""/>
                              </div> 
                             <h5>Automation-Testing- Frameworks</h5>
                             <ul>
                                <li>DataDriven</li>
                                <li>Keyword Driven</li>
                                <li>Hybrid Driven </li>
                                  <li>Page Object Model(POM) </li>
                                  <li>Behavior Driven Development(BDD)</li>
                                 </ul>
                                 <h5>Ui Testing Tools</h5>
                                  <ul>
                                <li>Selenium WebDriver </li>
                                  <li>Playwright </li>
                                <li> WebDriver IO</li>
                                  <li>UFT | UiPath</li>
                                     <li>Tosca| Cypress</li>
                                       <li>XCUITest | Appium</li>
                                        <li>PostMan | New Man| Bruno</li>
                                       <li>RestAssured</li>
                                         <li>TestNG</li>
                             <li>Maven</li>
                            <li>Katalon Studio</li>
                            <li>Automation Anywhere</li>
                            <li>Eggplant Functional</li>
                             <li>Litmus</li>
                                 
                                 </ul>
                                 
                         <div className="dots-wrapper1">
                             <div id="dot-1" className="browser-dot1"></div>
                                 <div id="dot-2" className="browser-dot1"></div>
                                <div id="dot-3" className="browser-dot1"></div>
                           </div>
                         <div  id="corner-br" className="corner"></div>
                          <div  id="corner-bl" className="corner"></div>
                       </div>

                       <div id="preview1">
                         <div  id="corner-tl" className="corner"></div>
                         <div  id="corner-tr" className="corner"></div>
                             <div class="image">
                             <img src=""/>
                              </div> 
                          {/*    Object begin */}
                       
                           <h4>IDE</h4>
                            <ul>
                            <li>Eclipse</li>
                            <li>IntelliJ IDEA</li>
                             <li>Visual Studio Code</li>
                             <li>Atom</li>
                              <li>Sublime Text</li>
                              </ul>
                                <h4>VCS</h4>
                           <ul> 
                        <li>Github</li> 
                         <li>Gitlab</li>
                        <li>GitBucket</li>
                          </ul>
                            {/*  Object End */}
                              {/*    Object begin */}
                           <h4>CI/CD</h4>
                           <ul> 
                          <li>Jenkins</li> 
                          <li>GitHub Action</li> 
                           <li>Circle CI</li> 
                         <li>Travis CI</li>
                         <li>Docker</li>
                          <li>AWS | Azure</li>
                          <li>Ansible</li>
                          </ul>
                           <h4>OS</h4>
                           <ul>
                            <li>Linux (Debian / Ubuntu / Arch)</li>
                            <li>Windows</li>
                           <li>Mac OS</li>
                            </ul>
                            {/*  Object End */}
                         <div className="dots-wrapper1">
                             <div id="dot-1" className="browser-dot1"></div>
                                 <div id="dot-2" className="browser-dot1"></div>
                                <div id="dot-3" className="browser-dot1"></div>
                           </div>
                         <div  id="corner-br" className="corner"></div>
                          <div  id="corner-bl" className="corner"></div>
                       </div>
                      <div id="preview1">
                         <div  id="corner-tl" className="corner"></div>
                         <div  id="corner-tr" className="corner"></div>
                             <div class="image">
                             <img src=""/>
                              </div> 
                          {/*    Object begin */}
                           <h5>Self-Healing Implemented</h5>
                           <ul>
                            <li>Healenium</li>
                            <li>MCP server, OpenAI APIs </li>
                           <li>Hugging Face | GPT MODEL | OLLAMA</li>
                            </ul>
                          <h6 style={{ color: 'green', display: 'inline', fontSize: '12px' }}>
                            Implemented AI-powered self-healing in the automation framework using LLMs like GPT and Ollama to auto-detect and fix broken locators. This reduces test maintenance and ensures stability across dynamic UI changes.
                           </h6>
                            <li></li>
                              <h5>Mobile Automation Testing</h5>
                                 <ul>
                                <li>Appium</li>
                                <li>XCUITest</li>
                                <li>Android Studio</li>
                                  <li>Appium Inspector</li>

                                 </ul>
                                 <li></li>
                                  <h6>Api Testing Tools & Frameworks</h6>
                                   <ul> 
                               <li>PostMan</li>
                                <li>SOAP UI</li>
                                 <li>HttpMaster</li>
                                 <li>Rest-assured </li>
                                  <li>Apigee</li>
                                  <li>Jersey client</li>
                                  
                                    </ul>
                            {/*  Object End */}
                           
                             {/*    Object begin */}
                          
                            {/*  Object End */}
                          <div className="dots-wrapper1">
                             <div id="dot-1" className="browser-dot1"></div>
                                 <div id="dot-2" className="browser-dot1"></div>
                                <div id="dot-3" className="browser-dot1"></div>
                           </div>
                         <div  id="corner-br" className="corner"></div>
                          <div  id="corner-bl" className="corner"></div>
                       </div>
                   
                  <div id="preview1">
                         <div  id="corner-tl" className="corner"></div>
                         <div  id="corner-tr" className="corner"></div>
                             <div class="image">
                             <img src=""/>
                              </div> 
                          {/*    Object begin */}
                          <li></li>
                           <h6>Web Applications Development</h6>
                            <ul class="objectul">
                            <li  style={{ fontSize:'14px' }}>Developed and maintained web-based applications using Node.js, Express, React.js, Angular, and Spring Boot frameworks</li>
                               <li  style={{ fontSize:'14px' }}>Built enterprise-level solutions leveraging J2EE technologies, including Servlets and JSTL, ensuring robust and scalable architecture.</li>
                                  <li  style={{ fontSize:'14px' }}>Implemented full-stack development practices across multiple frameworks to deliver responsive and high-performance applications.</li>
                           
                           
                            </ul>
                            {/*  Object End */}
                            {/*    Object begin */}
                         
                            <ul>
                           
                            

                           
                            </ul>
                            {/*  Object End */}
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
                 <div className="columnOne">
          
                       <div id="preview1">
                         <div  id="corner-tl" className="corner"></div>
                         <div  id="corner-tr" className="corner"></div>
                             <div class="image">
                             <img src="" alt=""/>
                              </div> 
                          {/*    Object begin */}
                            <h4>Cloud Technologies</h4>
                            <ul>
                          <li>AWS (EC2, S3, Lambda, RDS)</li>
                           <li>Azure</li>
                            </ul>
                            {/*  Object End */}
                         <div className="dots-wrapper1">
                             <div id="dot-1" className="browser-dot1"></div>
                                 <div id="dot-2" className="browser-dot1"></div>
                                <div id="dot-3" className="browser-dot1"></div>
                           </div>
                         <div  id="corner-br" className="corner"></div>
                          <div  id="corner-bl" className="corner"></div>
                       </div>

                           <div id="preview1">
                         <div  id="corner-tl" className="corner"></div>
                         <div  id="corner-tr" className="corner"></div>
                             <div class="image">
                             <img src="" alt=""/>
                              </div> 
                          {/*    Object begin */}
                           <h4>Web Technologies</h4>
                            <ul> 
                               <li>HTML</li>
                                 <li>JSP</li>
                                  <li>Handlebars</li>
                                   <li>HTML</li>
                                  <li>CSS,Sass</li>
                                 <li>Materialize</li>
                                 <li>Bootstrap </li>
                                  <li>jQuery</li>
                                 
                                    </ul>
                            {/*  Object End */}
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
    )
}

export default Skills
