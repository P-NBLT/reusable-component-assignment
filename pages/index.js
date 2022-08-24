import { useEffect, useState } from "react";
import Head from "next/head";
import { Tag, Text } from "../Data/dataBase";

import style2 from "../atoms/CountDownCard/CountDownCard.module.css";
import stylePrice from "../atoms/FeeCard/FeeCard.module.css";
import styleText from "../styles/Text.module.css";
import Button from "../atoms/Button/Button";
import CountDownCard from "../atoms/CountDownCard/CountDownCard";
import Coming from "../atoms/Coming/Coming";
import FeeCard from "../atoms/FeeCard/FeeCard";

export default function Home() {
  const [device, setDevice] = useState("desktop");
  let size;

  let screenW;
  let screenH;

  useEffect((e) => {
    screenW = window.innerWidth | document.documentElement.clientWidth;
    screenH = window.innerHeight | document.documentElement.clientHeight;
    // setDevice(screenW);
    console.log(device);
    const handleSize = (e) => {
      screenW = window.innerWidth | document.documentElement.clientWidth;
      screenH = window.innerHeight | document.documentElement.clientHeight;
      if (screenW > 1000) {
        setDevice("desktop");
      } else if (screenW < 1000) {
        setDevice("mobile");
      }
    };
    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Button css={{ color: Tag.color.blue, size: Tag.size.large }}>
        Button 2
      </Button>
      <Button css={{ color: Tag.color.white, size: Tag.size.large }}>
        Button 3
      </Button>
      <Button css={{ color: Tag.color.lightBlue, size: Tag.size.small }}>
        Button 1
      </Button>
      <CountDownCard css={{ color: Tag.color.lightBlue }}>
        <h6 className={style2["num"]}>47</h6>
        <p className={style2["text"]}>days</p>
      </CountDownCard>
      <CountDownCard css={{ color: Tag.color.darkGrey }}>
        <h6 className={style2["num"]}>47</h6>
        <p className={style2["text"]}>days</p>
      </CountDownCard>
      <Coming css={{ color1: "white", color2: "blue" }} />
      <Coming css={{ color1: Tag.color.darkGrey, color2: "blue" }} />
      <FeeCard
        css={["white-background", "text-dark"]}
        background={true}
        test="test"
      >
        <p className={`${stylePrice["name"]} `}>Basic</p>
        <p className={`${stylePrice["price"]} `}>Free</p>
        <p className={`${stylePrice["user"]} `}>Up to 5 users for free</p>
        <p className={`${styleText["info2"]} `}>Basic document collaboration</p>
        <p className={`${styleText["info2"]} `}>2 GB storage</p>
        <p className={`${styleText["info2"]} `}>Great security and support</p>
        <Button
          css={{
            color: Tag.color.lightBlue,
            size: Tag.size.small,
            style: { margin: "16px 0 40px 0" },
          }}
        >
          Button 1
        </Button>
      </FeeCard>
      <FeeCard
        css={["blue-background", "text-light"]}
        background={true}
        test="test"
      >
        <p className={`${stylePrice["name"]} `}>Basic</p>
        <p className={`${stylePrice["price"]} `}>Free</p>
        <p className={`${stylePrice["user"]} `}>Up to 5 users for free</p>
        <p className={`${styleText["info2"]} `}>Basic document collaboration</p>
        <p className={`${styleText["info2"]} `}>2 GB storage</p>
        <p className={`${styleText["info2"]} `}>Great security and support</p>
        <Button
          css={{
            color: Tag.color.lightBlue,
            size: Tag.size.small,
            style: { margin: "16px 0 40px 0" },
          }}
        >
          Button 1
        </Button>
      </FeeCard>
    </div>
  );
}
