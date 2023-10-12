import {ArrowsPointingOutIcon} from "@heroicons/react/24/outline";

interface AppointmentProps {
    name: string;
    date: string;
    time: string;
    postcode: string;
}

const Appointment = (props: AppointmentProps) => {
    return(
        <button className="p-4 bg-blue-300 w-full flex flex-row gap-4">
            <div className="grow text-left">
                <p className="text-blue-950 font-bold">
                    {props.name}
                </p>
                <p className="text-blue-950 font-bold">
                    {props.postcode}
                </p>
                <p className="text-blue-950 font-bold">
                    {props.date}
                </p>
                <p className="text-blue-950 font-bold">
                    {props.time}
                </p>
            </div>
            <div className="">
                <p className="hi">
                    <span className="hidden sm:inline">Expand </span>
                    <ArrowsPointingOutIcon className="h-6 inline" ></ArrowsPointingOutIcon>
                </p>
            </div>
        </button>
    );
}

export { Appointment };