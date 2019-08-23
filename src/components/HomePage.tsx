import * as R from 'ramda'
import React from 'react'
import getTeamArticlesDescription from '../utils/team-articles'
import Button from './Button'

class HomePage extends React.Component {
  firstToUpper = (text: string): string => {
    const str = text.toString()
    const capitalizedStr = str[0].toUpperCase() + str.slice(1)

    return capitalizedStr
  }

  add = (...args: number[]): any => R.add(args[0], args[1])

  render() {
    const buttonText = this.firstToUpper('hello world')

    return (
      <main>
        <pre>{getTeamArticlesDescription(1)}</pre>
        <pre>{getTeamArticlesDescription(2)}</pre>
        <Button>{buttonText}</Button>
      </main>
    )
  }
}

export default HomePage
