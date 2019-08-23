import React from 'react'

class HomePage extends React.Component {
  firstToUpper = (text: string): string => {
    const str = text.toString()
    const capitalizedStr = str[0].toUpperCase() + str.slice(1)

    return capitalizedStr
  }

  render() {
    return <div>{this.firstToUpper('hello, React!')}</div>
  }
}

export default HomePage
