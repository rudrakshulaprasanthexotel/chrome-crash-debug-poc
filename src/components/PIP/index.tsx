import { useRef, useState } from "react";
import { type Root } from "react-dom/client";
import { isPipSupported, mountReactTreeToPIP } from "./functions"
import MicText from "../MicText";


const PIP = () => {
    const [isPipOpen, setIsPipOpen] = useState(false);
    const pipWindowRef = useRef<Window | null>(null);
    const pipRootRef = useRef<Root | null>(null);

    const openPip = async () => {
        if (isPipSupported()) {
            try {
                const pipWindow = await window.documentPictureInPicture?.requestWindow();
                if (!pipWindow) return;
                pipWindow.addEventListener("unload", closePip)
                const root = mountReactTreeToPIP(pipWindow, <MicText />);
                pipWindowRef.current = pipWindow;
                pipRootRef.current = root;
                setIsPipOpen(true);
            } catch (error) {
                console.error("Error opening PIP", error)
            }
        } else {
            console.error("PIP is not supported in this browser")
        }
    }

    const closePip = () => {
        if (pipRootRef.current) {
            pipRootRef.current.unmount();
            pipRootRef.current = null;
        }
        if (pipWindowRef.current) {
            pipWindowRef.current.close();
            pipWindowRef.current = null;
        }
        setIsPipOpen(false);
    }

    const handlePipToggle = () => {
        if (isPipOpen) closePip();
        else openPip();
    };

    return (
        <div>
            <button onClick={handlePipToggle}>{isPipOpen ? "Close" : "Open"} PIP</button>
        </div>
    )
}

export default PIP