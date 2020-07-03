const dayjs = require("dayjs");

module.exports = (date, format = "MMMM YYYY") => dayjs(date).format(format);
