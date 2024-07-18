
export type AlbumType = {
    id: string;
    name: string;
    author: string;
    cover_url: string;
    color: string;
    tracks: {
                title: string;
                plays: string;
                time: string;
            }[];
}
