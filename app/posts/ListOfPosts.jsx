import Link from 'next/link.js'
import { LikeButton } from './LikeButton.jsx'

const fetchPosts = async () => {
  // getStaticProps
  // ->  fetch('https://jsonplaceholder.typicode.com/posts')

  // getServerSideProps
  // ->  fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' })

  // incremental static regeneration
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60
    }
  })
  const data = await res.json()

  return data
}

export default async function ListOfPosts () {
  const posts = await fetchPosts()

  return posts.slice(0, 5).map(post => (
    <article key={post.id}>
      <Link href='/posts/[id]' as={`/posts/${post.id}`}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </Link>
      {/* <LikeButton id={post.id} /> */}
    </article>
  ))
}
