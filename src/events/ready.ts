import {Client} from 'dolphin-discord';

export function run(client: Client): void {
	console.log(`This listens for the event ready and we can access the client instance from here. Client Guilds: ${client.guilds.cache.size}`);
}