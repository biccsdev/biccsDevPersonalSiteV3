

function BlogComponent({ blog }) {
    return (
        <div>
            <h1>{blog.title}</h1>
            <p>Author: {blog.author}</p>
            <p>{blog.content}</p>
        </div>
    );
}

export default BlogComponent;
