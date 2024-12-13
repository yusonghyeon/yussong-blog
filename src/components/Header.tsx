import Link from "next/link";

const LOGO_TITLE = "Yussong";

const ROUTES = [
  { title: "Post", route: "/post" },
  { title: "About", route: "/about" },
];

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4">
      <div className="text-2xl font-bold text-[var(--primary)]">
        <Link href="/">{LOGO_TITLE}</Link>
      </div>

      <nav>
        <ul className="flex space-x-6 text-sm font-medium">
          {ROUTES.map((route) => (
            <li key={route.route}>
              <Link href={route.route}>{route.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
