import { CommentsList } from './CommentsList.jsx'

export default function CommentsPage ({ params }) {
  const { id } = params

  return (
    <ul style={{ background: '#999', fontSize: '12px' }}>
      <CommentsList id={id} />
    </ul>
  )
}
