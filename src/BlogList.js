import { Link } from "react-router-dom";

const BlogList = (props) => {

    const blogs = props.blogs;
    const handleDelete = props.handleDelete;

    return ( 
        <div className="container text-center">
            {blogs.map((blog)=>(
                <div className="card text-center mx-1 my-5 p-3 border border-primary-subtle" key={blog.id} >
                <Link className="nav-link card-body" to={`/blogs/${blog.id}`}>
                    <h3 className="card-title text-info">{blog.title}</h3>
                    <p className="card-text text-info-emphasis mt-4">written by {blog.author}</p>
                </Link>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList