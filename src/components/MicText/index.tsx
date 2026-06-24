import { useEffect } from "react"
import { stopAudioTracks } from "./functions";

const MicText = () => {

    useEffect(() => {
        console.count("MicText mounted");
        return () => console.count("MicText unmounted");
    }, []);

    // Create and clear audio tracks immediately
    // Only once when component mounts
    useEffect(() => {
        (async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                stopAudioTracks(stream);
            } catch (error) {
                console.error("Error getting user media", error);
            }
        })();
    }, []);


    // Create and clear audio tracks immediately
    // Every time whenever permission is changed
    // useEffect(() => {
    //     async function createAndClearAudioTracks() {
    //         try {
    //             const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    //             stopAudioTracks(stream);
    //         } catch (error) {
    //             console.error("Error getting user media", error);
    //         }
    //     }

    //     createAndClearAudioTracks();

    //     let permissionStatus: PermissionStatus | null = null;

    //     const handlePermissionChange = (event: Event) => {
    //         console.log("Microphone permission changed", event);
    //         createAndClearAudioTracks();
    //     };

    //     navigator.permissions.query({ name: "microphone"}).then(result => {
    //         permissionStatus = result;
    //         result.addEventListener("change", handlePermissionChange);
    //     });

    //     return () => {
    //         permissionStatus?.removeEventListener("change", handlePermissionChange);
    //     };
    // }, []);


    // Create and keep audio tracks
    // re-create audio tracks – keep previous audio tracks
    // useEffect(() => {
    //     async function createAudioTracks() {
    //         try {
    //             await navigator.mediaDevices.getUserMedia({ audio: true });
    //         } catch (error) {
    //             console.error("Error getting user media", error);
    //         }
    //     }

    //     createAudioTracks();

    //     let permissionStatus: PermissionStatus | null = null;

    //     const handlePermissionChange = (event: Event) => {
    //         console.log("Microphone permission changed", event);
    //         createAudioTracks();
    //     };

    //     navigator.permissions.query({ name: "microphone"}).then(result => {
    //         permissionStatus = result;
    //         result.addEventListener("change", handlePermissionChange);
    //     });

    //     return () => {
    //         permissionStatus?.removeEventListener("change", handlePermissionChange);
    //     };
    // }, []);


    // Create and keep audio tracks
    // re-create audio tracks – clear previous audio tracks
    // useEffect(() => {
    //     let stream: MediaStream | null = null;
    //     async function createAudioTracks() {
    //         if (stream) stopAudioTracks(stream);
    //         try {
    //             stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    //         } catch (error) {
    //             console.error("Error getting user media", error);
    //         }
    //     }

    //     createAudioTracks();

    //     let permissionStatus: PermissionStatus | null = null;

    //     const handlePermissionChange = (event: Event) => {
    //         console.log("Microphone permission changed", event);
    //         createAudioTracks();
    //     };

    //     navigator.permissions.query({ name: "microphone"}).then(result => {
    //         permissionStatus = result;
    //         result.addEventListener("change", handlePermissionChange);
    //     });

    //     return () => {
    //         permissionStatus?.removeEventListener("change", handlePermissionChange);
    //     };
    // }, []);

    return (
        <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>Mic Text</div>
    )
}

export default MicText
