import React from 'react';
import {Link} from "react-router-dom";

export default function Pages() {
    return (
        <section className="hero">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <nav className="breadcrumb" aria-label="breadcrumbs">
                        <ul>
                            <li className="is-active">
                                <Link activeClassName='is-active' to='/pages/introduction'>Introduction</Link>
                            </li>
                        </ul>
                    </nav>
                    <h1 className="title">
                        Introduction
                    </h1>

                    <div className="tile is-ancestor">
                        <div className="tile is-parent is-4 catLink">
                            <div className="tile is-child box"><a href="/pages/introduction/wallets"><p><span
                                className="title is-4">Wallets</span><span
                                className="tag is-pulled-right is-success">easy</span></p><p className="content"></p><p
                                className="content tags"><span className="tag catItem is-info">introduction</span></p>
                            </a></div>
                        </div>
                        <div className="tile is-parent is-4 catLink">
                            <div className="tile is-child box"><a href="/pages/introduction/transactions"><p><span
                                className="title is-4">Transactions</span><span
                                className="tag is-pulled-right is-success">easy</span></p><p className="content"></p><p
                                className="content tags"><span className="tag catItem is-info">introduction</span></p>
                            </a></div>
                        </div>
                        <div className="tile is-parent is-4 catLink">
                            <div className="tile is-child box"><a href="/pages/introduction/mempool"><p><span
                                className="title is-4">Mempool</span><span
                                className="tag is-pulled-right is-success">easy</span></p><p className="content"></p><p
                                className="content tags"><span className="tag catItem is-info">introduction</span><span
                                className="tag catItem is-info">mining</span></p></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}