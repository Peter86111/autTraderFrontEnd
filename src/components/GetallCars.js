import React, { useEffect, useState } from 'react'
import DeleteCar from './DeleteCar'

function GetallCars(props)
{
    const url = `https://localhost:7118/cars`
    const [carsData, setCarsData] = useState([])


    useEffect(() =>
    {
        (async () =>
        {
            const request = await fetch(url, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (!request.ok)
            {
                console.log("Hiba")
                return
            }

            const response = await request.json();
            setCarsData(response.result)
            console.log(response.message)
        })()
    }, [props.count])


    const carElments = carsData.map(
        car =>
        {
            return (
                <div className="card m-3 pt-2" style={{ 'width': 200, 'float': 'left' }} key={car.id}>
                    <div className="card-header">{car.brand}</div>
                    <div className="card-body">{car.type}</div>
                    <div className="card-footer">{car.color}</div>
                    <div className="card-footer">{car.myear}</div>
                    <div><DeleteCar carId={car.id} handleCount={props.handleCount}/></div>
                </div>
            )
        }
    )

    return (
        <div>{carElments}</div>
    )
}

export default GetallCars