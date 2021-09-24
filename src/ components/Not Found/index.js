import React from 'react';
import github from "../../views/Home/github.jfif";

const NotFound = () => {
  return (
    <div className='home d-flex justify-content-center align-items-center' style={{
      backgroundImage : `url(${github})`
    }}>

      <h3 className='text-center'>Not Found</h3>


    </div>
  );
};

export default NotFound;