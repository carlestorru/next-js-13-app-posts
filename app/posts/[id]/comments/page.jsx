const fetchComments = async (id) => {
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
    <ul>
      {comments.map(comment => (
        <li key={comment.id}>
          <h2>{comment.name}</h2>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  )
}
