import React from 'react';
import { useParams } from 'react-router-dom';
import articleData from '../data/Article1.json';

const ArticlePage = () => {
  const { articleId } = useParams();

  const data = articleData;

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
    return <div>Chargement...</div>;
  }

  return (
    <div className="article-container">
      <h1>{data.title}</h1>
      {data.content.map((block, index) => renderContentBlock(block, index))}
    </div>
  );
};

export default ArticlePage;
