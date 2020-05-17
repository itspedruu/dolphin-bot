import { Command } from 'dolphin-discord';

export default class extends Command {
	constructor() {
		super({
			name: 'ping',
			syntax: 'ping'
		});
	}

	run(): void {
		this.message.say(':ping_pong: Pong');
	}
}