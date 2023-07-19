import React from 'react'
import { MenuList } from '../helpers/MenuList'
import MenuItem from '../components/MenuItem'
import '../styles/Main.css'

function Main() {
    return (
        <div className='main'>
            <h1 className='menuTitle'>Our Selection</h1>
            <div className='menuList'>
                {MenuList.map((menuItem, key) => {
                    return (
                        <MenuItem
                            key={key}
                            image={menuItem.image}
                            name={menuItem.name}
                            price={menuItem.price}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Main