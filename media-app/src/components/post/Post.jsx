import { useState } from 'react';
import { Users } from '../../dummyData';
import './post.css'
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default function Post({ post }) {
  const [like,setLike] = useState(post.like)
  const [isliked,setIsLiked] = useState(false)

  const likeHandler = () =>{
    setLike(isliked? like-1: like+1)
    setIsLiked(!isliked)
  }

  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}alt="" className="postProfileImg" />
            <span className="postUsername">
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>

            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>

        <div className="postCenter">
          {post.desc && <span className="postText">{post.desc}</span>}
          <img className='postImg' src={post.photo} alt="" />
        </div>

        <div className="postBottom">
          <div className="postBottomLeft">
            <img className='likeIcon' src="assets/post/like.png" onClick={likeHandler} alt="" />
            <img className='likeIcon' src="assets/post/heart.png" onClick={likeHandler} alt="" />
            <span className='postLikeCounter'>{like} people liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
