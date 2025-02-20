import google from "./image/google.png";
import facebook from "./image/facebook.png";
import github from "./image/github.png";
import linkedin from "./image/linkedin.png";

const iconsList = [
  { img: google },
  { img: facebook },
  { img: github },
  { img: linkedin },
];

export default function Icons() {
  return (
    <div className="Icons">
      {iconsList.map((icon) => (
        <Icon key={icon.img} img={icon.img} />
      ))}
    </div>
  );
}
function Icon({ key, img }) {
  return (
    <img
      src={img}
      alt={key}
      width="25"
      height="25"
      style={{
        border: "2px solid black",
        padding: "5px",
        borderRadius: "10px",
        cursor: "pointer",
        marginRight: "10px",
      }}
    />
  );
}
