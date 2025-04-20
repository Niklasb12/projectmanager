import Link from "next/link";
import Styles from "@/styles/Header.module.css";
import { signOut } from "next-auth/react";

const Header = () => {
  return (
    <header className={Styles.header}>
      <h1 style={{ marginBottom: "0.5rem" }}>Project Manager 3.0</h1>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link href="/" className={Styles.navLink}>
          Hem
        </Link>
      </nav>
      <button onClick={() => signOut({ callbackUrl: "/login" })}>
        Logga ut
      </button>
    </header>
  );
};

export default Header;
