import Image from "next/image";
import classes from "./ImageGrid.module.css";

const ImageGrid = ({ imgData, onImageClick }) => {
  return (
    <div className={classes["grid-container"]}>
      {imgData.map((el, index) => (
        <div
          className={classes["img-wrapper"]}
          key={el.uuid}
          onClick={() => onImageClick(el, index)}
        >
          <Image layout="fill" objectFit="cover" src={el.url} alt={el.name} />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
