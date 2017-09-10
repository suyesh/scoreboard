import React, {Component} from 'react'
import PropTypes from 'prop-types';
import './Header.css'

class Header extends Component {
   render(){
     return(
       <div className="header">
         <h1>{this.props.title}</h1>
       </div>
     );
   }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
