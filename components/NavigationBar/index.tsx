import { useState } from "react";
import Link from 'next/link'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { color } from "@styles/style-constant";

import styles from "./styles.module.scss";

export const NavigationBar = (props: any) => {
	const { pageName } = props;
	const [show, setShow] = useState(false);

	return (
		<nav>
			<div className={styles.navigationBar}>
				<div className={styles.leftSection}>
					<div className={styles.pageLogo}>
						<Link href="/">
							<a>Lentanta</a>
						</Link>
					</div>
					{pageName && (
						<div className={styles.pageName}>
							[{pageName} ]
						</div>
					)}
				</div>

				<div style={{ margin: "auto 10px" }}>
					<button onClick={() => setShow((prevState) => !prevState)}>
						<FontAwesomeIcon icon={faBars} color={color.lightGray} size="lg" />
					</button>
				</div>
			</div>

			{show && (
				<div>
					<div className={styles.linkGroup}>
						<a href="/">
							<div className={styles.linkItem}>
								About me
							</div>
						</a>
						<a href="/useful-websites">
							<div className={styles.linkItem}>
								Useful websites
							</div>
						</a>
					</div>
				</div>
			)}
		</nav>
	)
} 