import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {

    const [ title, setTitle ] = useState('');
    const [ body, setBody ] = useState('');
    const [ author, setAuthor ] = useState('');
    const [ isPending, setIsPending ] = useState(false)
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        const blog  = { title, body, author};
        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST' ,
            headers : { "Content-Type":"application/json" },
            body : JSON.stringify(blog)
        }).then(()=>{
            setIsPending(false);
            navigate(-1);
        })
    }

    return ( 
        <div className="container my-6">
            <h2 className="text-danger my-5">Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label className="form-label text-danger-emphasis">Blog Title : </label>
                <input className="form-control border border-dark"
                    type = 'text' required
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />
                <br />
                <label className="form-label text-danger-emphasis">Blog Body : </label>
                <textarea rows="5" className="form-control border border-dark " required
                    value={body}
                    onChange={(e)=>setBody(e.target.value)} >
                </textarea>
                <br />
                <label className="form-label text-danger-emphasis">Blog Author : </label>
                <input className="form-control border border-dark"
                    type = 'text' required
                    value={author}
                    onChange={(e)=>setAuthor(e.target.value)}
                />
                <br />
                {!isPending && <button className="btn btn-danger my-3">Add Blog</button>}
                {isPending && <button className="btn btn-danger my-3" disabled>Adding...</button>}
            </form>
        </div>
     );
}
 
export default Create;