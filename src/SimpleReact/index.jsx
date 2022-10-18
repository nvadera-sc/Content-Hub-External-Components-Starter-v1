import ReactDOM from "react-dom";
import React from "react";

export default function createExternalRoot (container) {
    return {
        render() {
            ReactDOM.render(
                <div>Hello World</div>,
                container
            );
        },
        unmount() {
            ReactDOM.unmountComponentAtNode(container);
        }
    }
}