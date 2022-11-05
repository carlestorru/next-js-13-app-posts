import Link from 'next/link'

const fetchPost = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60
    }
  })
  const data = await res.json()

  return data
}

export default async function Post ({ children, params }) {
  const { id } = params
  const post = await fetchPost(id)

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link href={`posts/${id}/comments`}>Ver comentarios</Link>
      {children}
    </article>
  )
}
