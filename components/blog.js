

function BlogComponent({ blog }) {
    return (
        <div>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
            <p>Author: {blog.author}</p>
        </div>
    );
}

export default BlogComponent;
