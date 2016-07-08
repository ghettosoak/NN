var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	locals.data = {
		raw_projects: [],
		projects: {},
		pages: [],
		categories: [],
	};

		// console.log('YEAH0000');

	view.on('init', function (next) {

		// console.log('YEAH00');

		// var $PROJECTMODEL = ;

		keystone.list('Project').model.find().sort('category').exec(function (err, results) {
			locals.data.raw_projects = results;

			locals.data.raw_projects.sort(function(a, b){
				return parseFloat(b.date) - parseFloat(a.date);
			});

			// console.log(locals.data.raw_projects[0])

			locals.data.pages = locals.data.raw_projects;

			// console.log(locals.data.pages)

			projectSorter(results);			
		});

		var projectSorter = function(raw_projects){
			keystone.list('ProjectCategory').model.find().sort('category').exec(function (err, results) {
				locals.data.categories = results;

				for (var j = 0; j < locals.data.raw_projects.length; j++){

					// console.log(raw_projects[j].mainEvent_vimeo_url)

					for (var i = 0; i < locals.data.categories.length; i++){

						if (typeof locals.data.projects[locals.data.categories[i]._id.toString()] === 'undefined'){
							locals.data.projects[locals.data.categories[i]._id.toString()] = {
								categoryMeta: {
									name: locals.data.categories[i].name,
									dates: locals.data.categories[i].dates,
								},
								projects: []
							};
						}

						// console.log(j, locals.data.raw_projects[j].category)

						if (
							(locals.data.raw_projects[j].category[0] !== 'undefined') && 
							(
								locals.data.raw_projects[j].category[0].toString() === 
								locals.data.categories[i]._id.toString()
							)
						){

							locals.data.projects[locals.data.categories[i]._id.toString()].projects.push(
								raw_projects[j]
							)

						// console.log(locals.data.categories[i])

							// console.log(
							// 	locals
							// 	.data
							// 	.projects[locals.data.categories[i]._id.toString()]
							// 	.projects
							// 	// [
							// 	// 	locals
							// 	// 	.data
							// 	// 	.projects[locals.data.categories[i]._id.toString()]
							// 	// 	.length - 1
							// 	// ]
							// 	// .mainEvent_vimeo_url
							// )
						}

						// console.log(
						// 	raw_projects[j].category[0].toString(),
						// 	// typeof raw_projects[j].category[0],
						// 	locals.data.categories[i]._id.toString(),
						// 	// typeof locals.data.categories[i]._id,
						// 	raw_projects[j].category[0].toString() === locals.data.categories[i]._id.toString()
						// )
					}
					
				}

				next(err);
			});
		}

	});


	// Render the view
	view.render('index');
};
