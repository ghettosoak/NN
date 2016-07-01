var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Project Model
 * ==========
 */

var Hello = new keystone.List('Hello', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Hello.add({
	title: { type: String, required: true },
	image: { type: Types.CloudinaryImage },
	text : { type: Types.Html, wysiwyg: true, height: 150 }
});

Hello.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Hello.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Hello.register();
