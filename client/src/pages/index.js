import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "./Header";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nft Factory</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          {/* Navbar */}
          <Header />

          <section className={styles.section}>
            <div className={styles.left_section}>
              <h1>Your Best Value Proposition</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum at
                cupiditate inventore veritatis. Impedit nemo porro eos similique
                molestiae vel saepe corporis, sit dolor facere? Expedita vero
                totam vel nisi?
              </p>
              <div>
                <button
                  className={styles.home_btn}
                  style={{ width: "240px", height: "60px" }}
                >
                  Get Started
                </button>
                <img src="/images/wallet.svg" alt="" />
              </div>
            </div>
            <div className={styles.right_section}>
              <img src="/images/Group.svg" alt="" />
            </div>
          </section>

          <div className={styles.faq}>
            <h3>FAQ</h3>
            <div>
              <p>What is NFT Factory?</p>
              <img src="/images/faq_icon.svg" alt="" />
            </div>
            <div>
              <p>What is NFT Factory?</p>
              <img src="/images/faq_icon.svg" alt="" />
            </div>
            <div>
              <p>What is NFT Factory?</p>
              <img src="/images/faq_icon.svg" alt="" />
            </div>
            <div>
              <p>What is NFT Factory?</p>
              <img src="/images/faq_icon.svg" alt="" />
            </div>
            <div>
              <p>What is NFT Factory?</p>
              <img src="/images/faq_icon.svg" alt="" />
            </div>
          </div>

          {/* footer */}
          <Footer />
        </div>
      </main>
    </>
  );
}
