import React, { Component } from 'react'

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

	render(){
		const url = `/forecast?city=${this.state.city}` 
		return(
			<form action={url}>
			<input id="city" name="city" type="text" placeholder='City to search' value={this.state.city} onChange={this.handleChange}></input>
			<button>Search</button>
			</form>
			)
	}


}

export default Seeker
