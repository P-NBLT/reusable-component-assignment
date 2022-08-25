function Post({ text, title }) {
  return (
    <div className="post">
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
}

export default Post;
