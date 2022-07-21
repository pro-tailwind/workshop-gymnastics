import Link from 'next/link'
import Image from 'next/future/image'

import { PageContainer } from '../../components/page-container'
import { PageHeading } from '../../components/page-heading'

import { Ribbon } from '../../components/ribbon'

import { lessonsMeta } from '../../data'

export default function App() {
  return (
    <PageContainer>
      <PageHeading>Workshop – Pro Tailwind CSS Gymnastics</PageHeading>
      <p className="mt-4 max-w-prose text-lg font-medium text-slate-600 md:mt-6">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, sed animi recusandae
        consequuntur quis et eveniet nulla. Maxime mollitia eaque harum quasi molestiae, nihil ab,
        asperiores illo, fugiat vel optio.
      </p>

      <ul className="mx-auto mt-16 grid max-w-lg gap-12 md:max-w-none md:grid-cols-2 xl:grid-cols-3">
        {lessonsMeta.map((lesson) => (
          <ChallengeCard lesson={lesson} key={lesson.name} />
        ))}
      </ul>
    </PageContainer>
  )
}

// ------------------------------
// Implementation components
// ------------------------------

function ChallengeCard({ lesson }) {
  return (
    <li className="group relative">
      <Ribbon color={lesson.language === 'HTML' ? 'teal' : 'violet'} position="top-right">
        {lesson.language}
      </Ribbon>

      <div className="w-full overflow-hidden rounded-lg bg-white shadow-md transition group-hover:shadow-lg">
        <Image src={lesson.image} alt="" />
        <h2 className="border-t border-slate-200 p-8 text-center text-lg font-semibold text-slate-900">
          {lesson.name}
        </h2>
      </div>
      <Link href={`/challenges/${lesson.slug}`}>
        <a className="absolute inset-0"></a>
      </Link>
    </li>
  )
}
