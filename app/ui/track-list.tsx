import { AlbumType } from "../lib/definitions";
import { PlayIcon } from "@heroicons/react/24/solid";

export default function TrackList({ album }: { album: AlbumType }) {
  return (
    <div className="flex-grow bg-zinc-950 bg-opacity-30 p-6">
      <table className="w-full text-zinc-400">
        <thead className="border-b border-zinc-600">
          <tr className="font-thin">
            <th className="pb-2 font-normal w-16 text-center">#</th>
            <th className="pb-2 font-normal text-left">Title</th>
            <th className="pb-2 font-normal text-right">Popularity</th>
            <th className="pb-2 font-normal w-80 text-right pr-4">Length</th>
          </tr>
        </thead>
        <tbody className="">
          {album.tracks.map((track, index) => (
            <tr className="h-[3.75rem] hover:bg-zinc-800 group">
              <td className="h-[3.75rem] flex justify-center items-center">
                <PlayIcon className="absolute w-5 opacity-0 group-hover:opacity-100" />
                <p className="opacity-100 group-hover:opacity-0">{index + 1}</p>
              </td>

              <td className="text-left">
                <div className="flex flex-col">
                  <p className="text-white">{track.title}</p>
                  <p className="text-sm">{track.artists}</p>
                </div>
              </td>
              <td className="text-right">{track.popularity}</td>
              <td className="text-right pr-4">{track.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
