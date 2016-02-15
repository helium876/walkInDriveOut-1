/**
 * This file contains the common middleware used by your routes.
 * 
 * Extend or replace these functions as your application requires.
 * 
 * This structure is not enforced, and just a starting point. If
 * you have more middleware you may want to group it as separate
 * modules in your project's /lib directory.
 */

var _ = require('underscore');


/**
  Initialises the standard view locals

  The included layout depends on the navLinks array to generate
  the navigation in the header, you may wish to change this array
  or replace it with your own templates / logic.
  */

exports.initLocals = function(req, res, next) {

	var locals = res.locals;

	locals.navLinks = [
		{ label: 'Home',		key: 'home',		href: '/' },
		{ label: 'Blog',		key: 'blog',		href: '/blog' },
		{ label: 'Gallery',		key: 'gallery',		href: '/gallery' },
		{ label: 'Contact',		key: 'contact',		href: '/contact' }
	];

	locals.makes = [
		{ make: 'All Makes'},
		{make: 'Acura'},
		{make: 'Aston Martin'},
		{make: 'Audi'},
		{make: 'BMW'},
		{make: 'Chevrolet'},
		{make: 'Chrysler'},
		{make: 'Daihatsu'},
		{make: 'Dodge'},
		{make: 'Fiat'},
		{make: 'Ford'},
		{make: 'Honda'},
		{make: 'Hyundai'},
		{make: 'Infiniti'},
		{make: 'Isuzu'},
		{make: 'Jaguar'},
		{make: 'Jeep'},
		{make: 'Kia'},
		{make: 'Land Rover'},
		{make: 'Lexus'},
		{make: 'Leyland'},
		{make: 'Lincoln'},
		{make: 'Mazda'},
		{make: 'Mini'},
		{make: 'Mitsubishi'},
		{make: 'Nissan'},
		{make: 'Peugot'},
		{make: 'Rover'},
		{make: 'Saturn'},
		{make: 'Scion'},
		{make: 'Subaru'},
		{make: 'Suzuki'},
		{make: 'Toyota'},
		{make: 'Volkswagen'},
		{make: 'Volvo'}
	];
	locals.years = [
		{ year: 1998 },
		{ year: 1999 },
		{ year: 2000 },
		{ year: 2001 },
		{ year: 2002 },
		{ year: 2003 },
		{ year: 2004 },
		{ year: 2005 },
		{ year: 2006 },
		{ year: 2007 },
		{ year: 2008 },
		{ year: 2009 },
		{ year: 2010 },
		{ year: 2011 },
		{ year: 2012 }
	];	
	locals.maxprice = [
		{ price: '100,000'},
		{ price: '200,000'},	
		{ price: '300,000'},
		{ price: '400,000'},
		{ price: '500,000'},
		{ price: '600,000'},
		{ price: '700,000'},
		{ price: '800,000'},
		{ price: '900,000'},
		{ price: '1,000,000'},
	];
	locals.user = req.user;

	next();

};


/**
  Fetches and clears the flashMessages before a view is rendered
  */

exports.flashMessages = function(req, res, next) {

	var flashMessages = {
info: req.flash('info'),
	  success: req.flash('success'),
	  warning: req.flash('warning'),
	  error: req.flash('error')
	};

	res.locals.messages = _.any(flashMessages, function(msgs) { return msgs.length; }) ? flashMessages : false;

	next();

};


/**
  Prevents people from accessing protected pages when they're not signed in
  */

exports.requireUser = function(req, res, next) {

	if (!req.user) {
		req.flash('error', 'Please sign in to access this page.');
		res.redirect('/keystone/signin');
	} else {
		next();
	}

};
