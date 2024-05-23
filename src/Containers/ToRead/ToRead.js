import './ToRead.css'
import ArticleCard from "../../Components/ArticleCard/ArticleCard"
import {useState, useEffect} from 'react';

export default function ToRead() {
  const [articles, setArticles] = useState([]);
  const ARTICLES_API_URL = "http://localhost:8000/articles"

  useEffect(() => {
    fetch(ARTICLES_API_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(data => setArticles(data))
      .catch((e) => {
        console.error(e);
      });
  }, [])

  return (
    <div className="container">
      <h2>Un peu de lecture</h2>
      <div className="article-card-container">
        {
          articles.map((article, index) => <ArticleCard key={index} article={article}/>)
        }
      </div>
    </div>
  )

}