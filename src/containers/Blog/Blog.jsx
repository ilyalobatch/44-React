// components
import BlogPost from "../../elements/BlogPost";

// assets
import "../../assets/styles/containers/blog.scss";

const posts = Array(4).fill(null);

function Blog() {
  return (
    <section className="blog-container">
      <h2 className="blog-title">Blog</h2>
      {posts.map((_, index) => {
        return <BlogPost index={index} />;
      })}
    </section>
  );
}

export default Blog;
