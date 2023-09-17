/**
 * Takes in a string of in the format of `DD/MM/YYYY` and returns it in `DD MMM YYYY (Day)`
 * @param {string} inputDate 
 * @returns {string} date with day
 */
const formatDateStrToDateWithDayStr = (inputDate: string) => {
    const [day, monthStr, year] = inputDate.split("/");
    const month = new Date(
        parseInt(year),
        parseInt(monthStr) - 1
    ).toLocaleString("en-US", { month: "short" });

    const formattedDate = new Date(`${year}-${parseInt(monthStr)}-${day}`);
    const dayOfWeek = formattedDate.toLocaleDateString("en-US", {
        weekday: "short",
    });

    return `${day} ${month} ${year} (${
        
        dayOfWeek})`;
};

export { formatDateStrToDateWithDayStr };
