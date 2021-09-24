import React, {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom'
import axios from "axios";

import Layout from "../../ components/Layout";


const Repositories = () => {
  const [projects, setProjects] = useState([])
  const {username} = useParams()
  useEffect(()=>{
axios(`https://api.github.com/users/${username}/repos`)
  .then(({data}) => setProjects(data))
  }, [username])

  return (
    <Layout>
      <ul className="list-group">
        {
          projects.map(item =>
            <li className='list-group-item' key={item.id}>
              <Link to={`/${username}/${item.name}`}>{item.name}</Link>
            </li>

          )
        }
      </ul>

    </Layout>
  );
};

export default Repositories;