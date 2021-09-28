import React, {useEffect, useState} from 'react';
import Markdown from 'markdown-to-jsx';
import Layout from "../../ components/Layout";
import {useParams} from "react-router-dom";
import axios from "axios";
import Spinner from "../../Spinner";
import NoReadme from "../No Readme";

const Readme = () => {
  const {username, project} = useParams()
  const [readme, setReadme] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [notReadme, setNotReadme] = useState(false)

  useEffect(() =>{
    axios(`https://api.github.com/repos/${username}/${project}/readme`,
      {
        headers : {Accept: "application/vnd.github.VERSION.raw"} //заголовки запросов на сервер
      }).then(({data}) => setReadme(data))
      .catch(() =>setNotReadme(true))
      .finally(() => setIsLoading(false))
  }, [username, project])
  if (isLoading ) {
    return  <Spinner/>
  }
  if (notReadme){
    return <NoReadme/>
  }

  return (
    <Layout>
      <Markdown className='readme'>{readme}</Markdown>
    </Layout>
  );
};

export default Readme;