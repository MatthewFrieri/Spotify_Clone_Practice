import { fetchAlbumFromId } from "@/app/lib/data";
import Banner from "@/app/ui/banner";
import TrackList from "@/app/ui/track-list";
import { notFound } from "next/navigation";

export default function Page({ params }: { params: { albumId: string } }) {
  const id = params.albumId;
  const album = fetchAlbumFromId(id);

  if (!album) {
    notFound();
  }

  return (
    <div className="flex flex-col flex-grow h-screen overflow-auto relative">
      <Banner album={album} />
      <TrackList album={album} />
    </div>
  );
}
