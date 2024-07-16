import MiniAlbum from "./mini-album";
import { all_albums } from "../lib/all-albums";

export default function Sidebar() {
  return (
    <div className="w-[20vw] min-w-[8.5rem] h-screen p-3">
      <h2 className="text-4xl p-4 h-20">Your Albums</h2>
      <div className="overflow-auto h-[calc(100vh-6.5rem)]">
        {all_albums.map((album) => (
          <MiniAlbum album={album} />
        ))}
      </div>
    </div>
  );
}
