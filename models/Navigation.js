var keystone = require('keystone');

/**
 * PostCategory Model
 * ==================
 */

var Navigation = new keystone.List('Navigation', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Navigation.add({
	name: { type: String, required: true },
});

Navigation.relationship({ ref: 'Project', path: 'categories' });

// console.log(Navigation)

Navigation.register();
