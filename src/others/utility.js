import moment from 'moment';

export const TIME_AGO_FEATURE = (value) => {

    if ( !value ) {
    return true;
    }   

    const output= moment(value).fromNow();

    return output;
}    


export const VIDEO_DATE_FORMATE = (value) => {

    if ( !value ) {
    return true;
    }   

    const output= moment(value).format('Do MMMM YYYY')

    return output;
}   