import React from 'react'

function TimelineItem({ item, side }) {
  const tbar =  <div className='border-bottom border-5 t-bar'></div>
  return (
    <>
      <div className={`row justify-content-${side}`}>

        {side === 'end' ? tbar : ""}
        <div className='col-sm-2 col-md-3 col-lg-3'>
          <div className="card h-100 shadow-sm border-0">
            <img className="img-fluid img-thumbnail rounded" src={item.image} />
            <div className="card-body bg-dark text-white">
              <h5 className='card-title'>{item.title}</h5>
              <p className='card-date'>{item.date}</p>
              <p className='card-text'>{item.description}</p>
            </div>
          </div>
        </div>
        {side === 'start' ? tbar : ""}
      </div>
    </>
  )
}

export default TimelineItem