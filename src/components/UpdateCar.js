import React from 'react'

function UpdateCar(props)
{
const handleCarData = () => {
    console.log(props.carObjData)
    console.log(props.carId)
}

    return (
        <button type='button' className='btn btn-primary'>Elküld</button>
    )
}

export default UpdateCar