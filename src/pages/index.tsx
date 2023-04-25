import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import BannerImage from '@site/static/img/expressoTS-Banner.png';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title"><img height="180px" width="auto" src={BannerImage} alt="Expresso TS Banner" /></h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.btnContainer}>
        <div>
          <Link
            className={clsx("button button--secondary button--lg", styles.button)}
            to="/docs/intro">
            Documentation
          </Link>
        </div>
        <div >
          <Link
            className={clsx("button button--secondary button--lg", styles.button)}
            to="https://github.com/expressots/expressots">
            Source code
          </Link>
        </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
