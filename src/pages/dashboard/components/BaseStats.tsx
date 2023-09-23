import { Progress } from "@/components";
import { baseStats } from "@/constants";

export const BaseStats = () => {
  return (
    <div className="grid lg:grid-cols-4 grid-cols-2">
      {baseStats.map((e) => (
        <div className="px-5 py-6 overflow-hidden space-y-3" key={e.name}>
          <h3 className="font-bold text-2xl text-ellipsis whitespace-nowrap overflow-hidden">
            {`${e.amount} ${e.currency}`}
          </h3>
          <span className="flex gap-3">
            <div className="p-[6px] rounded-lg w-fit h-fit" style={{ backgroundColor: e.color }}>
              <div className="h-2 w-2 rounded-full bg-white" />
            </div>
            <p className="text-sm text-gray-100">{e.name}</p>
          </span>
          <Progress value={e.percent} fillColor={e.color} />
        </div>
      ))}
    </div>
  );
};
