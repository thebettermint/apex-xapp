import React from 'react'
import styles from './index.module.scss'

import Header from '../Header'
import Footer from '../Footer'

interface Props {
  children?: React.ReactNode
  header:Boolean
  footer:Boolean
}

const Page = ({header, footer, children}:Props) =>  {
    return (
      <div className={styles.page}>
        {header ? <Header/>  : null}
          {children}
        {footer ? <Footer/> : null}
      </div>
    )
}

export default Page
