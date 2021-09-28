
import github from "../Home/github.jfif";
import React from "react";
import {Link} from "react-router-dom";

const NoReadme = () => {

  return (
    <div className='home d-flex justify-content-center align-items-center' style={{
      backgroundImage: `url(${github})`
    }}>

      <h3 className='text-center'>Not Readme</h3>

      <Link to='/'>
        <button className='btn btn-primary ms-5 btn-ms'>Go back</button>
      </Link>

    </div>

  )
}
export default NoReadme