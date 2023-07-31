import PostList from './components/post/post-list'
import Loading from './loading'
import PostNew from './components/post/post-new'

import { Suspense } from 'react'

export default function Home() {
  return (
    <div className='h-full'>
      <Suspense fallback={<Loading />}>
        <PostList />
      </Suspense>
      <PostNew />
    </div>
  )
}
