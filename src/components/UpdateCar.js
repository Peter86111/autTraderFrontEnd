import React from 'react'

function UpdateCar(props)
{
const handleCarData = async (event) => {
    const url = `https://localhost:7118/cars?id=${props.carId}`

    const request = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(props.carObjData),
        headers: {"Content-type": "Application/json"}
    })

    if(!request.ok)
        {
            console.log("Hiba")
            return
        }

        var response = await request.json()
        console.log(respone.message)
}

    return (
        <button type='button' className='btn btn-primary'>Elküld</button>
    )
}

export default UpdateCar