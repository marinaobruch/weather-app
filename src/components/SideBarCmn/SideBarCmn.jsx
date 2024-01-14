import React from 'react'
import './SideBarCmn.css'

export const SideBarCmn = ({
	handleClick,
	switchBtnTheme,
	openSearch,
	toggleOpen,
}) => {
	return (
		<>
			{openSearch === true ? null : (
				<div className='weatherPanelBody'>
					<header className='weatherPanelHeader'>
						<button
							className='weatherPanelSearchButton'
							onClick={() => toggleOpen()}
						>
							Поиск города
						</button>

						<div className='weatherPanelSwitchButton' onClick={handleClick}>
							<div
								className={`${
									switchBtnTheme ? 'switchFor' : 'switchFor switchForDark'
								}`}
							></div>
						</div>
					</header>

					<div className='weatherPanelContent'>
						<div className='weatherPanelWethTemp'>
							<div className='weatherPanelImg'>
								<img
									className='weatherPanelImgItem'
									src='assets/img/snow.png'
									alt='snow'
								/>
							</div>
							<div className='weatherPanelDegrees'>
								<span className='weatherPanelDegreesNumber'>1 </span>
								<span className='weatherPanelDegreesIcon'> °C</span>
							</div>
						</div>

						<div className='weatherPanelPrecipitation'>Снег</div>
						<div className='weatherPanelDescription'>
							Ощущается как
							<span className='weatherPanelDescriptionTemp'>-3</span> °C
						</div>
					</div>

					<footer className='weatherPanelFooter'>
						<div className='weatherPanelCurcdate'>
							<h4 className='weatherPanelDay'>Сегодня</h4>
							<h4 className='weatherPanelDate'>Вс, 13 мар</h4>
						</div>

						<div className='weatherPanelLocation'>
							<div className='weatherPanelLocationImg'>
								<img src='assets/img/location.png' alt='location' />
							</div>
							<div className='weatherPanelLocationCity'>Москва</div>
						</div>
					</footer>
				</div>
			)}
		</>
	)
}
