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
      <div className={'container'}>
        <section className="section">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column" style={{ padding: '1rem' }}>
                <img className={'image image-box border-shadow'} src={workerImg} height={200} />
              </div>
              <div className="column feature-box">
                <h1 className={'subtitle'}>Blockchain basics</h1>
                <p className={'is-3 text'}>
                  Introduce you to blockchain theory. You will learn cryptography, some governance, ...
                </p>
                <br />
                <Link className="button is-info" to={'/start'}>
                  Start Learning
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className={'container has-background-color-darker'}>
        <section className="section">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column feature-box">
                <h1 className={'title'}>Smart contracts</h1>
                <p className={'is-3 text'}>
                  Smart contracts are application that can run in a decentralized manner and modify the state of the
                  underlying blockchain. In this lesson, you shall learn.
                  <div>
                    <Link className={'is-link'} to={'/start'}>
                      Functions
                    </Link>
                  </div>
                  <div>
                    <Link className={'is-link'} to={'/start'}>
                      Payments
                    </Link>
                  </div><div>
                    <Link className={'is-link'} to={'/start'}>
                      More
                    </Link>
                  </div>
                </p>
                <br />
                <Link className="button is-info" to={'/start'}>
                  Start Learning
                </Link>
              </div>
              <div className="column" style={{ padding: '1rem' }}>
                <img className={'image image-box border-shadow'} src={workerImg} height={200} />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Search />
    </div>
  )
}
