import React, { useEffect, useState } from 'react'

const TabList = ({ items = [] }) => {
  const [isClient, setClient] = useState(false) 

  useEffect(() => {
    setClient(true)
  }, [])
  return (
    <ul role={ isClient ?  `tablist` : `list` }> {}
      {items.map(item => (
        <li key={item.id} {...isClient && { role: `tab` }}> {}
          {item.label}
        </li>
      ))}
    </ul>
  )
}

export default TabList