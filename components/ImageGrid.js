import Image from "next/image";
import classes from "./ImageGrid.module.css";

const ImageGrid = ({ imgData }) => {
  return (
    <div className={classes["grid-container"]}>
      {imgData.map(el => (
        <div className={classes["img-wrapper"]} key={el.uuid}>
          <Image layout="fill" objectFit="cover" src={el.url} alt={el.name} />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
