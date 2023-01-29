import Link from "next/link";
import { useRouter } from "next/router";
import _JSXStyle from "styled-jsx/style";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <Link href="/" className={router.pathname === "/" ? "active" : undefined}>
        Home
      </Link>
      <Link
        href="/about"
        className={router.pathname === "/about" ? "active" : undefined}
      >
        About
      </Link>
      <_JSXStyle>{`
        nav {
          background-color: tomato;
        }

        a {
          text-decoration: none;
        }

        .active {
          color: yellow;
        }

        .link {
          color: blue;
        }
      `}</_JSXStyle>
    </nav>
  );
}
