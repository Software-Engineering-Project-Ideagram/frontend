import React from "react";
import classes from "./UploadedFile.module.scss";
import pdfFile from "../../images/pdfFile.png";
import jpgFile from "../../images/jpgFile.png";
import pptxFile from "../../images/pptxFile.png";
import docFile from "../../images/docFile.png";
import deleteFile from "../../images/delete.png";

const UploadedFile = ({ type, fileName }) => {
  return (
    <div className={classes.container}>
      <div className={classes.delete}>
        <button>
          <img src={deleteFile} alt="delete_file" />
          Delete
        </button>
      </div>
      <div className={classes.uploadedFile}>
        {
          {
            pdf: <img src={pdfFile} alt="pdfFile" />,
            jpg: <img src={jpgFile} alt="jpgFile" />,
            gif: <img src={jpgFile} alt="jpgFile" />,
            jpeg: <img src={jpgFile} alt="jpgFile" />,
            png: <img src={jpgFile} alt="jpgFile" />,
            svg: <img src={jpgFile} alt="jpgFile" />,
            pptx: <img src={pptxFile} alt="pptxFile" />,
            doc: <img src={docFile} alt="docFile" />,
          }[type]
        }
        <h3>{fileName}</h3>
      </div>
    </div>
  );
};

export default UploadedFile;
