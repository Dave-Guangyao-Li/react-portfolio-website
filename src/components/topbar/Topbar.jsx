import "./Topbar.scss"
import { Person, Mail } from "@material-ui/icons"

export default function Topbar() {
  return (
      <div className='topbar'>
          <div className="wrapper">
              {/* logo, number ,email, hamburger menu */}
              <div className="left">
                    
                  <a href="#intro" className="logo">Portfolio</a>
                  <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+1 123 456 78</span>
                  </div>
                  <div className="itemContainer">
                      <Mail className="icon" />
                      <span>
                        asd@sads.com
                      </span>
                  </div>
                  
              </div>
              <d iv className="right">
                  this is right
              </d>
          </div>
      </div>
  )
}
