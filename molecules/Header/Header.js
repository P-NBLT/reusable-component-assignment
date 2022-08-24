import React from "react";
import Title from "../../atoms/Title/Title";

const Header = ({ text, classN, button }) => {
  return (
    <div>
      <Title
        classN={classN}
        text={{ title: text.title, info: text.info }}
        button={button}
      ></Title>
    </div>
  );
};

export default Header;
