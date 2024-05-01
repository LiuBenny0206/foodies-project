import Link from "next/link"
import Image from "next/image"

import Logo from "../../assets/logo.png"
import classes from './main-header.module.css'
import MainHeaderBg from "./main-header-bg"
import NavLink from "./nav-link"

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
                            <NavLink href='/meals'>Browes Meals</NavLink>
                        </li>
                        <li>
                            <NavLink href='/community'>Community</NavLink>
                        </li>
                    </ul>
                </nav>
             </header>
        </>

    )
}