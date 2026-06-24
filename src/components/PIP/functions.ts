import { createRoot } from "react-dom/client";

interface DocumentPictureInPicture {
	requestWindow(options?: {
		width?: number;
		height?: number;
		disallowReturnToOpener?: boolean;
		preferInitialWindowPlacement?: boolean;
	}): Promise<Window>;
	readonly window: Window | null;
}

declare global {
	interface Window {
		documentPictureInPicture?: DocumentPictureInPicture;
	}
}

export const isPipSupported = () => {
    return (
        typeof window !== 'undefined'
        && 'documentPictureInPicture' in window
        && typeof window.documentPictureInPicture?.requestWindow === 'function'
    );
};

export const mountReactTreeToPIP = (pipWindow: Window, reactElement: React.JSX.Element) => {
	pipWindow.document.body.style.margin = "0";
	pipWindow.document.body.style.padding = "0";
	pipWindow.document.body.style.height = "100vh";
	const root = createRoot(pipWindow.document.body);
	root.render(reactElement);
	return root;
};
