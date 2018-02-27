"use strict";
const {after, before, beforeEach, describe, it} = require("mocha");
const {expect} = require("chai");
const Nightmare = require("nightmare");
const parseBoolean = require("./");



describe("Node.js", function()
{
	it("works", function()
	{
		expect( parseBoolean("true") ).to.be.true;
		expect( parseBoolean("false") ).to.be.false;

		expect( parseBoolean(" true") ).to.be.true;
		expect( parseBoolean(" false") ).to.be.false;
		expect( parseBoolean("true ") ).to.be.true;
		expect( parseBoolean("false ") ).to.be.false;
		expect( parseBoolean(" true ") ).to.be.true;
		expect( parseBoolean(" false ") ).to.be.false;
		expect( parseBoolean("  true  ") ).to.be.true;
		expect( parseBoolean("  false  ") ).to.be.false;

		expect( parseBoolean("TRUE") ).to.be.true;
		expect( parseBoolean("FALSE") ).to.be.false;

		expect( parseBoolean("0") ).to.be.null;
		expect( parseBoolean("1") ).to.be.null;
		expect( parseBoolean("null") ).to.be.null;
		expect( parseBoolean("undefined") ).to.be.null;
		expect( parseBoolean("") ).to.be.null;

		expect( parseBoolean("other") ).to.be.null;
	});



	it("supports a default value", function()
	{
		expect( parseBoolean("0",123) ).to.equal(123);
		expect( parseBoolean("1",123) ).to.equal(123);
		expect( parseBoolean("null",123) ).to.equal(123);
		expect( parseBoolean("undefined",123) ).to.equal(123);
		expect( parseBoolean("",123) ).to.equal(123);
		expect( parseBoolean("other",123) ).to.equal(123);

		expect( parseBoolean("true",123) ).to.be.true;
		expect( parseBoolean("false",123) ).to.be.false;
	});



	it("rejects non-string input", function()
	{
		const args = [1, true, {}, [], function(){}, null, undefined];

		args.forEach(arg => expect(() => parseBoolean(arg)).to.throw());
	});
});



describe("Web browser", function()
{
	this.timeout(5000);



	let browser;

	before(() => browser = new Nightmare({ nodeIntegration:false }).goto("about:blank"));

	beforeEach(() => browser.refresh().then(() => browser.inject("js", "./browser.js")));

	after(() => browser.end());



	it("works", function()
	{
		return browser.evaluate( function()
		{
			return [window.parseBoolean("true"), window.parseBoolean("false")];
		})
		.then(result => expect(result).to.deep.equal([true, false]));
	});
});
