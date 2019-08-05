/**
 * Copyright (c) 2019
 * Home
 * 
 * @summary Home
 * @author  Fazil
 * 
 */

import React from "react";
import { Link } from "react-router-dom";

import {Subheader} from '../../components/subheader/subheader';
import {Mheader} from '../../components/mheader/mheader';
import {URL} from '../../constants/url';

export const Home = props => {

    return (
        <div id="home">
            <Mheader title={'Welcome Home'} subtitle={'Subtitle of Home'} img={'../img/home_header.jpg'}></Mheader>
            <section className="wr-intro section">
                <div className="container">
                    <Subheader title={'Introduction'}  subtitle={'Introduction Sub title. Introduction Sub title'}/>
                    <div className="wr-content-conatiner">
                        <center>
                            <Link to={URL.DASHBOARD} className="btn btn-primary">Dashboard</Link>
                        </center>
                    </div>
                </div>
            </section>
        </div>
    )
}


