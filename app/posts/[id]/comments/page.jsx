import Image from 'next/image'

const fetchComments = async (id) => {
  // await new Promise(resolve => setTimeout(resolve, 1000))
  // throw new Error('Error al cargar los comentarios')

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60
    }
  })
  const data = await res.json()

  return data
}

export default async function Post ({ params }) {
  const { id } = params
  const comments = await fetchComments(id)

  return (
    <ul style={{ background: '#999', fontSize: '12px' }}>
      {comments.map(comment => (
        <li key={comment.id}>
          <Image width='50' height='50' src={`https://avatars.dicebear.com/api/pixel-art-neutral/${comment.email}.svg`} alt={comment.name} />
          <h4>{comment.name}</h4>
          <small>{comment.body}</small>
        </li>
      ))}
    </ul>
  )
}
