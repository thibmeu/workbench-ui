import React from 'react';
import {Link} from 'react-router-dom';

export default function Home() {
    return (
        <section className="hero is-medium">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <h1 className="title is-2">
                        Getting started
                    </h1>
                    <Link className='button is-medium is-success' to='/start'>Start with introduction</Link>
                    <p className='mt30'>
                        Already familiar with blockchain? <Link to='/advanced'>Try the advanced search for topics</Link>
                    </p>
                </div>
            </div>
        </section>
    )
}