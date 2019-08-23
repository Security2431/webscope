import * as R from 'ramda'
import React from 'react'
import getTeamArticlesDescription from '../utils/team-articles'
import Button from './Button'

class HomePage extends React.Component {
  coolAdd = R.curry((x: number, y: number) => x + y)

  firstToUpper = (text: string): string => {
    const str = text.toString()
    const capitalizedStr = str[0].toUpperCase() + str.slice(1)

    return capitalizedStr
  }

  render() {
    const buttonText = this.firstToUpper('hello world')
    const summ = `coolAdd(3, 4) ~> ${this.coolAdd(3, 4)}`
    const currySumm = `coolAdd(3)(4) ~> ${this.coolAdd(3)(4)}`

    return (
      <main>
        <section>
          <p>{summ}</p>
          <p>{currySumm}</p>
        </section>
        <section>
          <pre>{getTeamArticlesDescription(1)}</pre>
          <pre>{getTeamArticlesDescription(2)}</pre>
        </section>
        <section>
          <Button>{buttonText}</Button>
        </section>
      </main>
    )
  }
}

export default HomePage
