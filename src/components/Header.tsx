import Link from "next/link";
import Styles from "@/styles/Header.module.css";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session, status } = useSession();

  if (!session) return <p>Inte inloggad</p>;

  return (
    <header className={Styles.header}>
      <h1 style={{ marginBottom: "0.5rem" }}>Project Manager 3.0</h1>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link href="/" className={Styles.navLink}>
          Hem
        </Link>
        <Link href="/my-projects" className={Styles.navLink}>
          Mina projekt
        </Link>
        <Link href="/projects" className={Styles.navLink}>
          Projekt
        </Link>
        {session.user?.role === "ADMIN" && (
          <Link href="/users" className={Styles.navLink}>
            Användare
          </Link>
        )}
      </nav>
      <button onClick={() => signOut({ callbackUrl: "/login" })}>
        Logga ut
      </button>
      <p>
        Inloggad som: {session.user?.name} som har rollen {session.user?.role}
      </p>
    </header>
  );
};

export default Header;
