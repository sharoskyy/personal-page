import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Project.module.css'

export default function Project() {
    return(
    <>
    <Head>
        <title>Discfusion</title>
        <meta name="description" content="landing page for discfusion" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>

    <div className={styles.stefanMain}>
        <div className={styles.goBack}>
            <Link href="/">go back</Link>
        </div>

        <div className={styles.projectExpand}>
            <div className={styles.projectTitle}>
                <h1>DISCFUSION</h1>
            </div>
            <div className={styles.projectDescription}>
                <p>landing page for discfusion, i don't own the logo rights but the owner allowed me to use it as thumbnail. made in <span class={styles.used}>html/css and js for animations</span></p> 
            </div>
            <div className={styles.projectFull}>
                <img src="../full/discfusion.png"/>
                <img src="../full/discfusion.gif"/>
            </div>
        </div>
    </div>
    </>
    )
}
