import Head from 'next/head'

import { Progress } from 'antd';
import Layout, { siteTitle } from '../components/layout'

import utilStyles from '../styles/utils.module.css'
import {Task} from '../components/task/task'
import { getSortedPostsData } from '../lib/posts'
import { getSortedTasksData } from '../lib/tasks'
import Link from 'next/link'
import Date from '../components/date'

const tasks = [{id: 1, title: 'React query', percent: 30},{id: 1, title: 'Next js', percent: 55}]

export default function Home({allPostsData, allTasksData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>

      <ul className={utilStyles.list}>
        {allTasksData.map(({id, date, title, url, percent}) => (
          <li className={utilStyles.listItem} key={id}>
          {title}<a href={url}> link </a> 
          <Progress percent={percent}/>
          ({date})
        </li>
        ))}
         </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href="/posts/[id]" as={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  const allTasksData = getSortedTasksData()
  return {
    props: {
      allPostsData,
      allTasksData
    }
  }
}