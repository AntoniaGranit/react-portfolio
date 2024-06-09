import React, { useState } from 'react'

export const MyContext = React.createContext()

export const MyProvider = (props) => {
	const [isMenuOpen, setMenuOpenState] = useState(false)

	const toggleMenu = () => {
		setMenuOpenState((prevState) => !prevState)
	}

	const closeMenu = () => {
		setMenuOpenState(false)
	}

	return (
		// eslint-disable-next-line react/jsx-no-constructed-context-values
		<MyContext.Provider value={{ isMenuOpen, toggleMenu, closeMenu }}>
			{props.children}
		</MyContext.Provider>
	)
}
