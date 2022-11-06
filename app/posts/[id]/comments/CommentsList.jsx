'use client'

import Image from 'next/image'
import { use } from 'react'

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

export function CommentsList ({ id }) {
  const comments = use(fetchComments(id))

  return (
    comments.map(comment => (
      <li key={comment.id}>
        <Image width='50' height='50' src={`https://avatars.dicebear.com/api/pixel-art-neutral/${comment.email}.svg`} alt={comment.name} />
        <h4>{comment.name}</h4>
        <small>{comment.body}</small>
      </li>
    ))
  )
}
