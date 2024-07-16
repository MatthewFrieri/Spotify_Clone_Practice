import { AlbumType } from "../lib/definitions";

export default function MiniAlbum({ album }: { album: AlbumType }) {
  return (
    <div className="p-4 rounded-xl hover:bg-slate-600">
      <div className="flex h-16 overflow-hidden">
        <img className="rounded-md" src={album.cover_url} alt={album.name} />
        <div className="pl-3 overflow-hidden">
          <h2 className="text-xl uppercase truncate">{album.name}</h2>
          <h4 className="text-slate-400 capitalize truncate">{album.author}</h4>
        </div>
      </div>
    </div>
  );
}