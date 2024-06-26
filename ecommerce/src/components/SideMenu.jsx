import HeaderNav from "./Headernav.jsx";
import Close from "../assests/images//icon-close.svg";

function SideMenu({ openStatus, setStatus }) {
  return (
    <>
      <div
        className="fixed z-10 bg-gray-400 h-full w-full top-0 opacity-40"
        onClick={() => setStatus(false)}
        style={{ transform: `translateX(${openStatus ? 0 : -100}%)` }}
      ></div>
      <aside
        className="fixed  h-screen bg-white left-0 top-0 z-40 w-3/4 md:w-1/4 p-8 transition-transform duration-300 ease-in-out translate-x-96"
        style={{ transform: `translateX(${openStatus ? 0 : -100}%)` }}
      >
        <div onClick={() => setStatus(false)}>
          <img src={Close} alt="Close nav" />
        </div>
        <section>
          <ul className="font-bold text-xl mt-12 flex flex-col gap-5">
            <HeaderNav Link="#" name="Collection" />
            <HeaderNav Link="#" name="Men" />
            <HeaderNav Link="#" name="Women" />
            <HeaderNav Link="#" name="About" />
            <HeaderNav Link="#" name="Contact" />{" "}
          </ul>
        </section>
      </aside>
    </>
  );
}
export default SideMenu;
