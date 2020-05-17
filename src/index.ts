import { Client } from 'dolphin-discord';
import { config } from 'dotenv';

config(); // Configures environment variables

const DOLPHIN_CONFIG = require('../dolphin_config.json');

const client = new Client(DOLPHIN_CONFIG);

client.login(process.env.TOKEN);