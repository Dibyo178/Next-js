import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title> Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div className={styles.title}>
        <h1>HomePage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe eum
          vero, natus nostrum ipsum consectetur soluta distinctio velit iste
          exercitationem fuga ab totam unde dolore veniam molestiae, eius beatae
          enim optio deserunt facilis culpa architecto voluptas? Quia doloribus
          nobis accusantium.
        </p>

        <Link href="/ninja">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
