
export const stopAudioTracks = (stream: MediaStream) => {
    stream.getAudioTracks().forEach(track => track.stop());
};
