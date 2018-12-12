import React from "react";
import {NavLink} from 'react-router-dom';

export default function Navigation() {
    return (<div className="tabs is-right">
        <ul>
            <li>
                <NavLink activeClassName='is-active' to='/start'>Introduction</NavLink>
            </li>
            <li>
                <NavLink activeClassName='is-active' to='/advanced'>Advanced Search</NavLink>
            </li>
            <li>
                <NavLink activeClassName='is-active' to='/login'>Login</NavLink>
            </li>
        </ul>
    </div>);
}