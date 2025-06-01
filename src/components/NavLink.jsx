import Link from "next/link";

function NavLink({ href, text }) {
  return (
    <Link
      href={href}
      className="text-slate-400 hover:text-white block text-base pl-3 pr-4 py-2"
    >
      {text}
    </Link>
  );
}

export default NavLink;
