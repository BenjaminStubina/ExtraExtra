import axios from 'axios';
import { useEffect, useState } from 'react';
import { caption, shortenCaption, stripLink, secondsToDate } from '../../utils/utils';

// Individually mapped article
const ArticleItem = ({ image, link, time, caption, source }) => {

  return (
    <article className="flex h-72 w-72">
      <a href={link} target='_blank' rel="noopener noreferrer" className="relative w-full h-full border-8 border-transparent   md:hover:border-red-500 rounded overflow-hidden">
        <img src={image} alt='' className="object-cover object-center h-full w-full Xbrightness-[0.9]  transition duration-300 ease-in-out Xhover:brightness-110" />
        <div className='absolute inset-0 flex flex-col justify-center text-white opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-black bg-opacity-75 p-4'>
          <p className='text-center Xflex-1'>{time}</p>
          <p className='Xtruncate flex-1'>{caption}</p>
          <p className='text-center Xflex-1'>{source}</p>
        </div>
      </a>
    </article>

  );
};

export default function ArticleList({ activeSource }) {

  // Use state to store the data retrieved from the API call to the back-end
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  // Axios call to the back-end to retrieve the data based on the selected news publisher.
  // Publisher is passed to the back-end as a query in the GET Request
  useEffect(() => {
    async function fetchData() {
      try {
        let { data } = await axios.get(`https://extra-extra-server.onrender.com/?publication=${activeSource}`);
        setData(JSON.parse(data));
        setLoading(false);
      }
      catch {
        console.log('Error fetching data');
      }
    }
    fetchData();
  }, [activeSource]);

  if (loading) {
    return (
      <div className='absolute left-[calc(50%-75px)] top-[50%]'>
        <span className="loader inline-block w-36 h-36 relative border-8 border-pink-500">
          <span className="loader-inner align-top inline-block w-full bg-blue-300"></span>
        </span>
      </div>
    );
  }

  // Once data is stored in state, return all of the articles mapped out below
  return (
    <>
      {data.map((article) => {
        return (
          <ArticleItem
            key={article.post_id}
            link={stripLink(article.link_url)}
            image={article.image_url}
            time={secondsToDate(article.posted_time)}
            source={article.publication}
            caption={shortenCaption(caption, 250)}
          />
        );
      })}
    </>
  );
};