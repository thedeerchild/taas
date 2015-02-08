Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', {
	name: 'home'
});

Router.route('/login', {
	name: 'login'
});

Router.route('/profile', {
	name: 'profile'
});

Router.route('/messages', {
	name: 'messages'
});

Router.route('/links', {
	name: 'links'
});