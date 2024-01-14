import React from 'react'
import './SideBarSearch.css'

export const SideBarSearch = ({ openSearch, toggleOpen }) => {
	return (
		<div className={`${openSearch ? 'open' : 'weatherPanelFindMenu'}`}>
			<div className='weatherPanelCloseBox'>
				<div
					className='weatherPanelFindExit'
					onClick={() => toggleOpen()}
				></div>
			</div>
			<div className='weatherPanelSearchPanel'>
				<input
					className='weatherPanelFindCity'
					type='text'
					placeholder='Москва'
				/>
				<button className='weatherPanelFindButton'>Найти</button>
			</div>
		</div>
	)
}
