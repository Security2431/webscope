import React from 'react'
import * as Rx from 'rxjs'
import {
  buffer, debounceTime, filter,
  map, take,
} from 'rxjs/operators'

class Button extends React.Component {
  onDblClick = (e: React.SyntheticEvent): void => {
    // tslint:disable-next-line
    const target = e.target as HTMLInputElement

    const mouse$ = Rx.fromEvent(target, 'click')

    const buff$ = mouse$.pipe(
      debounceTime(300),
    )

    const click$ = mouse$.pipe(
      buffer(buff$),
      take(1),
      map(list => list.length),
      filter(clicks => clicks === 2),
    )

    click$.subscribe(() => {
      // tslint:disable-next-line
      console.info('Double clicked')
    })
  }
  render() {
    return <button type="button" onClick={this.onDblClick}>{this.props.children}</button>
  }
}

export default Button
