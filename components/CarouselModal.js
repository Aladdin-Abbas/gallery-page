import Image from "next/image";
import classes from "./CarouselModal.module.css";

const CarouselModal = ({
  clickedImg,
  onNextClick,
  onPreviousClick,
  setShow,
  imgData,
}) => {
  return (
    <>
      <div
        className={classes.backdrop}
        onClick={() => setShow(prevState => !prevState)}
      ></div>

      <div className={classes["modalImgWrapper"]}>
        <Image
          layout="fill"
          objectFit="cover"
          src={clickedImg?.url}
          alt={clickedImg?.name}
        />
        <span className={classes["img-name"]}>{clickedImg?.name}</span>
        <span className={classes["img-number"]}>
          {`image ${clickedImg?.index + 1}/${imgData.length}`}
        </span>
      </div>

      <p className={classes["prev"]} onClick={onPreviousClick}>
        &lt;
      </p>
      <p className={classes["next"]} onClick={onNextClick}>
        &gt;
      </p>
    </>
  );
};

export default CarouselModal;
