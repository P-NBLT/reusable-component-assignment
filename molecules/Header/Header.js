import React from "react";
import Title from "../../atoms/Title/Title";
import fetchEntries from "../../util/contentfulPosts";
import Post from "../../component/Post";

const Header = ({ text, classN, button }) => {
  return (
    <div>
      <Title
        classN={classN}
        text={text}
        button={button}
        // posts={posts}
      ></Title>
    </div>
  );
};

export default Header;
