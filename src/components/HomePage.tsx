import * as R from 'ramda'
import React from 'react'
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

    return <Button>{buttonText}</Button>
  }
}

export default HomePage
