/**
 * Copyright (c) 2019
 * Session Maintenance
 * 
 * @summary Session Maintenance
 * @author  Fazil
 * 
 */

import React from 'react';

export const setSessionValue = (key, value) => {
    localStorage.setItem(key, value);
}

export const getSessionValue = (key) => {
    return localStorage.getItem(key);
}

export const removeSessionValue = (key) => {
    localStorage.removeItem(key);
}

export const clearAllSession = () => {
    localStorage.clear();
}