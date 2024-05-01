import Link from "next/link"
import Image from "next/image"

import Logo from "../../assets/logo.png"
import classes from './main-header.module.css'
import MainHeaderBg from "./main-header-bg"

export default function MainHeader () {
    return(
        <>
            <MainHeaderBg />
            <header className={classes.header}>
                <Link className={classes.logo} href='/'>
                    <Image className={classes} src={Logo} alt="A logo img" priority/>
                    NextLevel Food
                </Link>
                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <Link href='/meals'>Meals</Link>
                        </li>
                        <li>
                            <Link href='/community'>Community</Link>
                        </li>
                    </ul>
                </nav>
             </header>
        </>

    )
}