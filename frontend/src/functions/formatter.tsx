/**
 * Takes in a string of in the format of `DD/MM/YYYY` and returns it in `DD MMM YYYY (Day)`
 * @param {string} inputDate 
 * @returns {string} date with day
 */
export const formatDateToDateWithDay = (date: Date) => {

    const utcDate = date.toUTCString()
    const dayOfWeek = utcDate.substring(0, 3)
    const dateStr = utcDate.substring(4, 16)

    return `${dateStr} (${dayOfWeek}.)`
};