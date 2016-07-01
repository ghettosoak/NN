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
	title: { type: String, required: true },
	subheadline : { type: Types.Html, wysiwyg: true, height: 150 },
	role : { type: String },
	category: { type: Types.Relationship, ref: 'ProjectCategory', many: true },
	date: { type: String },
	navigationThumbnails: { type: Types.CloudinaryImages },
	frontPage:{
		desktop: { type: Types.CloudinaryImage },
		mobile: { type: Types.CloudinaryImage }
	},
	mainEvent:{
		desktop: { type: Types.CloudinaryImage },
		mobile: { type: Types.CloudinaryImage },
		vimeo_id: { type: String },
	},
	content: {
		subsection01_title: { type: String },
		subsection01_subtitle : { type: Types.Html, wysiwyg: true, height: 150 },
		subsection01_imageRow01: { type: Types.CloudinaryImages },
		subsection01_imageRow02: { type: Types.CloudinaryImages },
		subsection01_imageRow03: { type: Types.CloudinaryImages },
		subsection01_imageRow04: { type: Types.CloudinaryImages },
		subsection02_title: { type: String },
		subsection02_subtitle : { type: Types.Html, wysiwyg: true, height: 150 },
		subsection02_link: { type: Types.Url },
		subsection02_imageRow: { type: Types.CloudinaryImages },
	},
});

Project.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Project.defaultColumns = 'title, category|20%, date|20%';
Project.register();
