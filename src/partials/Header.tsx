import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const lists = [
    {
      goto: "/",
      title: "메뉴",
    },
    {
      goto: "/tm",
      title: "TM_TESTING",
    },
    {
      goto: "/clock",
      title: "시계",
    },
    {
      goto: "/list-check",
      title: "설문",
    },
    {
      goto: "/result",
      title: "결과",
    },
    {
      goto: "/shape-check",
      title: "오각형",
    },
  ];
  return (
    <nav style={{ paddingLeft: "20px" }}>
      <ul style={{ padding: "20px 0 7px 0" }} className="clearfix">
        {lists.map((item, index) => {
          return (
            <li style={{ float: "left" }} key={index}>
              <Link
                style={{ fontSize: "16px", paddingRight: "30px" }}
                to={item.goto}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Header;
