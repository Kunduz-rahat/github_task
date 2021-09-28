import React, {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom'
import axios from "axios";
import Spinner from "../../Spinner";
import Layout from "../../ components/Layout";
import NotFound from "../../ components/Not Found";


const Repositories = () => {
  const [projects, setProjects] = useState([])
  const {username} = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)
  useEffect(() => {
    axios(`https://api.github.com/users/${username}/repos`)
      .then(({data}) => setProjects(data))
      .catch(() => setNotFound(true))
      .finally(() => setIsLoading(false))
  }, [username])

  if (isLoading ) {
    return  <Spinner/>
  }
  if (notFound){
    return <NotFound/>
  }
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
}
;

export default Repositories;