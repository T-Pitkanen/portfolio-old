'use client';

import styles from './navigation.module.css';

import Link from 'next/link';

import Image from 'next/image';

const Navigation = () => {
    return (
        <div className={styles.navigation} >
            <Link href="/">
                <Image
                    src="/logo/logo.png"
                    alt="Tiia Pitkänen"
                    width={100}
                    height={100}
                />
            </Link>
        </div>
    );
};

export default Navigation;
