export const formatDateToDateWithDay = (date: Date) => {
    const utcDate = date.toUTCString();
    const dayOfWeek = utcDate.substring(0, 3);
    const dateStr = utcDate.substring(4, 16);

    return `${dateStr} (${dayOfWeek}.)`;
};

export const formatDatetoDateTimeWithDay = (date: Date) => {
    const timeStr = date.toTimeString();

    return `${formatDateToDateWithDay(date)} ${timeStr.substring(0, 5)}`;
};
