/**
 * Copyright (c) 2019
 * Subheader
 * 
 * @summary Subheader
 * @author  Fazil
 *
 */

import React from "react";

export const Subheader = props => {
	
    return (
		<div className="wr-subheader section__subheader">
            <div className="wr-subheader__title">{props.title}</div>
            <div className="wr-subheader__subtitle">{props.subtitle}</div>
        </div>
    )
}

