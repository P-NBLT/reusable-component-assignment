import React from "react";
import Button from "../Button/Button";
// import Button from "../Button/Button";
import styles from "./Title.module.css";
// import { Tag } from "../../Data/dataBase";
import fetchEntries from "../../util/contentfulPosts";
import Post from "../../component/Post";

const Title = ({ text, classN, button, posts }) => {
  console.log(posts);
  return (
    <div className={styles[classN]}>
      <h1>{text.title}</h1>
      <p>{text.info}</p>
      {button}
    </div>
    // <div>
    /* {posts.map((post, idx) => {
        return <Post key={idx} title={post.title} text={post.text} />;
      })} */
    // </div>
  );
};

export default Title;
