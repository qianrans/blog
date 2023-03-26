import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './index.module.css'
import HomepageFeatures from '../components/HomepageFeatures'
import Head from '@docusaurus/Head'
import HeroImg from '../../static/img/Hero.jpg'

const svgList = [
  /*
  {
    title: 'github',
    Svg: require('../../static/img/github.svg').default,
    color: 'black',
    link: 'https://github.com/qianrans/blog',
  },
  {
    title: 'bilibili',
    Svg: require('../../static/img/bilibili.svg').default,
    color: 'black',
    link: 'https://github.com/qianrans/blog',
  },
  {
    title: '掘金',
    Svg: require('../../static/img/juejin.svg').default,
    color: 'black',
    link: 'https://github.com/qianrans/blog',
  },
  {
    title: 'wechat',
    Svg: require('../../static/img/wechat.svg').default,
    color: 'black',
    link: 'https://github.com/qianrans/blog',
  }*/
]
const Svg = ({ Svg, color, title, link }) => {
  return (
    <a href={link} target='_blank'>
      <Svg className={styles.svg} style={{ fill: color }} />
    </a>
  )
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className='container'>
        <h1 className='hero__title'>{siteConfig.title}</h1>
        <p className='hero__subtitle'>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className='button button--secondary button--lg' to='/docs/intro'>
            🖱Click Here!
          </Link>
        </div>
      </div>
    </header>
  )
}

function MyHero() {
  return (
    <div className={styles.myHeroContainer}>
      <div className={styles.leftContainer}>
        <h1 className={styles.leftContainer_h1}>
          light up <br /> &nbsp;&nbsp;&nbsp;&nbsp;one's life.
        </h1>
        <p className={styles.leftContainer_p}>
          hello,我是Rans
          <br />
          我将在这里记录知识，希望对你有帮助。

        </p>
        <div className={styles.buttonContainer}>
          { }
          <div className={styles.svgContainer}>
            {svgList.map((item, index) => {
              return <Svg {...item} key={item.title} />
            })}
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <img src={HeroImg} alt='HeroImg' />
      </div>
    </div>
  )
}
export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
    // title={`${siteConfig.title}`}
    >
      {/* <HomepageHeader /> */}

      <main>
        <MyHero />
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  )
}
