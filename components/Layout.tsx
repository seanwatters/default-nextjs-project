import React from 'react';
import Head from 'next/head';
import Footer from 'components/Footer';

interface Props {
    children: any[] | any
    title: string
}

const Layout = ({
  children,
  title,
}: Props) => (
  <div className="container">
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="main">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
