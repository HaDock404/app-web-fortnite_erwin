import React from 'react';
import { useParams } from 'react-router-dom';
import articleData1 from '../data/Article1.json';
import articleData2 from '../data/Article2.json';
import "../styles/quiz.css";
import Header from '../components/Headerbis';

const ArticlePage = () => {
  const { articleId } = useParams();

  // 👇 Mapping entre les IDs et les JSONs
  const articles = {
    articlepage1: articleData1,
    articlepage2: articleData2,
    // etc...
  };

  const data = articles[articleId];

  const renderContentBlock = (block, index) => {
    switch (block.type) {
      case 'heading':
        const HeadingTag = `h${block.level}`;
        return <HeadingTag key={index}>{block.text}</HeadingTag>;
      case 'paragraph':
        return <p key={index}>{block.text}</p>;
      case 'image':
        return (
          <img
            key={index}
            src={block.src}
            alt={block.alt}
            style={{ maxWidth: '100%' }}
          />
        );
      default:
        return null;
    }
  };

  if (!data) {
    return <div>Article non trouvé</div>;
  }

  return (
    <section className="article">
      <Header />
      <section className="article_page_section">
        <h1>{data.title}</h1>
        {data.content.map((block, index) => renderContentBlock(block, index))}
      </section>
    </section>
  );
};

export default ArticlePage;
