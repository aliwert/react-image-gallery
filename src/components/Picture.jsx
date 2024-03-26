import PictureStyle from "./Picture.module.css"


const Picture = ({ data }) => {
    return (
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {data.map((item) => (
          <div className={PictureStyle.pictures} style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "10px" }}>
            <p>{item.photographer}</p>
            <img width="200px" height="250px" src={item.src.large} alt="" />
          </div>
        ))}
      </div>
    );
  };
  
  export default Picture;
  