import Article from '../Article/Article';
import axios from 'axios';
import { useEffect, useState } from 'react';

const ArticleList = () => {

    const [data, setData] =useState();

    useEffect(() => {
      async function fetchData() {
        try {
          let {data} = await axios.get("http://localhost:8080/");
          const filteredData = data.linkinbio_posts
          setData(filteredData)
        }
        catch {
          console.log('Error fetching data')
        }
      }
  
      fetchData();
    },[data])

    if (!data) {
        return (
            <h1>
                Fetching Data...
            </h1>
        )
    }
    
    return (
        <>
            {data.map((article) => {
                return (
                    <Article
                    key={article.id}
                    link={article.link_url}
                    image={article.image_url}
                    article={article}
                    />
                )
            })}
        </>
    )
}

export default ArticleList;