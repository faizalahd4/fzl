/**
 * Copyright (c) 2019
 * Card
 * 
 * @summary Card
 * @author  Fazil
 * 
 */

import React from "react";
import * as Utils from '../../helpers/utils';

export const Card = props => {
    let inlineStyle = {
        backgroundImage: 'url(' + props.img + ')',
        backgroundSize: 'cover'
    };
    return (
        
        <div className={[props.newClass, 'rw-card'].join(' ').trim()} >
            <div className="rw-card__layer" style={inlineStyle}>
                <div className="rw-card__title" title={props.title}> 
                    <a href={props.link}>{Utils.trunc(props.title, 15)}</a>
                </div>
                <div className="rw-card__content">{props.desc}</div>
            </div>
        </div>
    )
}

