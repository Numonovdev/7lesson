import React from "react";

function Images({ title, thumbnailUrl }) {
  return (
    <div className="p-4">
      <img src={thumbnailUrl} alt={title} className="w-full h-w" />
    </div>
  );
}

export default Images;
