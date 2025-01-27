import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";
export default function Header() {
  let reactDescription = ["Core", "Important", "Fundamental"];
  function genRandomInt(max) {
    return Math.trunc(Math.random() * max);
  }
  let description = reactDescription[genRandomInt(reactDescription.length)];

  return (
    <>
      <header>
        <img src={reactImg} />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    </>
  );
}
