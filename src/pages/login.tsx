import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Styles from "@/styles/Login.module.css";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Fel e-post eller lösenord.");
    } else {
      router.push("/");
    }
  };

  return (
    <div className={Styles.loginContainer}>
      <form onSubmit={handleSubmit} className={Styles.loginForm}>
        <h2>Logga in</h2>
        <label>
          E-post:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="E-postadress"
          />
        </label>
        <label>
          Lösenord:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Lösenord"
          />
        </label>
        <button type="submit">Logga in</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}
