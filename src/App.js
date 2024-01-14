import { useEffect, useState } from 'react'
import './App.css'
import { Main } from './components/Main/Main'
import { SideBar } from './components/SideBar/SideBar'

export const App = () => {
	const [theme, setTheme] = useState('dark')
	const [switchBtnTheme, setSwitchBtnTheme] = useState(true)

	const toggleTheme = () => {
		setSwitchBtnTheme(!switchBtnTheme)

		if (theme === 'light') {
			setTheme('dark')
		} else {
			setTheme('light')
		}
	}

	useEffect(() => {
		if (theme === 'light') {
			document.body.setAttribute('data-theme', 'dark')
		} else {
			document.body.setAttribute('data-theme', 'light')
		}
	}, [theme])

	return (
		<div className='app'>
			<SideBar handleClick={toggleTheme} switchBtnTheme={switchBtnTheme} />
			<Main />
		</div>
	)
}
