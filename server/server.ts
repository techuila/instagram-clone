import { Elysia } from 'elysia';
import { swagger } from '@elysiajs/swagger';
import { profileRoute } from './controller/ProfilesController';

const app = new Elysia().use(swagger()).use(profileRoute).listen(8000);

console.log(
	`🦊 Elysia is running at ${app?.server?.hostname}:${app?.server?.port}`
);
