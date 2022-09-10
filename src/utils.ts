import { Visibility, Weather } from './enum';
import {  NewDiaryEntry } from './type';

//parseamos el comentario
const parseComment = (commentFromRequest: any): string => {
    if(!isString(commentFromRequest)){
        throw new Error('incorrect');
    }
    return commentFromRequest;
};
//parseamos el date
const parseDate = (dateFromRequest: any): string => {
if(!isString(dateFromRequest) || !isDate(dateFromRequest)){
    throw new Error('ERRORRRRRRR');
}
return dateFromRequest;
};


//parseamos el weather
const parseWeather = (weatherFromRequest: any): Weather => {
    if(!isString(weatherFromRequest) || !isWeather(weatherFromRequest)){
        throw new Error('ERRORRRRR not is Weather');
    }
    return weatherFromRequest;
    };


//parseamos el visibility
const parseVisibility = (visibilityFromRequest: any): Visibility => {
    if(!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)){
        throw new Error('ERRORRRRR not is Weather');
    }
    return visibilityFromRequest;
};

//validar si es visibility
const isVisibility = (param: any): boolean => {
    return Object.values(Visibility).includes(param);
};
//validar si es weather
const isWeather = (param: any): boolean => {
    return Object.values(Weather).includes(param);
   };
//validar si es un string o no
const isString = (string: string): boolean => {
return typeof string === 'string';
};

//validar date si es una fecha o no
const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
};


//le llega un objeto cualquier cosa, input del usuario.. etc
const toNewDiaryEntry = (object: any): NewDiaryEntry  => {
    const newEntry :  NewDiaryEntry = {
           date: parseDate(object.date),
           comment: parseComment(object.comment),
           weather: parseWeather(object.weather),
           visibility: parseVisibility(object.visibility)

    };
    return newEntry;
  };

export default toNewDiaryEntry;