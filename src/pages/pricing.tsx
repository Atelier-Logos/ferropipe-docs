import React, { JSX } from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './pricing.module.css';

interface Plan {
  title: string;
  subtitle: string;
  price: string;
  features: string[];
  cta: string;
  link: string;
}




function PricingPage(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  const pricingLinks = (siteConfig as any).customFields?.pricingLinks ?? {};

  const plans: Plan[] = [
    {
      title: 'Package Intel',
      subtitle: 'Get insights on individual packages',
      price: '$29/mo',
      features: [
        'Package metadata & SBOM',
        'Latest CVE alerts',
        'License compliance checks',
      ],
      cta: 'Get Package Intel',
      link: 'https://buy.stripe.com/test_cNifZa2bHeOFa7y6wm97G00',
    },
    {
      title: 'SBOM Builder',
      subtitle: 'Build SBOMs from your packages',
      price: '$640/mo',
      features: [
        'Build SBOMs',
        'Security vulnerability scan',
        'Build CycloneDX SBOMs',
      ],
      cta: 'Start Analyzing',
      link: 'https://buy.stripe.com/test_3cIdR24jP5e57ZqcUK97G02',
    },
    {
      title: 'Binary Analysis',
      subtitle: 'Analyze your binaries',
      price: '$2600/mo',
      features: [
        'Multiple binary formats',
        'Secret scanning',
        'Dependencies insights',
      ],
      cta: 'Secure your binaries',
      link: 'https://buy.stripe.com/test_7sY5kwaId7md6Vm07Y97G01',
    },
  ];
  return (
    <Layout title="Pricing">
      <div className={styles.pageContainer}>
        <h1 className={styles.heading}>Choose Your Plan</h1>
        <div className={styles.cardGrid}>
          {plans.map((plan) => (
            <div key={plan.title} className={styles.card}>
              <div className={styles.cardTitle}>{plan.title}</div>
              <div className={styles.cardSubtitle}>{plan.subtitle}</div>
              <div className={styles.price}>{plan.price}</div>
              <ul className={styles.features}>
                {plan.features.map((feat) => (
                  <li key={feat}>{feat}</li>
                ))}
              </ul>
              <a
                className={styles.ctaButton}
                href={plan.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default PricingPage;
