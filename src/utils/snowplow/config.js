import Analytics from 'analytics';
import snowplowPlugin from '@analytics/snowplow';

export const analytics = Analytics({
	app: 'Llamazon',
	plugins: [
		// Minimal recommended configuration
		snowplowPlugin({
			name: 'snowplow',
			scriptSrc:
				'https://cdn.jsdelivr.net/gh/snowplow/sp-js-assets@2.17.3/sp.js',
			collectorUrl: '0.0.0.0:9090',
			trackerSettings: {
				appId: 'llamazonWeb',
				contexts: {
					webPage: true,
				},
			},
		}),
	],
});
