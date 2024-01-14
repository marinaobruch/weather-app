import React, { useState } from 'react'
import { hourItems, weekItems } from './Data'
import './Forecast.css'

export const Forecast = () => {
	const [switchForecast, setSwitchForecast] = useState(true)
	const [selected, setSelected] = useState('1')

	const handleSwitch = (i) => {
		setSwitchForecast(!switchForecast)
		setSelected(i)
	}

	return (
		<section className='weather-forecast'>
			<header className='weather-forecast_header'>
				<h3 className='weather-forecast_title'>Прогноз</h3>
				<div className='weather-forecast_option'>
					<h4
						onClick={() => handleSwitch('1')}
						className={`${selected === '1' ? 'selected' : 'not-selected'}`}
					>
						на неделю
					</h4>
					<h4
						onClick={() => handleSwitch('2')}
						className={`${selected === '2' ? 'selected' : 'not-selected'}`}
					>
						почасовой
					</h4>
				</div>
			</header>

			<section className='weather-forecast__cards'>
				<div className='weather-forecast_slider-right'>
					<img
						className='img-right'
						src='assets/img/slider-left.svg'
						alt='slider'
					/>
				</div>
				{selected === '1' ? (
					<div className='weather-forecast_week-block'>
						{weekItems.map((item) => (
							<div key={item.title} className='weather-forecast_item'>
								<div className='weather-forecast_item-day'>{item.title}</div>
								<img
									className='weather-forecast__card-img'
									src={item.imageIndex}
									alt={item.imageIndex}
								/>
								<div className='weather-forecast_item-temp'>
									<p className='weather-forecast_item-temp-daily'>
										{item.dayTemperature} °C
									</p>
									<span className='weather-forecast_item-temp-night'>
										{item.nightTemperature} °C
									</span>
								</div>
							</div>
						))}
					</div>
				) : null}

				{selected === '2' ? (
					<div className='weather-forecast_week-block'>
						{hourItems.map((item) => (
							<div key={item.title} className='weather-forecast_item'>
								<div className='weather-forecast_item-day'>{item.title}</div>
								<img
									className='weather-forecast__card-img'
									src={item.imageIndex}
									alt={item.imageIndex}
								/>
								<div className='weather-forecast_item-temp'>
									<p className='weather-forecast_item-temp-daily'>
										{item.dayTemperature} °C
									</p>
								</div>
							</div>
						))}
					</div>
				) : null}
				<div className='weather-forecast_hour-block weather-forecast-hide'></div>

				<div className='weather-forecast_slider-left'>
					<img
						className='img-left'
						src='assets/img/slider-right.svg'
						alt='slider'
					/>
				</div>
			</section>
		</section>
	)
}
