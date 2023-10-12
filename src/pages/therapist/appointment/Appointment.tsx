import { ArrowsPointingOutIcon } from '@heroicons/react/24/outline';
import { ArrowsPointingInIcon } from '@heroicons/react/20/solid';
import { useEffect, useState } from 'react';

interface AppointmentProps {
    name: string;
    date: string;
    time: string;
    postcode: string;
    large?: boolean;
    expand: (id: string) => {};
    collapse: () => {};
}

const Appointment = (props: AppointmentProps) => {
    const [counter, setCounter] = useState(3000);
    const [checkedIn, setCheckedIn] = useState(false);

    useEffect(() => {
        checkedIn &&
            counter > 0 &&
            setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter, checkedIn]);
    const expand = () => {
        props.expand(props.name);
    };
    const emergencyAlert = () => {
        confirm('WARNING: Send an Emergency Alert now?');
    };

    if (!props.large) {
        return (
            <button
                onClick={expand}
                className="bg-gray-100 border-gray-100 border-2 m-1 p-2 block w-full col-span-12 col-start-1 shadow rounded-md flex flex-row"
            >
                <div className="grow text-left">
                    <div className="text-lg pb-2">{props.name}</div>
                    <div>{props.postcode}</div>
                    <div>{props.date}</div>
                    <div>{props.time}</div>
                </div>
                <div>
                    <p>
                        <span className="hidden sm:inline">Expand </span>
                        <ArrowsPointingOutIcon className="h-6 inline"></ArrowsPointingOutIcon>
                    </p>
                </div>
            </button>
        );
    } else {
        return (
            <div className="bg-gray-100 border-gray-100 border-2 m-1 p-2 block w-full col-span-12 col-start-1 shadow rounded-md h-full flex flex-col font-sans">
                <div className="w-full flex flex-row gap-4 grow">
                    <div className="grow text-left flex flex-col gap-4">
                        <h1 className="text-2xl font-bold">{props.name}</h1>
                        <div>
                            12 Fake Street
                            <br />
                            Glasgow
                            <br />
                            {props.postcode}
                        </div>
                        <div>
                            {props.date}
                            <br />
                            {props.time}
                            <br />
                        </div>
                    </div>
                    <div className="">
                        <button onClick={props.collapse}>
                            <span className="hidden sm:inline">Minimize </span>
                            <ArrowsPointingInIcon className="h-6 inline"></ArrowsPointingInIcon>
                        </button>
                    </div>
                </div>
                {checkedIn && (
                    <div className="text-center text-4xl">
                        <p>
                            {Math.floor(counter / 60)}:
                            {Math.floor(counter % 60) === 0
                                ? '00'
                                : Math.floor(counter % 60)}{' '}
                        </p>
                    </div>
                )}

                {!checkedIn && (
                    <button
                        className="bg-blue-600 text-white p-2 rounded-md mb-2"
                        onClick={() => setCheckedIn(true)}
                    >
                        Check In
                    </button>
                )}
                {checkedIn && (
                    <button
                        className="bg-white text-black p-2 rounded-md"
                        onClick={() => setCheckedIn(false)}
                    >
                        Check Out
                    </button>
                )}
                <div className="flex flex-row gap-4">
                    <button
                        className="bg-red-700 text-white p-2 w-full rounded-md"
                        onClick={emergencyAlert}
                    >
                        Emergency
                    </button>
                    <button className="bg-blue-600 text-white p-2 w-full rounded-md">
                        More
                    </button>
                </div>
            </div>
        );
    }
};

export { Appointment };
