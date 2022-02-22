function BlogCard({blog}){

    const {author, categories, content, description, title, thumbnail, link, pubDate} = blog
    
    const blogYear = new Date (pubDate).getFullYear()
    const blogDate = new Date (pubDate).getDate()
    const blogMonth = new Date (pubDate).getMonth() + 1

    const blogRelease = (`${blogMonth}-${blogDate}-${blogYear}`)
    
    return (
        <a href={link} target="_blank" className="blog-link">
            <div className="blog-card">
                <img 
                className="blog-thumbnail"
                src={thumbnail}
                alt="thumbnail"
                />
                <div className="blog-contents">
                    <div className="blog-header">
                        <h3>{title}</h3>
                        <p> by: {author}</p>
                        <p className="blog-date">Published: {blogRelease}</p>
                    </div>
                    <div className="blog-description">
                        <p>{description.substring(4, 250)}...</p>
                        {categories.map((category)=>{
                            return(
                                <span style={{overflow:"hidden"}}>#{category} </span>
                        )})}
                    </div>
                </div>
            </div>
        </a>
    )
}

export default BlogCard