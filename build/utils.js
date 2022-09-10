"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enum_1 = require("./enum");
//parseamos el date
const parseDate = (dateFromRequest) => {
    if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error('ERRORRRRRRR');
    }
    return dateFromRequest;
};
//parseamos el comentario
const parseComment = (commentFromRequest) => {
    if (!isString(commentFromRequest)) {
        throw new Error('incorrect');
    }
    return commentFromRequest;
};
//parseamos el weather
const parseWeather = (weatherFromRequest) => {
    if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
        throw new Error('ERRORRRRR not is Weather');
    }
    return weatherFromRequest;
};
//parseamos el visibility
const parseVisibility = (visibilityFromRequest) => {
    if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
        throw new Error('ERRORRRRR not is Weather');
    }
    return visibilityFromRequest;
};
//validar si es visibility
const isVisibility = (param) => {
    return Object.values(enum_1.Weather).includes(param);
};
//validar si es weather
const isWeather = (param) => {
    return Object.values(enum_1.Weather).includes(param);
};
//validar si es un string o no
const isString = (string) => {
    return typeof string === 'string';
};
//validar date si es una fecha o no
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
//le llega un objeto cualquier cosa, input del usuario.. etc
const toNewDiaryEntry = (object) => {
    return {
        date: parseDate(object.date),
        comment: parseComment(object.comment),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility)
    };
};
exports.default = toNewDiaryEntry;
