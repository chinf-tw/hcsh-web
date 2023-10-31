"use client"; // This is a client component 👈🏽

import React, { useRef, useEffect, useState, RefObject } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import Nav from './nav'
import CSS from 'csstype';

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }: { children: React.ReactNode }) {
	const [height, setHeight] = useState(0);
	const elementRef: RefObject<HTMLDivElement> = useRef(null);
	useEffect(() => {
		setHeight(elementRef.current?.offsetHeight || 0);
	}, []);
	return (
		<html lang="en">
			<body>
				<Nav ref={elementRef} />
				<main>
					<div className="mx-auto max-w-screen-2xl py-6 sm:px-6 lg:px-8" style={{ paddingTop: height + 20 }}>
						{children}
					</div>
				</main>
			</body>
		</html>
	);
}
