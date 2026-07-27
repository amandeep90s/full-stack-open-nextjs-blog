import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className="text-emerald-500 py-3 px-4 rounded hover:text-black hover:bg-white hover:bg-opacity-10"
    >
      {children}
    </Link>
  );
};

export default NavLink;
