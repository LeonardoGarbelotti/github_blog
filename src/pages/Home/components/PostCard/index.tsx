import { IPost } from '../..'
import { DateFormatter } from '../../../../utils/formatter'
import { PostContainer } from './styles'

interface IPostProps {
  post: IPost
}

export function PostCard({ post }: IPostProps) {
  const formatedDate = DateFormatter(post.created_at)

  return (
    <PostContainer to={`/post/${post.number}`}>
      <div>
        <strong>{post.title}</strong>
        <span>{formatedDate}</span>
      </div>
      <p>{post.body}</p>
    </PostContainer>
  )
}
