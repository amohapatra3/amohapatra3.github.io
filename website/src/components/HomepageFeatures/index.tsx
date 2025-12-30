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
    title: 'Equal parts technical, equal parts writer',
    Svg: require('@site/static/img/toolbox-svgrepo-com.svg').default,
    description: (
      <>
        As a result of majoring in both computer science and journalism at the University of Wisconsin-Madison, I possess a unique toolbox of skills that set me up for success as a technical writer.  My computer science background helps me learn and test new technologies hands on, while my journalism background helps me investigate design docs and probe Subject Matter Experts (SMEs) for product information. This skillset also helps with learning different tools and industry standards for developing content. For more information, see <strong><a href='/about#academic-journey'>Academic journey</a></strong>.
      </>
    ),
  },
  {
    title: 'Experienced in the cloud, open to more',
    Svg: require('@site/static/img/cloud-computing-transfer-svgrepo-com.svg').default,
    description: (
      <>
        I have experience writing documentation for developers in the cloud computing space at Amazon Web Services (AWS) for products such as Amazon Elastic Container Service (ECS) and AWS Cloud Map. I also have extensive experience as a student journalist, with my writing ranging from introspective editorials and reviews to satire and poetry. My experience and academic background equips me to create technical content for the cloud but also to dive deeper into other technical domains such as game development, FinTech, AI/ML, and semiconductors. For more information, see <strong><a href="/docs/about#professional-journey">Professional journey</a></strong> and <strong><a href='/about#skills'>Skills</a></strong>.
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
