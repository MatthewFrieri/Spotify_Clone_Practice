import { AlbumType } from "../lib/definitions";

export default function Banner({ album }: { album: AlbumType }) {
  return (
    <>
      <div
        className="absolute h-[32rem] w-full -z-10"
        style={{ background: `linear-gradient(${album.color}, 60%, #09090b)` }}
      ></div>
      <span className="p-6 pt-16 h-80 flex">
        <img
          src={album.cover_url}
          className="mr-6 h-full rounded-md drop-shadow"
        />
        <div className="mt-auto">
          <p>Album</p>
          {album.name.length < 24 ? (
            <h1 className="text-8xl font-semibold capitalize">{album.name}</h1>
          ) : (
            <h1 className="text-7xl font-semibold capitalize">{album.name}</h1>
          )}

          <p className="capitalize">{album.author}</p>
        </div>
      </span>
    </>
  );
}
