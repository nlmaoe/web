import React from 'react';
import "./Header.css";


class Header extends React.Component {
    constructor(props) {
      super(props); 

      this.state = {

      };


    }  
    
      render() {
        return (
        <div>
            <div className="header" >
                <div class="header-right">
                  <a href="getting-started.html">Example </a>
                  <a href="p2.html">State </a>
                  <a href="p4.html">Switch </a>
                  <a href="p5.html">Router</a>
                </div>
            </div>
        </div>   
        );
    }
}
export default Header;