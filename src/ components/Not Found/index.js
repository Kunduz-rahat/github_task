import React from 'react';
import github from "../../views/Home/github.jfif";
import {Link} from "react-router-dom";

const NotFound = () => {
  return (
    <div className='home d-flex justify-content-center align-items-center' style={{
      backgroundImage: `url(${github})`
    }}>

      <h3 className='text-center'>Not Found</h3>
      <div>
        <Link to='/'>
          <button className='btn btn-primary ms-5 btn-ms'>Go back</button>
        </Link>

      </div>


    </div>
  );
};

export default NotFound;