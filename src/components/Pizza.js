import React, { useContext } from 'react'
import {foodContext} from '../App'

function Pizza() {
    let context = useContext(foodContext);
    return (
        <div>
            PiZZa works
        </div>
    )
}

export default Pizza
