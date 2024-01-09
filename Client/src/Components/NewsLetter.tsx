import "../Styles/NewsLetter.css";
const NewsLetter = () => {
  return (
    <div className="news-letter">
      <div className="news-box">
        <h2 className="fw-bold">Newsletter</h2>
        <form className="subscribe-form">
          <input placeholder="your@gmail.com" className="subscribe-input" />
          <button className="subscribe-buttton">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
