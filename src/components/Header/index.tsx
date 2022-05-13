import styles from './styles.module.scss';
import { ActiveLink } from '../ActiveLink';

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <img
          src="https://raw.githubusercontent.com/aluiziodeveloper/devnews/6c2278391a14126d65661342b0f996cf748cee5c/public/logo.svg"
          alt="DevNews"
        />
        <nav>
          <ActiveLink href="/" activeClassName={styles.active}>
            <a>Home</a>
          </ActiveLink>
          <ActiveLink href="/posts" activeClassName={styles.active}>
            <a>Posts</a>
          </ActiveLink>
        </nav>
      </div>
    </header>
  );
}
