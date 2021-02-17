import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isLoading } = useFetch('http://localhost:8000/blogs/' + id);

  const history=useHistory();
  const handleDelete=()=>{
      fetch('http://localhost:8000/blogs/'+ blog.id , {
          method:'Delete',
      }).then(()=>{
          history.push('/');
      })
  }

  return (
    <div className="blog-details">
      { isLoading && <div><img alt = "loading" height="100" src="https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"></img></div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p><br></br>
          <div>{ blog.body }</div>
          <div className="create">
          <button onClick={handleDelete}>Delete</button>
          </div>
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;