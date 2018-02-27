"use strict";
const isString = require("is-string");



const parseBoolean = (string, defaultValue=null) =>
{
	if (!isString(string))
	{
		throw new TypeError("Input must be a string");
	}

	switch (string.trim().toLowerCase())
	{
		case "true": return true;
		case "false": return false;
		default: return defaultValue;
	}
};



module.exports = parseBoolean;
