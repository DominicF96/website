import * as React from 'react';

export interface ISpotifyPlaylistProps {
    className: string;
}

export function SpotifyPlaylist(props: ISpotifyPlaylistProps) {
    const { className } = props;
    return (
        <iframe data-testid="embed-iframe" style={{
            borderRadius: "16px"
        }}
            className={className ? className : ""}
            src="https://open.spotify.com/embed/playlist/5lnvbxkavgfo9XDFSbI5Jz?utm_source=generator&theme=0"
            width="100%"
            height="360"
            allowFullScreen={false}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
        ></iframe >
    );
}
