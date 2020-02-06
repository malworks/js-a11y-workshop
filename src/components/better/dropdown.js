import React, { useState, useRef, useEffect } from "react"
import uuid from "uuid"

import "./dropdown.scss"

const Dropdown = ({ activatorText = 'Dropdown', items = [] }) => {
    const activatorRef = useRef(null)
    const dropdownListRef = useRef(null)
    const [isOpen, setIsOpen] = useState(false)
    const clickHandler = (event) => {
    	setIsOpen(!isOpen)
    }
    const keyHandler = (event) => {
    	console.log(event.key)
    	if (event.key === 'Escape' && isOpen) {
    		setIsOpen(false)
    	}
    }
    const clickOutsideHandler = (event) => {
    	if (dropdownListRef.current.contains(event.target) || activatorRef.current.contains(event.target)) {
    		return
    	}
    	setIsOpen(false)
    }
    useEffect(() => {
    	if (isOpen) {
    		dropdownListRef.current.querySelector('a').focus()

    		document.addEventListener('mousedown', clickOutsideHandler)
    	} else
    	{
    		document.removeEventListener('mousedown', clickOutsideHandler)
    	}
    }, [isOpen])
    return (
        <div
            className="dropdown-wrap"
            onKeyUp={keyHandler}
  		>
  			<button
  				aria-haspopup=""
  				aria-controls="Dropdown1"
  				onClick={clickHandler}
  				ref={activatorRef}
  				className="dropdown-activator"
			>
  				{activatorText}
  			</button>
  			<ul
                id="dropdown1"
                ref={dropdownListRef}
                // tabIndex="-1" // makes the list focusable
                className={`dropdown-itemList ${isOpen ? 'active' : ''}`}
                role="list"
                data-testid="dropdown-itemList" // an id to use for testing
                >
                { items.map((item, index) => {
                    return <li key={index} role="listitem">
                        <a href={item.url}>{item.text}</a>
                    </li>
                })}
                { items.length === 0 ? <li>No items</li> : null }
            </ul>

        </div>
    )
}
export default Dropdown
