import style from "~/styles/index.css";

export const links = () => [{ rel: "stylesheet", href: style }];

export default function Index() {
  return (<div className="notif">
    <div className="alertContainer">
      <h1 className="heading">This page is under construction.</h1>
      <h3 className="heading">You can watch progresss <a href="https://github.com/RedDaedalus/daedalus-to">here</a>.</h3>
    </div>
  </div>)
}