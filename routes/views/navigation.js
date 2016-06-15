var keystone = require('keystone');
var async = require('async');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Init locals
	locals.section = 'navigation';
	// locals.filters = {
	// 	category: req.params.category,
	// };
	locals.data = {
		projects: [],
		// categories: [],
	};

	// Load all categories
	// view.on('init', function (next) {

	// 	keystone.list('Navigation').model.find().sort('name').exec(function (err, results) {


	// 		if (err || !results.length) {
	// 			return next(err);
	// 		}

	// 		console.log(results)

	// 		locals.data.projects = results;
			
	// 		console.log('YEaH1');
	// 		console.log(locals.data.projects);
	// 		console.log('YEaH2');

	// 		// async.each(locals.data.projects, function (category, next) {

	// 		// 	console.log(category)

	// 		// 	keystone.list('ProjectCategory').model.count().where('categories').in([category.id]).exec(function (err, count) {
	// 		// 		category.projectCount = count;
	// 		// 		next(err);
	// 		// 	});

	// 		// }, function (err) {
	// 			next(err);
	// 		// });

	// 		// console.log(locals.data.projects)

	// 		// Load the counts for each category
	// 		// async.each(locals.data.categories, function (category, next) {

	// 		// 	keystone.list('Project').model.count().where('categories').in([category.id]).exec(function (err, count) {
	// 		// 		category.projectCount = count;
	// 		// 		next(err);
	// 		// 	});

	// 		// }, function (err) {
	// 		// 	next(err);
	// 		// });
	// 	});
	// });

	// Render the view
	view.render('navigation');
};
