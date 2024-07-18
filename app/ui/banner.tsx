import { AlbumType } from "../lib/definitions";

export default function Banner({ album }: { album: AlbumType }) {
  return (
    <span className="flex justify-evenly bg-gradient-to-b from-slate-500 to-slate-800 p-4">
      <img src={album.cover_url} className="w-52 rounded-lg  drop-shadow" />
      <h1>{album.name}</h1>
    </span>
  );
}
