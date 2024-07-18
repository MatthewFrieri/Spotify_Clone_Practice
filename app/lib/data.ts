import { all_albums } from "./all-albums";
import { AlbumType } from "./definitions";

export function fetchAlbumFromId(id: string): AlbumType | null {
    
    let found_album = null 

    all_albums.forEach((album) => {
        if (album.id === id) {
            found_album = album
        }
    })

    return found_album
}