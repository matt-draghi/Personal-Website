import { useEffect, useState } from "react"
import BlogCard from "./BlogCard"

function BlogContainer(){

    const [blogArray, setBlogArray] = useState([])

    useEffect(()=>{
        fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mtd5264`)
        .then(resp=>resp.json())
        .then(blogData=> {
            console.log(blogData.items)
            setBlogArray(blogData.items)
        })
    },[])

    return(
        <div className="cards-container">
            
            {blogArray.map((blog) => {
                return (<BlogCard key={blog.title} blog={blog}/>)
            })}
            <h1>Blogs</h1>
        </div>
    )
}

export default BlogContainer