import { Elysia } from 'elysia';

export abstract class Controller {
	public app: Elysia;
	constructor(app: Elysia) {
		this.app = app;

		this.setup();
	}

	abstract setup(): void;
}
