import React from 'react'
import error404Picture from '../../assets/img/undraw_404_error.svg'
import TitleHeader from '../layout/TitleHeader'

export class Page404 extends React.Component {
  render() {
    return (
      <div className={'is-fullheight'}>
        <TitleHeader />
        <section>
          <figure className={'image'}>
            <img src={error404Picture} />
          </figure>
          {/* Explain this is 404 not found */}
          {/* button to go back to homepage */}
        </section>
      </div>
    )
  }
}
