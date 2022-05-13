import SEO from '../components/SEO';
import styles from '../styles/home.module.scss';

export default function Home() {
  return (
    <>
      <SEO title="Dev News!" excludeTitleSuffix />
      <main className={styles.content}>
        <section className={styles.section}>
          <span>Olá Dev!</span>
          <h1>
            Bem-vindo e bem-vinda <br />
            ao <span>Dev</span>News!
          </h1>
          <p>
            Um blog com conteúdos extremamente <br />
            <span>relevantes para o seu aprendizado.</span>
          </p>
        </section>
        <img
          src="https://raw.githubusercontent.com/aluiziodeveloper/devnews/6c2278391a14126d65661342b0f996cf748cee5c/public/home.svg"
          alt="Home image"
        />
      </main>
    </>
  );
}
