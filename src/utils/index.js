import React from 'react';

export const format = (str, replacer) => Object.keys(replacer).reduce((newStr, value) => newStr.replace(RegExp(`\\{${value}\\}`, 'gi'), replacer[value]), str);

export const disableBodyScroll = (isDLP = false) => {
    document.body.style.position = 'fixed';
    document.body.style.overflow = 'hidden';
};

export const enableBodyScroll = () => {
    document.body.style.position = 'unset';
    document.body.style.overflow = 'unset';
};