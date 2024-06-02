import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Pengembangan native untuk semuanya',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        React Native memungkinkan Anda membuat aplikasi yang benar-benar asli
        dan tidak mengganggu pengalaman pengguna. Ini menyediakan serangkaian
        inti komponen asli platform agnostik seperti <code>Tampilan</code>,
        <code>Teks</code>, dan <code>Gambar</code> yang dipetakan langsung
        ke blok penyusun UI native platform.
      </>
    ),
  },
  {
    title: 'Ditulis dalam JavaScript—dirender dengan kode native',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        React primitif dirender ke UI platform native, artinya aplikasi
        Anda menggunakan API platform asli yang sama dengan yang digunakan
        aplikasi lain.
      </>
    ),
  },
  {
    title: 'Buat aplikasi native untuk Android, iOS, dan lainnya menggunakan React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        React Native menggabungkan bagian terbaik dari pengembangan native
        dengan React, perpustakaan JavaScript terbaik di kelasnya untuk
        membangun antarmuka pengguna.
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
        <Heading as="h3">{title}</Heading>
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
