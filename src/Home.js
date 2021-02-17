import BlogList from './BlogList';
import useFetch from './useFetch';


const Home = () => {

    const { data:blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');

  return (
    <div className="home">
    <h1>HomePage</h1>
        {error && <div> { error }</div>}
        {isLoading && <div><img height="100" src="https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"></img></div>} 
        {blogs &&  <BlogList blogs={blogs}/>}
    </div>
  );
}
 
export default Home;