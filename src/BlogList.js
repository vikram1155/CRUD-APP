import React from 'react'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

function BlogList({blogs}) {
    
    return (
        <div className="BlogList">
            {blogs.map((blog) =>(
            <div className="blog-preview" key="{blog.id}">
                <div>
                <Link to ={`/blogs/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <h5>Written by {blog.author}</h5> 
                    {/*<h5>{blog.body} </h5>*/}
                </Link>
                </div>
            </div>
        ))}
        </div>
    )
}

export default BlogList;
