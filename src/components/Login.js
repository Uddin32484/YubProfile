import React from 'react'
import './Login.css'

function Login() {
    return (
   <div className="main2">
       

        <div className="intro-wrapper2">
            <div className="nav-wrapper">
                <div className="dots-wrapper">
                     <div id="dot-1" className="browser-dot"></div>
                      <div id="dot-2" className="browser-dot"></div>
                        <div id="dot-3" className="browser-dot"></div>
                </div>
                      <div className="dots-wrapper">
                     <div id="dot-1" className="browser-dot"></div>
                      <div id="dot-2" className="browser-dot"></div>
                        <div id="dot-3" className="browser-dot"></div>
                </div>
                   <div className="dots-wrapper">
                     <div id="dot-1" className="browser-dot"></div>
                        <div id="dot-2" className="browser-dot"></div>
                        <div id="dot-3" className="browser-dot"></div>
                      </div>
                   <ul className="navigation">
                       <li><a href="/" ></a></li>
                      <div className="dots-wrapper">
                     <div id="dot-1" className="browser-dot"></div>
                        <div id="dot-2" className="browser-dot"></div>
                        <div id="dot-3" className="browser-dot"></div>
                      </div>
                  
                 
                </ul>
             </div>

             <div className="image">
                <div className="brand">
                 <h4>Login</h4>
                 </div>
                <div className="contain">
                    <br></br>
                    <header><i className="fa fa-user-circle"></i>Login</header>
                     <div className="dots-wrapper3">
                     <div id="dot-1" className="browser-dot"></div>
                      <div id="dot-2" className="browser-dot"></div>
                        <div id="dot-3" className="browser-dot"></div>
                      </div>
                 <form action="#">
                    <br></br>
                    <div className="field">
                     
                          <input type="text" placeholder="Enter your email or Phone" name="email"/>
                    </div>
                   <br></br>
                
                  <div className="field space">
    
                   
                     <input type="password" placeholder="Enter your Password" name="password"/>
                  </div>
                  <br></br>
                    <div class="pass">
                        <a href="#"></a>  
                    </div>

                   <br></br>
                  <div class="field">
                     <input type="submit" value="LOGIN"/>
                  </div>
                    <br></br>
                    <div class="login">Or Login with</div>
                      <div class="link">
                         <div class="facebook">
                               <i class="fa fa-facebook-f"><span>facebook</span></i>

                         </div>
      
                         <div class="instagram">
                              <i class="fa fa-instagram"><span>instagram</span></i>
                          </div>

                        </div>
                  </form>
               </div>

         
           </div>
            
          
        </div>
                
        </div>
    )
}

export default Login
