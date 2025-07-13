import { getSession } from "next-auth/react";

export default function Home() {
  return (
    <div>
      <h2>Välkommen!</h2>
      <p>Du är inloggad 🎉</p>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {}, // du kan skicka med `session` här om du vill
  };
}
