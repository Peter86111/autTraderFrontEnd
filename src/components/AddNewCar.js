import React, { useState, useEffect } from 'react'
import UpdateCar from './UpdateCar'

function AddNewCar(props)
{
  const [carData, setCardata] = useState(
    {
      brand: "",
      type: "",
      color: "",
      myear: ""
    })

    useEffect(() => 
    {
      if(props.carObjData)
        {
          setCardata({
            brand: props.carObjData.brand || '',
            type: props.carObjData.type || '',
            color: props.carObjData.color || '',
            myear: props.carObjData.myear || ''
            ? new Date(new Date(props.carObjData.myear).getTime() - new Date().getTimezoneOffset()*60000)
            .toISOString()
            .split('T')[0]
            : ''
          });
        }
    })
    , [props.carObjData] // Ha a `props.carObjData` változik, frissítjük az űrlapot

  const handleChange = (event) =>
  {
    const { name, value } = event.target
    setCardata({ ...carData, [name]: value })
  }

  const handleSubmit = async (event) =>
  {
    const url = `https://localhost:7118/cars`
    event.preventDefault()

    const request = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(carData),
      headers: {
        'Content-Type': 'application/json',
      }
    })

    if (!request.ok)
    {
      console.log("Hiba")
      return
    }

    const response = await request.json()
    props.handleCount()
    console.log(response.message)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className=''>
        <label>Márka:</label>
        <input
          type='text'
          id='brand'
          name='brand'
          value={carData.brand}
          onChange={handleChange}
          className='form-control'
          placeholder='Autó márkája'
        />
        <label>Típus:</label>
        <input
          type='text'
          id='type'
          name='type'
          value={carData.type}
          onChange={handleChange}
          className='form-control'
          placeholder='Autó típusa'
        />
        <label>Szín:</label>
        <input
          type='text'
          id='color'
          name='color'
          value={carData.color}
          onChange={handleChange}
          className='form-control'
          placeholder='Autó színe'
        />
        <label>Gyártási év:</label>
        <input
          type='date'
          id='myear'
          name='myear'
          value={carData.myear}
          onChange={handleChange}
          className='form-control'
          placeholder='Autó gyártási éve-hónap-nap'
        />
        <button type='button' className='btn btn-primary'>Elküld</button>
        <UpdateCar carObjData={carObjData} carId={props.carObjData.id}/>
      </form>

    </div>
  )
}

export default AddNewCar