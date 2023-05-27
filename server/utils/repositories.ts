import { SupabaseClient, createClient } from '@supabase/supabase-js';

let SUPABASE_KEY: string;
if (process.env.SUPABASE_KEY) {
	SUPABASE_KEY = process.env.SUPABASE_KEY;
} else {
	throw Error('Environment variable SUPABASE_KEY should exist.');
}

export abstract class Repository {
	#supabaseUrl = 'https://hjmihwfnxjwdkhlkohwb.supabase.co';
	#supabaseKey = SUPABASE_KEY;
	supabase: SupabaseClient;

	constructor() {
		this.supabase = createClient(this.#supabaseUrl, this.#supabaseKey);
	}
}
