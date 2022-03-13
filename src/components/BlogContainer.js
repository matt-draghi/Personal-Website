import { useEffect, useState } from "react"
import BlogCard from "./BlogCard"
import FadeIn from "react-fade-in/lib/FadeIn"

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
            <FadeIn>
                <h2>blogs</h2>
                <h3>Check out my thoughts by clicking on a blog below!</h3>
                <span>(More to be posted in the coming weeks)</span>
                <br/>
            {blogArray.map((blog) => {
                return (<BlogCard key={blog.title} blog={blog}/>)
            })}
            </FadeIn>
        </div>
    )
}

export default BlogContainer