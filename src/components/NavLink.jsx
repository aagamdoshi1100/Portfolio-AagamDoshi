import Link from "next/link";

function NavLink({ href, text }) {
  return (
    <Link
      href={href}
      className="text-[var(--lightgray)] hover:text-white block text-base pl-8 py-2"
    >
      {text}
    </Link>
  );
}

export default NavLink;
