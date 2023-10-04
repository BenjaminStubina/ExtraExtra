import Article from '../Article/Article';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './ArticleList.scss'

const ArticleList = ({ activeSource }) => {

    const [data, setData] =useState();

    useEffect(() => {
      async function fetchData() {
        try {
          let {data} = await axios.get(`http://localhost:8080/?publication=${activeSource}`);
          const filteredData = data.linkinbio_posts
          setData(filteredData)
        }
        catch {
          console.log('Error fetching data')
        }
      }
      fetchData();
    },[activeSource])

    if (!data) {
        return (
          <div className='absolute left-[calc(50%-1.5rem)]'>
            <span className="loader">
              <span className="loader-inner"></span>
            </span>
          </div>
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