import React from 'react';
import {Link} from "react-router-dom";

export default function Page() {
    return (
        <section className="hero">
            <div className="hero-body">
                <div className="container">
                    <nav className="breadcrumb" aria-label="breadcrumbs">
                        <ul>
                            <li>
                                <Link activeClassName='is-active' to='/pages/introduction'>Introduction</Link>
                            </li>
                            <li className="is-active">
                                <Link activeClassName='is-active' to='/pages/introduction/wallets'>wallets</Link>
                            </li>
                        </ul>
                    </nav>

                    <h1 className="title has-text-centered">
                        Wallets
                    </h1>

                    <div className="content">
                        <p className='has-text-danger'>
                            here would the content of the page appear..
                        </p>
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet malesuada enim. Nulla
                            volutpat dapibus tempus. Duis sagittis enim non porttitor convallis. Etiam a dolor
                            vulputate, elementum lacus maximus, molestie libero. Donec accumsan accumsan egestas. Proin
                            in sapien dolor. Aenean gravida non velit et commodo. In gravida maximus interdum.</p>

                        <p>Mauris luctus ultrices libero vel aliquet. Aliquam erat volutpat. Maecenas pretium porttitor
                            arcu in aliquam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
                            ridiculus mus. Praesent eget tellus in libero sagittis porta. Vivamus aliquet lectus rutrum
                            lorem laoreet, ac ultricies tellus tincidunt. Vivamus non mauris ultricies, placerat turpis
                            eu, aliquet libero. Nunc aliquam dapibus turpis eget malesuada.</p>

                        <p>Nullam scelerisque eget mi non luctus. Sed consequat urna sit amet urna vulputate varius. Sed
                            non dolor elit. Sed non ligula vulputate, volutpat nisl ut, rutrum nulla. Integer bibendum
                            pellentesque arcu at elementum. Sed pretium facilisis elementum. Aenean fermentum vel massa
                            vitae iaculis. Quisque eget lacus vitae risus sodales cursus a vitae lectus.</p>
<br />
                        <p>Cras dolor tellus, suscipit nec vulputate id, congue at lacus. Praesent blandit bibendum
                            felis, in lacinia tortor bibendum eu. Curabitur a lectus metus. Cras vel leo mi. Proin ut
                            tristique dolor. Donec scelerisque mi eget lectus vehicula convallis. Ut iaculis vitae
                            mauris id blandit. Donec accumsan blandit turpis in condimentum. Sed imperdiet eget nisi in
                            auctor.</p>

                        <div className='level'>
                            <div className='level-left'>
                                &lt;&lt; <Link to='/pages/introduction/transactions'>Transactions</Link> (previous)
                            </div>

                            <div className='level-left'>
                                (next) <Link to='/pages/introduction/mempool'>Mempool</Link> &gt;&gt;
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}