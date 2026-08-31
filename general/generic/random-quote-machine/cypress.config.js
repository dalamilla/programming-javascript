import { defineConfig } from "cypress";

export default defineConfig({
	allowCypressEnv: false,

	e2e: {
		setupNodeEvents(_on, config) {
			return config;
		},
		baseUrl: "http://localhost:5173",
		video: false,
	},
});
