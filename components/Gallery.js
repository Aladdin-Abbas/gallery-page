import { useState } from "react";
import ImageGrid from "./ImageGrid";
import CarouselModal from "./CarouselModal";

const Gallery = ({ imgData }) => {
  const [show, setShow] = useState(false);
  const [clickedImg, setClickedImg] = useState();

  const onImageClick = (el, index) => {
    setShow(true);
    el.index = index;
    setClickedImg(el);
  };

  const onNextClick = () => {
    let nextImgEl = imgData[clickedImg.index + 1];
    if (clickedImg.index + 1 === 30) return;
    nextImgEl.index = clickedImg.index + 1;
    setClickedImg(nextImgEl);
  };

  const onPreviousClick = () => {
    let prevImgEl = imgData[clickedImg.index - 1];
    if (clickedImg.index - 1 === -1) return;
    prevImgEl.index = clickedImg.index - 1;
    setClickedImg(prevImgEl);
  };

  return (
    <>
      <ImageGrid imgData={imgData} onImageClick={onImageClick} />
      {show && (
        <CarouselModal
          onNextClick={onNextClick}
          onPreviousClick={onPreviousClick}
          setShow={setShow}
          clickedImg={clickedImg}
          imgData={imgData}
        />
      )}
    </>
  );
};

export default Gallery;
