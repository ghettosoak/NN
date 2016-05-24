var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Project Model
 * ==========
 */

var Project = new keystone.List('Project', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

// Project.add({
// 	title: { type: String, required: true },
// 	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
// 	author: { type: Types.Relationship, ref: 'User', index: true },
// 	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
// 	image: { type: Types.CloudinaryImage },
// 	content: {
// 		brief: { type: Types.Html, wysiwyg: true, height: 150 },
// 		extended: { type: Types.Html, wysiwyg: true, height: 400 },
// 	},
// 	categories: { type: Types.Relationship, ref: 'ProjectCategory', many: true },
// });

Project.add({
	headline: { type: String, required: true, initial: false },
	subheadline : { type: Types.Html, wysiwyg: true, height: 150 },
	category: { type: Types.Relationship, ref: 'ProjectCategory', many: true },
	date: { type: String },
	mainEvent: { type: Types.CloudinaryImage },
	content: {
		subsection01_title: { type: String },
		subsection01_title : { type: Types.Html, wysiwyg: true, height: 150 },
		subsection01_imageRow01: { type: Types.CloudinaryImages },
		subsection01_imageRow02: { type: Types.CloudinaryImages },
		subsection01_imageRow03: { type: Types.CloudinaryImages },
		subsection01_imageRow04: { type: Types.CloudinaryImages },
		subsection02_title: { type: String },
		subsection02_title : { type: Types.Html, wysiwyg: true, height: 150 },
		subsection02_link: { type: Types.Url },
		subsection02_imageRow: { type: Types.CloudinaryImages },
	},
});

Project.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Project.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Project.register();
