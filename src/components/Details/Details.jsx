import React from 'react'
import './Details.css'

export const Details = () => {
	return (
		<section className='weather-detail'>
			<h2 className='weather-detail_title'>Подробно на сегодня</h2>

			<section className='weather-detail_all-info'>
				<div className='weather-detail_block wind'>
					<h4 className='weather-detail_block-title'>Скорость ветра</h4>
					<div className='weather-detail_block-info info-big'>
						<span className='weather-detail_block-numbers'>7 </span>
						<span className='weather-detail_block-units'>м/с</span>
					</div>
					<div className='weather-detail_block-wind'>
						<img src='assets/img/wind-direction.svg' alt='wind-direction.svg' />
						<p className='weather-detail_block-wind-direction'>СЗ</p>
					</div>
				</div>

				<div className='weather-detail_block block-small wet'>
					<h4 className='weather-detail_block-title'>Влажность</h4>
					<div className='weather-detail_block-info info-big'>
						<span className='weather-detail_block-numbers'>84 </span>
						<span className='weather-detail_block-units'>%</span>
					</div>
				</div>

				<div className='weather-detail_block-botton visibility'>
					<h4 className='weather-detail_block-title'>Видимость</h4>
					<div className='weather-detail_block-info'>
						<span className='weather-detail_block-numbers'>6.2 </span>
						<span className='weather-detail_block-units'>км</span>
					</div>
				</div>

				<div className='weather-detail_block-botton pressure'>
					<h4 className='weather-detail_block-title'>Давление</h4>
					<div className='weather-detail_block-info'>
						<span className='weather-detail_block-numbers'>742 </span>
						<span className='weather-detail_block-units-small'>мм рт. ст.</span>
					</div>
				</div>
			</section>
		</section>
	)
}
