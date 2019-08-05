/**
 * Copyright (c) 2019
 * DashBoard
 * 
 * @summary DashBoard
 * @author  Fazil
 * 
 */

import React, {useState, useEffect} from "react";

import {Card} from '../../components/card/card';
import {Subheader} from '../../components/subheader/subheader';
import {Mheader} from '../../components/mheader/mheader';

export const Dashboard = props => { 

    let widgetList = [
        {title: 'Widget 1', desc: 'War is what happens when language fails.', img: 'https://miro.medium.com/max/2625/1*OSsjjdfsK9mRnEPoLTGfyw.jpeg', link: 'https://www.google.com'},
        {title: 'Widget 2', desc: 'War is what happens when language fails.', img: 'https://leaderonomics.com/wp-content/uploads/2017/10/jess-770x470.jpg', link: 'https://www.google.com'},
        {title: 'Widget 3', desc: 'War is what happens when language fails.', img: 'https://storage.googleapis.com/nextivawebsites-wordpressfiles-voip/var/www/virtual/nextiva.com/voip/2018/04/How-to-Get-More-Productivity-From-a-Larger-Team-1180x664.jpg', link: 'https://www.google.com'},
        {title: 'Widget 4', desc: 'War is what happens when language fails.', img: 'https://static.ivanti.com/sites/marketing/media/images/blog/2018/02/workspace.control.8.jpg', link: 'https://www.google.com'},
        {title: 'Widget 5', desc: 'War is what happens when language fails.', img: 'https://static.ivanti.com/sites/marketing/media/images/blog/2018/02/workspace.control.8.jpg', link: 'https://www.google.com'},
        {title: 'Widget 6', desc: 'War is what happens when language fails.', img: 'https://i0.wp.com/workspace365.net/wp-content/uploads/2017/12/Workspace.png?ssl=1', link: 'https://www.google.com'},
    ]

    return (
        <div id="wr-dashboards">
            <Mheader title={'Dashboard'} subtitle={'Subtitle of Dashboard'} img={'../img/dashboard_header.jpg'}></Mheader>
            <section className="section">
                <div className="container">
                    <Subheader title={'Dashboard'}  subtitle={'Dashboard Subtitle. Dashboard Subtitle'}/>
                    <div className="wr-card-listing row">
                        {widgetList.map((widget, i) => {
                            return (
                            <div className="col-md-3" key={i}>
                                <Card img={widget.img} title={widget.title} 
                                        desc={widget.desc}  link={widget.link}>
                                </Card>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

