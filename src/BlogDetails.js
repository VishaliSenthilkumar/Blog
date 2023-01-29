import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { id } = useParams();
    const { data:blog, isPending, error } = useFetch(`http://localhost:8000/blogs/${id}`);
    const navigate = useNavigate();

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/'+ blog.id, {
            method: 'DELETE'
        }).then(()=>{
            navigate(-1);
        })
    }

    return ( 
        <div className="container-fluid mx-3 my-5 ">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blog&&<article>
                <h3 className="text-center text-danger mt-5 fs-1">{blog.title}</h3>
                <h5 className="text-center fw-semibold text-danger mt-3 mb-5">written by {blog.author}</h5>
                <p className="indent">{blog.body}</p>
                <div className="text-center my-5">
                <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                </div>
            </article>}
            
        </div>
     );
}
 
export default BlogDetails;
