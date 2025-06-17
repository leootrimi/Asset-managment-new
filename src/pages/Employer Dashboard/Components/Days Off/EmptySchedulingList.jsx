import { TreePalmIcon } from "lucide-react";

export default function EmptySchedulingList({
     icon: Icon = TreePalmIcon, 
     title = "You have not scheduled holiday!",
      description = "Go to Days off and schedule your next holiday" 
    }) {
    return (
        <div className="w-full bg-gradient-to-b to-gray-100 py-20 flex justify-center rounded-lg border border-gray-300 ">
            <div className="flex justify-center flex-col gap-1">
                <div className="w-full flex justify-center">
                    <Icon size={25} color="green" />
                </div>
                <h1 className="text-md font-bold flex justify-center">{title}</h1>
                <h1 className="text-md font-light">{description}</h1>
            </div>
        </div>
    );
}