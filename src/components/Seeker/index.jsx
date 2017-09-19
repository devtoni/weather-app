import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'

import style from './style.scss'

class Seeker extends Component {

	constructor(props){
		super(props)
		this.state = { city: ''}
	}

	handleChange = (e) => {
		const value = e.target.value
		this.setState({ city: value })
	}

	onSubmit () {
		return '/forecast?city='+this.state.city;
	}

	render(){
		const {id, onSubmit} = this.props
		return(
			<form>
			<input id="city" name="city" type="text" placeholder='City to search' value={this.state.city} onChange={this.handleChange}></input>
			<button><a type="submit" disabled={!this.state.city} href={this.onSubmit()}>Search</a></button>
			</form>
			)
	}


}

export default Seeker
