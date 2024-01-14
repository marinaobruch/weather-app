import React from 'react'
import { Details } from '../Details/Details'
import { Forecast } from '../Forecast/Forecast'
import './Main.css'

export const Main = () => {
	return (
		<div className='weather-main'>
			<Forecast />
			<Details />
		</div>
	)
}
