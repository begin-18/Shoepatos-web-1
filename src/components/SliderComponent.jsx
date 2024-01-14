import React, {useState} from 'react'
import {data} from '../Slider.js'

const SliderComponent = () => {
    const [slide] = useState (data);
  return (
    <div id='slider' className=''>
      <div id='slide-track'>
      {slide.map((item, index)=>(
            <div key={index} id='slide' >
                <img src={item.image} alt={item.name} />
            </div>
        ))}
      </div>
    </div>
  )
}

export default SliderComponent