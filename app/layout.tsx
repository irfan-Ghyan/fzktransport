import React, { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../app/components/header/Header';
import Footer from './components/footer/Footer';


const inter = Inter({ subsets: ['latin'] });


interface RootLayoutProps {
  children: ReactNode;
}

// ES5 function

export default function RootLayout({ children }: RootLayoutProps) {


  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}



