import Article from '../Article/Article';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './ArticleList.scss'

const ArticleList = ({ activeSource }) => {

    // Use state to store the data retrieved from the API call to the back-end
    const [data, setData] =useState();

    // Axios call to the back-end to retrieve the data based on the selected news publisher.
    // Publisher is passed to the back-end as a query in the GET Request
    useEffect(() => {
      async function fetchData() {
        try {
          let {data} = await axios.get(`http://localhost:8080/?publication=${activeSource}`);
          setData(JSON.parse(data))
        }
        catch {
          console.log('Error fetching data')
        }
      }
      fetchData();
    },[activeSource])

    // If no data is found return a loading animation
    if (!data) {
        return (
          <div className='absolute left-[calc(50%-1.5rem)]'>
            <span className="loader">
              <span className="loader-inner"></span>
            </span>
          </div>
        )
    }
    
    // Once data is stored in state, return all of the articles mapped out below
    return (
        <>
            {data.map((article) => {
                return (
                    <Article
                    key={article.post_id}
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