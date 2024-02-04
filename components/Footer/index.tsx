import packageInfo from "../../package.json";
import "./style.css";

export const Footer = () => {

  return (
    <footer className="bg-color-dark">
      <div className="py-7">
        <p className="text-center text-color-light">
          Made by me
        </p>
        <p className="text-center text-sm text-color-light">
          [version: {packageInfo.version}]
        </p>
      </div>
    </footer>
  )
}
