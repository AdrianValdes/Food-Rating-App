import React, { useState } from "react";

const Posts = ({ data, user }) => {
  const { title, img, des } = data[0];
  const [starRating, setStarRating] = useState(0);

  return (
    <section>
      <h3>{title}</h3>
      <img src={img} alt={img} />
      <h4>{des}</h4>
      {/*<IoStarSharp />*/}
    </section>
  );
};

export default Posts;
