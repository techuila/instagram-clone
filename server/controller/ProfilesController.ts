import { Controller } from '@utils/controller';
import { Context, Elysia } from 'elysia';

class ProfilesController extends Controller {
	constructor(app: Elysia) {
		super(app);
	}

	setup() {
		this.app.group('/profile', (app) =>
			app
				.get('/:id', this.getProfile)
				.get('/list-random', this.getRandomListProfile)
		);
	}

	getProfile(context: Context) {
		return `This is a profile ${context.params?.id}`;
	}

	getRandomListProfile() {}
}

export const profileRoute = (app: Elysia) => {
	const profilesController = new ProfilesController(app);

	return profilesController.app;
};
