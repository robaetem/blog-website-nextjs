"use client"

import { useState } from 'react';
import { TopicTag } from './TopicTag';
import Article from './Article';
import { ArticleWithSlug } from '@/lib/articles';

interface ArticlesProps {
  articles: ArticleWithSlug[];
}

export default function Articles({ articles }: ArticlesProps) {
  const [topics, setTopics] = useState(
    articles.reduce((acc, article) => {
      acc[article.topic] = false;
      return acc;
    }, {} as Record<string, boolean>)
  );

  return (
    <div>
      <div className="mb-10">
        {Object.keys(topics).map((topic) => (
          <TopicTag
            key={topic}
            topic={topic}
            active={topics[topic]}
            onClick={() => setTopics({ ...topics, [topic]: !topics[topic] })}
          />
        ))}
      </div>
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex flex-col gap-14">
          {articles.map((article) => {
            if (Object.values(topics).every((topic) => !topic) || topics[article.topic]) {
              return <Article key={article.slug} article={article} />;
            }
          })}
        </div>
      </div>
    </div>
  );
}