import style from "~/styles/index.css";

export const links = () => [{ rel: "stylesheet", href: style }];

export default function Index() {
  return (<div className="flex content-center justify-center h-screen flex-col gap-5">
    <p className="text-center text-3xl">
      <span className="text-bold">Daedalus</span><span className="text-thin text-slate-300">#0001</span>
    </p>

    <div className="w-screen flex content-center justify-center">
      <img src="/avatar.svg" className="my-auto bg-dark rounded-full transition duration-300 border-white hover:border-rose-500 border-4 w-48" />
    </div>

    <div className="text-center text-xl flex gap-2 justify-center">
      <a className="fa fa-github transition duration-200 hover:text-rose-400" href="https://github.com/RedDaedalus" target="blank"></a>
      <a className="fa fa-twitter transition duration-200 hover:text-rose-400" href="https://github.com/red_daedalus" target="blank"></a>
    </div>
  </div>);
}