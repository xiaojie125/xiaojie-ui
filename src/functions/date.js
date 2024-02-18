import moment from 'moment'


export function formatDate(date, fmt = 'YYYY-MM-DD HH:mm:ss') {
    if (!date) return '';
    let d = moment(date).format(fmt);
    return ~d.indexOf('Invalid') ? '' : d;
}