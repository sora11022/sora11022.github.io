import React from "react";

const Item = ({ title, des, link }) => {
  return (
    <div >
      {title} - {des}
      <img src={link} alt="" />
    </div>
  );
};

export default Item;
