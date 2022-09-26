import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ștefan m.</title>
        <meta name="description" content="just another webdesigner." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className={styles.stefanMain}>
        <div className={styles.stefanMenu}>
        <div className={styles.stefanLogo}>
          <a>stefan</a>
        </div>
          <ul className={styles.stefanSocials}>
            <li>
              <a href="https://github.com/sharoskyy" className="github">github</a>
              <a href="https://discord.com/users/413326085065801729" className="discord">discord</a>
              <a href="https://steamcommunity.com/id/stef4nutz" className="steam">steam</a>
              <a href="https://open.spotify.com/user/y8guwub3gz3gutzez151d6p8m?si=66692d46a3b243e4" className="spotify">spotify</a>
            </li>
          </ul>
        </div>

      <div className={styles.stefanAnno}>
        <p>Every order can be made through my discord or steam. <br /> If it has a selling tag on it, it's for sale.</p>
      </div>
      </div>

      <div className={styles.stefanWorks}>
        <div className={styles.stefanWork}>
          <Link href="/ak47"><img src="/holder/ak47.png" /></Link>
        </div>
        <div className={styles.stefanWork}>
        <Link href="/icebox"><img src="/holder/icebox.png" /></Link>
        </div>
        <div className={styles.stefanWork}>
        <Link href="/leaks"><img src="/holder/leaks.png" /></Link>
        </div>
        <div className={styles.stefanWork}>
        <Link href="/treed"><img src="/holder/treed.png" /></Link>
        </div>
        <div className={styles.stefanWork}>
        <Link href="/rockstar"><img src="/holder/rockstar.png" /></Link>
        </div>
        <div className={styles.stefanWork}>
        <Link href="/bhood"><img src="/holder/bhood.png" /></Link>
        </div>
      </div>
    </div>
  )
}
