import { useState } from 'react';
import Comment from './comment';
import InputEmoji from 'react-input-emoji'
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import Api from '../../../../api/api';
import { getProfileMe } from '../../../../data/atom';

function Comments({ ownerId, postId, comments, commentsShow, setCommentsCount }) {

    const profileMe = useRecoilValue(getProfileMe);
    const [comment, setComment] = useState('');
    const [commentsArray, setComments] = useState([]);

    const submitComment = async (comment) => {
        if (comment && comment.trim() && comment.length > 0) {
            setComments(prev => ([...prev, { comment, user: profileMe, createdAt: Date.now() }]))
            setCommentsCount(prev => prev + 1)

            const res = await Api.postComment({ postId, comment })
            if (res.status === 201) {
                setComment('');
            }
            await Api.sendSingleNotification({
                toId: ownerId,
                notification: `commented on your post`
            })
        }
    }

    useEffect(() => {
        let isSubscribe = true
        if (isSubscribe) {
            setComments(comments)
        }
        return () => isSubscribe = false
    }, [comments])

    return (
        <div className="comment-section">
            <div className={`comments ${commentsShow && 'd-block'}`}>
                {commentsArray && commentsArray.map((item, i) => (
                    <Comment
                        index={i}
                        fullName={item.user?.fullName}
                        avatar={item.user?.avatar}
                        comment={item.comment}
                        createdAt={item.createdAt}
                    />
                ))}
            </div>
            <div className="reply">
                <div className="search-input input-style input-lg icon-right">
                    <InputEmoji
                        value={comment}
                        onChange={setComment}
                        cleanOnEnter
                        onEnter={submitComment}
                        placeholder="Write a comment..."
                    />
                </div>
            </div>
        </div >
    )
}

export default Comments