import NewsPost from "../../elements/NewsPost";

// assets
import "../../assets/styles/containers/news.scss";

const posts = Array(3).fill(null);

function News() {
  return (
    <section className="news-container">
      <h2 className="news-title">News</h2>
      {posts.map((_, index) => {
        return <NewsPost index={index} />;
      })}
    </section>
  );
}

export default News;
