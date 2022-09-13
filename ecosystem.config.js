module.exports = {
	apps: [
		{
			script: 'app.js',
			watch: ['server', 'client'],
			watch_delay: 1000,
			env_production: {
				NODE_ENV: 'production'
			},
			env_development: {
				NODE_ENV: 'development'
			}
		}
	]
};
