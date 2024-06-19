import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          <code className={styles.code}>
            .eyebrowOne &#10100; color: #000 &#10101;
            <br/>
            .eyebrowTwo &#10100; color: #fff &#10101;
          </code>
        </p>
        <div>
          <a href="/">
            <Image
              src="/WhiteEyebrow-Final.svg"
              alt="White Eyebrow Logo"
              width={100}
              height={100}
              priority
            />
          </a>
        </div>
      </div>
      <div className={styles.about}>
        <div>
          <h1>White Eyebrow LLC</h1>
          <p>Custom Software  &amp; Technology Consulting</p>
        </div>
      </div>
      
      <div className={styles.grid}>
        <div className={styles.grid50}>
          <h2>Pay an Invoice</h2>
          <p>Enter your invoice number to be redirected to Stripe for payment.</p>
          <div className={styles.inputWithButton}>
            <input className={styles.input}/>
            <a className={[styles.btn, styles.gradient].join(" ")}>
              <span className="material-icons mi-payment"></span>
            </a>
          </div>
        </div>
        <div className={[styles.grid50, styles.gridRight].join(" ")}>
          <a href="mailto:kshaupty@gmail.com" target="_blank" className={[styles.btn, styles.gradient].join(" ")}>
            <div className={styles.flex}>
              <span className="material-icons mi-email mi-2x"></span>&nbsp;&nbsp;Email Me
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}
