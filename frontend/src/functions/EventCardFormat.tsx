const EventCardFormat = {
    formatDate: (inputDate: { split: (arg0: string) => [any, any, any]; }) => {
        const [day, monthStr, year] = inputDate.split("/");
        const month = new Date(year, parseInt(monthStr) - 1).toLocaleString("en-US", { month: "short" });
        const formattedDate = new Date(`${year}-${parseInt(monthStr)}-${day}`);
        const dayOfWeek = formattedDate.toLocaleDateString("en-US", { weekday: "short" });
        return `${day} ${month} ${year} (${dayOfWeek})`;
    }
};

export default EventCardFormat;
