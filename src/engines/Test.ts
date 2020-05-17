import {Engine} from 'dolphin-discord';

export default class extends Engine {
	constructor() {
		super({
			name: 'Test'
		});
	}

	run(): void {
		console.log('This runs whenever the bot is ready');
	}
}