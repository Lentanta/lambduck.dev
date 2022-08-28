import styles from "./styles.module.scss";

export const NavigationBar = () => {


	return (
		<nav className={styles.navigation}>
			<div className={styles.pageName}>
					<a>Lentanta</a>
			</div>

			<ul className={styles.linkGroup}>
				<li>
					<a className={styles.link}>My website</a>
				</li>
				{/* <li>
					<a className={styles.link}>BLOG</a>
				</li> */}
			</ul>

		</nav>
	)
} 