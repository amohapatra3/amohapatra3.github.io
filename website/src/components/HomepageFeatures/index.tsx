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
    title: 'Academic background',
    Svg: require('@site/static/img/education-svgrepo-com.svg').default,
    description: (
      <>
        I majored in both computer science and journalism at the University of Wisconsin-Madison. My computer science background helps me learn and test new technologies hands on, while my journalism background helps me investigate design docs and probe Subject Matter Experts (SMEs) for product information. This background also helps with learning different tools and industry standards for writing documentation. For more information, see <strong><a href='/docs/about#academic-journey'>Academic journey</a></strong>.
      </>
    ),
  },
  {
    title: 'Professional experience',
    Svg: require('@site/static/img/cloud-computing-transfer-svgrepo-com.svg').default,
    description: (
      <>
        I have experience writing documentation for developers in the cloud computing space at Amazon Web Services (AWS) for products such as Amazon Elastic Container Service (ECS) and AWS Cloud Map. My professional experience, coupled with my academic background, equip me to explore the cloud further and to break into other technical domains such as game development, FinTech, and semiconductors. For more information, see <strong><a href="/docs/about#professional-journey">Professional journey</a></strong> and <strong><a href='/docs/about#skills'>Skills</a></strong>.
      </>
    ),
  },
  // {
  //   title: 'Powered by React',
  //   Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
  //   description: (
  //     <>
  //       Extend or customize your website layout by reusing React. Docusaurus can
  //       be extended while reusing the same header and footer.
  //     </>
  //   ),
  // },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
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
