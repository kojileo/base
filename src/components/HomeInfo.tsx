import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

// Propsの型を定義
interface HomeInfoProps {
  currentStage: number;
}

const HomeInfo: React.FC<HomeInfoProps> = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        こんにちは,
        <span className="font-semibold mx-2 text-white">小島 怜央</span>
        です！
        <br />
        Web、Cloud、AIをそれぞれクリックしてね～
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Web開発について学んだ知識一覧
        </p>

        <Link to="/web" className="neo-brutalism-white neo-btn">
          Visit
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className="info-box">
        <p className="font-medium text-center sm:text-xl">
          cloudについて学んだ知識一覧
        </p>

        <Link to="/cloud" className="neo-brutalism-white neo-btn">
          Visit
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          様々AI会話することができます
        </p>

        <a
          href="http://localhost:8082/"
          className="neo-brutalism-white neo-btn"
          target="_blank"
        >
          Let's talk
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </a>
      </div>
    );
  }

  return null;
};
export default HomeInfo;
