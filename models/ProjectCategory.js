var keystone = require('keystone');

/**
 * ProjectCategory Model
 * ==================
 */

var ProjectCategory = new keystone.List('ProjectCategory', {
	autokey: { from: 'name', path: 'key', unique: true },
});

ProjectCategory.add({
	name: { type: String, required: true },
	dates: { type: String }
});

ProjectCategory.relationship({ ref: 'Project', path: 'categories' });

ProjectCategory.register();
