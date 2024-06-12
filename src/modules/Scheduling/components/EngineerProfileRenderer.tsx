import { rowTypes } from "../scheduling.types";

function EngineerProfileRenderer({ data }: any) {
  const { engineerAvailable } = data;

  const limitedNames = Array.isArray(engineerAvailable)
    ? engineerAvailable.slice(0, 3)
    : [];

  return (
    <div className="flex items-center space-x-[-8px] relative top-1/2 -translate-y-1/2">
      {limitedNames.map((name, index) => {
        return (
          <div
            key={index}
            className={`flex items-center justify-center w-8 h-8 font-bold text-white rounded-full border-2 border-white ${
                index === 0
                  ? "bg-primary"
                  : index === 1
                  ? "bg-ideaColor"
                  : "bg-blue-500"
              }`}
            title={name}
          >
            {name.charAt(0).toUpperCase()}
          </div>
        );
      })}
    </div>
  );
}

export default EngineerProfileRenderer;
