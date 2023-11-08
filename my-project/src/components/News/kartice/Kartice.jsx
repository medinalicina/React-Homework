import {React, useEffect, useState} from 'react'
import axios from 'axios'
import '../kartice/Kartice.css'
// import Logo from '../../../public/img/Logo.png';

export const Kartice = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=e7cdfdb1358a4f1d9079d743a3f945e5')
    .then((response) => {
        // console.log(response.data.articles)
        setData(response.data.articles)
    }).catch(() => {
        console.log('error')
    })
  }, [])
    

  console.log(data,'DATA')

  return (
    <div className='card-container'>
      {data?.map((article) => (
        <div key={article.id} className="card">
           <div className='profil'>
  <img
    src="/Logo.png" 
    alt=""
    style={{ borderRadius: '50%', width: '40px' }}
  />
  <p style={{ fontSize: '12px' }}>World News</p>
</div>

          <img src= {article.urlToImage} alt="" />
         <h1>{article.title}</h1>
         <h4>{article.description}<span style = {{fontSize: '10px', textDecoration: 'underline', marginLeft: '8px'}}>Read about it</span></h4>
         <div className = 'about-author' style = {{display: 'flex', justifyContent: 'flex-end', gap: '10px'}}>
          <p>Author:</p>
          <p>{article.author}</p>
         </div>
         
          {/* <img src= {article.urlToImage} alt="" /> */}
         
          
        </div>
      ))}
    </div>
  );
}
export default Kartice
//imdb api top 250movies