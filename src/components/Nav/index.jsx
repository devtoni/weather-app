import React, {Component} from 'react'

import Title from '../Title'
import Seeker from '../Seeker'

import style from './style.scss'


class Nav extends Component {

	constructor (){
		super();
		this.state = {name: "Weather app"}
	}


	render(){
		return (
			<nav className={style.nav}>
				<Title name={this.state.name}/>
				<Seeker/>
			</nav>
			)
	}
}

export default Nav
