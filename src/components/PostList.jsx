import React from 'react';
import PostItem from "./PostItem";
// import {TransitionGroup, CSSTransition} from "react-transition-group";

const PostList = ({posts, title, remove}) => {

    if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center', color: 'red'}}>
                Posts not found!
            </h1>
        )
    }

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            {/* <TransitionGroup> */}
                {posts.map((post, index) =>
                    // <CSSTransition
                    //     key={post.id}
                    //     timeout={500}
                    //     classNames="post"
                    // >
                    // <PostItem post={post} key={post.id} />     
                    
                    <PostItem remove={remove} number={index + 1} post={post} key={post.id} />
                    // </CSSTransition>
                )}
            {/* </TransitionGroup> */}
        </div>
    );
};

export default PostList;