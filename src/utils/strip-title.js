function stripTitle(title) { return title.replace(/\W/g, " ").trim().replace(/\s+/g, "-").toLowerCase() }

module.exports = stripTitle