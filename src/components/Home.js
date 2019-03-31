import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'
import TitleHeader from './layout/TitleHeader'
import workerImg from '../assets/img/worker.svg'

export default function Home() {
  return (
    <div>
      <section className="hero is-light is-fullheight hero-header-component">
        {/* <TitleHeader/> */}
        <div className="hero-body has-text-white">
          <div className="container has-text-centered">
            <img src={workerImg} className={'image landing-page-image'} />
            <h1 className={'title is-1 has-text-white is-cursive is-extra-bold'}>
              Forge Your Blockchain Skills
            </h1>
            <h2 className={'is-2 has-text-white'}>
              Blockchain theory curated by Universities, Interactive online IDE, No certification fee
            </h2>
            <div className={'content'} />
            <div className="buttons" style={{ display: 'block' }}>
              <Link className="button is-light is-big" to={'/start'}>
                <span className="icon">
                  <i className="fas fa-graduation-cap" />
                </span>
                <span>Beginner</span>
              </Link>
              <Link className={'button is-dark is-big'} to={'start'}>
                <span className="icon">
                  <i className="fas fa-terminal" />
                </span>
                <span>Expert</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Search />
    </div>
  )
}
