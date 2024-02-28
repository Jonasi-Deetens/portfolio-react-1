import React from 'react';

export const Banner = ({title}) => {
    return (
      <div className='banner-header text-center p-5'>
          <h1 className='text-3xl m-auto'>{title}</h1>
      </div>
    )
}
