// pages/news-details.js
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

function NewsDetails() {
  const router = useRouter();
  const { articleId } = router.query;
  const [articleDetails, setArticleDetails] = useState(null);

  useEffect(() => {
    const fetchArticleDetails = async () => {
      try {
        
        const response = await fetch(`https://your-api-endpoint/${articleId}`);
        const data = await response.json();
        setArticleDetails(data);
      } catch (error) {
        console.error('Error fetching article details:', error);
      }
    };

    if (articleId) {
      fetchArticleDetails();
    }
  }, [articleId]);

  if (!articleDetails) {
    
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>News Details Page</h1>
      <p>Article ID: {articleId}</p>
      <h2>{articleDetails.title}</h2>
      <img src={articleDetails.image_url} alt={articleDetails.title} />
      <p>{articleDetails.description}</p>
   
    </div>
  );
}

export default NewsDetails;
