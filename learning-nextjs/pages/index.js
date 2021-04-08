import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage!</h1>
      <p className={styles.text}>
        Aliqua labore labore aliqua id dolor ipsum et duis do do ea consectetur
        minim. Magna ullamco nulla reprehenderit aliqua veniam id. Sit excepteur
        aliquip laborum est irure minim pariatur ad qui dolor. Aliquip voluptate
        magna proident voluptate elit eiusmod sit eiusmod.
      </p>
      <Link href="/users">
        <a className={styles.btn}> See users</a>
      </Link>
    </div>
  );
}
