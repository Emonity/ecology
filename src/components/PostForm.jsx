import { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

//Create a new contacts

const PostForm = ({create}) =>{
    const [post, setPost] = useState({title: '', body: '', image: ''})

    const addNewPost = (e) =>{
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: '', image: ''})
    }
    return (
        <form>
            {/*Управляемый компонент*/}
            <MyInput
                value={post.title}
                onChange={e => setPost({ ...post, title: e.target.value })}
                type="text"
                placeholder="Name"
            />
            <MyInput
                value={post.body}
                onChange={e => setPost({ ...post, body: e.target.value })}
                type="text"
                placeholder="Desciption"
            />
            <MyButton onClick={addNewPost}> Add events</MyButton>
        </form>
    );
};

export default PostForm;