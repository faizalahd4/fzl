/**
 * Copyright (c) 2019
 * mHeader
 * 
 * @summary mHeader
 * @author  Fazil
 * 
 */

import React from "react";

export const Mheader = props => {
  
    let inlineStyle = {
      backgroundImage: 'url(' + props.img + ')'
    };
    return (
      <div className="wr-mheader" style={inlineStyle}>
          <div className="wr-mheader__content">
            <p className="title">{props.title}</p>
            <p className="subtitle">{props.subtitle}</p>
          </div>
      </div>
    )
}

