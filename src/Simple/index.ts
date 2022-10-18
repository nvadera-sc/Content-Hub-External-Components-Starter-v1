export default function createExternalRoot(rootElement: HTMLElement) {
	return {
		render(_: any) {
			rootElement.innerHTML = "<h1>Hello Simple!</h1>";
		},
		unmount() {
			rootElement.innerHTML = "";
		}
	}
};