import { useParams } from "react-router-dom";
import BlogPosts from "../Data/BlogPosts";
import "./blogpage.css"
// import BlogPosts from "./Main-content";


function BlogPage (){
    const { id } = useParams();
    const post = BlogPosts.find(p => p.id === parseInt(id));
    return(
        <div className="blog-page">
        <h2 className="title">{post.title}</h2>
        <p className="blogContent">{post.content}</p>
        </div>
    )
}

export default BlogPage

