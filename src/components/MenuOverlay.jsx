import NavLink from "./NavLink";

function MenuOverlay({ links }) {
  return (
    <ul className="overlay-menu flex flex-col py-4 items-center">
      <li>
        <NavLink href={"/#about"} text={"About"} />
      </li>
      <li>
        <NavLink href={"/#experience"} text={"Experience"} />
      </li>
      <li>
        <NavLink href={"/projects"} text={"Projects"} />
      </li>
      <li>
        <NavLink href={"/#contact"} text={"Contact"} />
      </li>
    </ul>
  );
}

export default MenuOverlay;
