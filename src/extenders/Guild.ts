import {Guild} from 'discord.js';
import {Extender} from 'dolphin-discord';

export default class extends Extender {
	[name: string]: any;

	constructor() {
		super({
			appliesTo: [Guild]
		});
	}

	async getRealUsersCount(): Promise<number> {
		const members = await this.members.fetch();

		return members.filter(member => !member.user.bot).size;
	}
}