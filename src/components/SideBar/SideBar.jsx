import React, { useState } from 'react'
import { SideBarCmn } from '../SideBarCmn/SideBarCmn'
import { SideBarSearch } from '../SideBarSearch/SideBarSearch'
import './SideBar.css'

export const SideBar = ({ handleClick, switchBtnTheme }) => {
	const [openSearch, setOpenSearch] = useState(false)

	function toggleOpen() {
		setOpenSearch(!openSearch)
	}

	return (
		<section className='weatherBar'>
			<SideBarSearch
				handleClick={handleClick}
				switchBtnTheme={switchBtnTheme}
				openSearch={openSearch}
				toggleOpen={toggleOpen}
			/>

			<SideBarCmn
				handleClick={handleClick}
				switchBtnTheme={switchBtnTheme}
				openSearch={openSearch}
				toggleOpen={toggleOpen}
			/>
		</section>
	)
}
