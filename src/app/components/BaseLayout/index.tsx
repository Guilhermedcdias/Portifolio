'use client'

import { useEffect } from "react";
import Footer from "../footer";
import Navbar from "../navbar";
import styles from "./page.module.scss";
import Hotjar from '@hotjar/browser';

export default function BaseLayout({
    children,
}: {
    children: React.ReactNode
}) {

    useEffect(() => {

        const siteId = 3747665;
        const hotjarVersion = 6;

        Hotjar.init(siteId, hotjarVersion);
    }, [])

    return (
        <div className={styles.base}>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}