import { Data, Example } from "@/app/types/Data";
import { promises as fs } from "fs";



interface pageProps {
  params: { id_game: string };
}
export default async function BossesList({ params }: pageProps) {

  const file = await fs.readFile(process.cwd() + "/data/db.json", "utf8");
  const data: Data = JSON.parse(file);

  return (
    <>
      <p>asldkj</p>
    </>
  );
}
