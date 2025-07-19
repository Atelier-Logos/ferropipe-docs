import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Effortless SCA/SAST',
    Svg: require('@site/static/img/campfire.svg').default,
    description: (
      <>
        Our API is designed to be simple and easy to use, allowing you to
        quickly integrate SCA/SAST capabilities into your applications and pipelines.
      </>
    ),
  },
  {
    title: 'Powered by Rust',
    Svg: require('@site/static/img/laptop.svg').default,
    description: (
      <>
        Built with Rust, our API is fast, reliable, and secure, ensuring that you
        can trust it to handle your software composition analysis and static application security testing needs.
      </>
    ),
  },
  {
    title: 'Multiple Binary Formats',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Supports various binary formats, including ELF, Mach-O, and even Wasm, making it versatile for different platforms and ecosystems.
        This flexibility allows you to analyze a wide range of applications seamlessly.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
