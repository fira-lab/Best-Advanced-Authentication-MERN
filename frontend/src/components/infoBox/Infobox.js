import React from 'react'

const Infobox = ({bgColor, title, count, icon}) => {
  return (
    <div className={`info-box ${bgColor}`}>
        <span className='info-icon --color-white'>
            {icon}
        </span>
        <span className='info-text'>
            <p>{title}</p>
            <h4>{count}</h4>
        </span>
      
    </div>
  )
}

export default Infobox
