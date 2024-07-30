import { type Metadata } from 'next'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/articles'
import Articles from './_components/Articles'

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.',
}

export default async function ArticlesIndex() {
  let articles = await getAllArticles()

  return (
    <SimpleLayout
      title="Writing on software design, company building, and the aerospace industry."
      intro="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
    >
      <Articles articles={articles}/>
    </SimpleLayout>
  )
}
