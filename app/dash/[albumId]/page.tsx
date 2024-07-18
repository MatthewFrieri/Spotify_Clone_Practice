import { fetchAlbumFromId } from "@/app/lib/data";
import Banner from "@/app/ui/banner";
import { notFound } from "next/navigation";

export default function Page({ params }: { params: { albumId: string } }) {
  const id = params.albumId;
  const album = fetchAlbumFromId(id);

  if (!album) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full h-full">
      <Banner album={album} />
    </div>
  );
}
