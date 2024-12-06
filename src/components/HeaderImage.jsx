import React from "react";

const HeaderImage = ({ headerImage, setHeaderImage }) => {
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setHeaderImage(imageUrl);
    }
  };

  return (
    <div className="header-image">
      <input type="file" onChange={handleImageUpload} />
      {headerImage && <img src={headerImage} alt="Header" />}
    </div>
  );
};

export default HeaderImage;
