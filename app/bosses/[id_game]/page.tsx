import { Data } from "@/app/types/Data";
import { promises as fs } from "fs";
import CardBoss from "@/app/components/CardBoss";

interface pageProps {
  params: { id_game: keyof Data };
}

const title_dictionary = {
  artorias: "Artorias of the Ass",
  "sunken-king": "Crown of the Sunken King",
  "old-iron-king": "Crown of the Old Iron King",
  "ivory-king": "Crown of the Ivory King",
  ariandel: "Ashes of Ariandel",
  "ringed-city": "The Ringed City",
};

export default async function BossesList({ params }: pageProps) {
  const file = await fs.readFile(process.cwd() + "/data/db.json", "utf8");
  const data: Data = JSON.parse(file);
  const game = data[params.id_game];
  const game_no_dlc = game["no-dlc"];
  const game_keys_dlc = Object.keys(game["dlc"]);

  return (
    <>
      <h1>Main Game</h1>
      <ul className="grid justify-center justify-items-center grid-cols-full sm:grid-cols-autofill gap-8 p-8 ">
        {game_no_dlc.map((boss) => (
          <CardBoss
            key={boss.id}
            src={boss.image}
            name={boss.name}
            location={boss.location}
          />
        ))}
      </ul>
    </>
  );
}
