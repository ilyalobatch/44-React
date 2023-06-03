// assets
import "../../assets/styles/elements/blogPost.scss";

function BlogPost({ index }) {
  return (
    <div className="blogpost-container">
      <h3 className="blogpost-title">Lorem {index + 1}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        neque delectus tempora ipsum modi aliquid quibusdam nemo omnis
        laboriosam officia vel perferendis quisquam hic ex nihil pariatur, odit
        dolorum quis!
      </p>
    </div>
  );
}

export default BlogPost;
