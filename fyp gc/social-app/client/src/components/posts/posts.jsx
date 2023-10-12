import Post from './post/post';

function Posts({ setLoader, posts, isAuth, setUserPosts }) {
    return (
        <>
            <div className="post-panel ">
                {posts && posts.map(post => (
                    <Post
                        post={post}
                        isShare={post.share.isShare}
                        avatar={!post.share.isShare ? post.owner.avatar : post.share.user.avatar}
                        fullName={!post.share.isShare ? post.owner.fullName : post.share.user.fullName}
                        postId={post._id}
                        isAuth={isAuth}
                        setLoader={setLoader}
                        setUserPosts={setUserPosts}
                    />
                ))}
            </div>
        </>
    )
}

export default Posts