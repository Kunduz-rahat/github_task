import React, {useEffect, useState} from 'react';
import Markdown from 'markdown-to-jsx';
import Layout from "../../ components/Layout";
import {useParams} from "react-router-dom";
import axios from "axios";

const Readme = () => {
  const {username, project} = useParams()
  const [readme, setReadme] = useState('')

  useEffect(() =>{
    axios(`https://api.github.com/repos/${username}/${project}/readme`,
      {
        headers : {Accept: "application/vnd.github.VERSION.raw"} //заголовки запросов на сервер
      }).then(({data}) => setReadme(data))
  }, [])

  axios(``)
  return (
    <Layout>
      <Markdown className='readme'>{readme}</Markdown>
    </Layout>
  );
};

export default Readme;