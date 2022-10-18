export default function createExternalRoot(rootElement) {
	return {
		isInitialized: false,
        entity: null,

		render(e) {
            rootElement.innerHTML = "Hello world!"
		},
		unmount() {
			rootElement.innerHTML = "";
		}
	}
};