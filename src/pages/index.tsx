import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader(): React.ReactElement {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero shadow--lw image-header', styles.heroBanner)}>
      <div className="container">
        <div className="title-image">
          <img src="https://yt3.ggpht.com/TayLJ8_j1ySXpi9prZy_L73PAKb02i2wq4RkQWxfTy87AtT8x18wGF6h2VZskH41yI7I6TYopQ=s600-c-k-c0x00ffffff-no-rj-rp-mo" alt='Kerja Programmer Logo' />
        </div>
        <div className="container title-wrapper">
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--primary button--md"
              to="https://www.youtube.com/@kerjaprogrammer">
              Go To My Channel
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): React.ReactElement {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
    </Layout>
  );
}
