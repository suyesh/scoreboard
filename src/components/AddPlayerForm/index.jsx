import React, {Component} from 'react'
import PropTypes from 'prop-types'

class AddPlayerForm extends Component {
  state = {
    name: ''
  }

  onNameChange=(e)=>{
    this.setState({name: e.target.value})
  }

  onSubmit = (e)=> {
    e.preventDefault()
    this.props.onAdd(this.state.name)
    this.setState({name: ''})
  }
  render(){
    return(
      <div className="add-player-form">
        <form onSubmit={(e)=> this.onSubmit(e)}>
          <input onChange={(e)=> this.onNameChange(e)} type="text" value={this.state.name} />
          <input type="submit" value="Add Player"/>
        </form>
      </div>
    );
  }
}

AddPlayerForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
}

export default AddPlayerForm;
