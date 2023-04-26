import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import {translate} from '@docusaurus/Translate';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: translate({message: "featuresEasyToUse"}),
    Svg: require('@site/static/img/undraw_dev_focus_re_6iwt.svg').default,
    description: (
      <>
        {translate({message: "featuresEasyToUseDesc"})}
      </>
    ),
  },
  {
    title: translate({message: "featuresFocusOnWhatMatters"}),
    Svg: require('@site/static/img/undraw_product_teardown_re_m1pc.svg').default,
    description: (
      <>
        {translate({message: "featuresFocusOnWhatMattersDesc"})}
      </>
    ),
  },
  {
    title: translate({message: "featuresExtensible"}),
    Svg: require('@site/static/img/undraw_building_blocks_re_5ahy.svg').default,
    description: (
      <>
        {translate({message: "featuresExtensibleDesc"})}
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
