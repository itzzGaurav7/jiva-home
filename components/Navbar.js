import React from "react";
import Image from "next/image";
import Link from "next/link";
import images from "../constants/images";
import * as styles from "../styles/Navbar.module.css";
import { HamburgerButton } from "react-hamburger-button";
import { CloudLightning } from "react-feather";
const Navbar = () => {
  const [hidden, setHindden] = React.useState(true);
  return (
    <nav>
      <div className={` ${styles.navContainer}`}>
        {/* logo */}
        <Image src={images.logo} alt="Jiva" height="50em" objectFit="contain" />
        {/* nav-links */}
        <ul
          className={`row ${styles.navLinks} ${
            hidden ? styles.hide : styles.show
          }`}
          onClick={() => {
            setHindden((current) => !current);
          }}
        >
          <div className={`${styles.navMenuButton} ${styles.insideContainer}`}>
            <HamburgerButton
              strokeWidth={3}
              open={!hidden}
              animationDuration={0.5}
              onClick={(e) => {
                e.stopPropagation();
                setHindden((current) => {
                  return !current;
                });
              }}
              color={"white"}
              width={20}
              height={17}
            />
          </div>
          <li
            className={` ${styles.activeNavLink} text-dark-gray ${styles.navLink}`}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Link href="/">Home</Link>
          </li>
          <li className={` text-dark-gray ${styles.navLink}`}>
            <Link href="/">Our Team</Link>
          </li>
          <li className={` text-dark-gray ${styles.navLink}`}>
            <Link href="/">Vision</Link>
          </li>
          <li className={` text-dark-gray ${styles.navLink}`}>
            <Link href="/">JivaBOT</Link>
          </li>
          <li className={` text-dark-gray ${styles.navLink}`}>
            <Link href="/">LOGIN</Link>
          </li>
        </ul>
        <div className={`${styles.navMenuButton}`}>
          <HamburgerButton
            strokeWidth={3}
            open={!hidden}
            animationDuration={0.5}
            onClick={() =>
              setHindden((current) => {
                return !current;
              })
            }
            width={20}
            height={17}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
