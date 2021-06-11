import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home = () => (
  <div className={styles.container}>
    <Head>
      <title>minimize</title>
      <meta name="description" content="minimize website" />
      <link rel="icon" href="/mini_favicon.png" />
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&family=IBM+Plex+Serif:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
        rel="stylesheet"
      />
      {process.env.NODE_ENV === "production" && (
        <script
          defer
          data-domain="minimize.se"
          src="https://plausible.io/js/plausible.js"
        ></script>
      )}
    </Head>
    <main className={styles.main}>
      <h1 className={styles.header}>under_construction</h1>
    </main>
  </div>
);

export default Home;
