var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * GentleImage Model
 * ==========
 */

var GentleImage = new keystone.List('GentleImage', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

GentleImage.add({
	title: { type: String, required: true },
	linkedSlug: { type: String, required: true, initial: false },
	image: { type: Types.CloudinaryImage }
});

GentleImage.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

GentleImage.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
GentleImage.register();
