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
      link: pricingLinks.packageIntel ?? '#',
    },
    {
      title: 'Binary Analysis',
      subtitle: 'Advanced static & dynamic analysis',
      price: '$99/mo',
      features: [
        'Function signature detection',
        'Security vulnerability scan',
        'Binary similarity search',
      ],
      cta: 'Start Analyzing',
      link: pricingLinks.binaryAnalysis ?? '#',
    },
    {
      title: 'Full Platform',
      subtitle: 'Everything we offer, unlimited',
      price: '$249/mo',
      features: [
        'All Package & Binary features',
        'Team collaboration',
        'Priority support',
      ],
      cta: 'Go Full Platform',
      link: pricingLinks.fullPlatform ?? '#',
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
