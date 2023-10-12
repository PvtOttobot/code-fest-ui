import { useEffect, useState } from 'react';

interface TherapistAppointmentsProps {
    name: string;
    clientName: string;
    dateTime: string;
    duration: string;
    location: string;
    status: string;
    extendedBy?: string;
}

const getStatusColor = (status: string) => {
    switch (status) {
        case 'Emergency':
            return 'bg-red-500 animate-pulse';
        case 'Extended':
            return 'bg-yellow-500';
        case 'Checked in':
            return 'bg-green-500';
        case 'Not checked in':
            return 'bg-gray-400';
        case 'Checked out':
            return 'bg-blue-500';
        default:
            return 'bg-gray-300'; // default color
    }
};

const TherapistAppointment = ({
    name,
    clientName,
    dateTime,
    duration,
    location,
    status,
    extendedBy,
}: TherapistAppointmentsProps) => {
    const convertToSeconds = (time: string) => {
        const [hours, minutes] = time.split(':').map(Number);
        return (hours * 60 + minutes) * 60; // Converts "hh:mm" to total seconds
    };

    const initialDuration = convertToSeconds(duration);

    const [remainingTime, setRemainingTime] = useState(initialDuration);

    useEffect(() => {
        if (
            !(
                status === 'Checked in' ||
                status === 'Extended' ||
                status === 'Emergency'
            )
        )
            return;

        const intervalId = setInterval(() => {
            setRemainingTime((prevTime) => {
                if (prevTime > 0) return prevTime - 1;
                clearInterval(intervalId);
                return 0;
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, [status]);

    const displayTime = () => {
        const hours = Math.floor(remainingTime / 60);
        const minutes = remainingTime % 60;
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(
            2,
            '0',
        )}`;
    };

    console.log(extendedBy);

    return (
        <div
            key={name}
            className="bg-gray-100 border-gray-100 border-2 m-1 p-2 block w-full col-span-12 col-start-1 shadow rounded-md"
        >
            <div className="grid grid-cols-2 gap-1">
                <div className="col-start-1">
                    <div className="text-lg pb-2">{name}</div>
                    <div>{clientName}</div>
                    <div>{dateTime}</div>
                    <div>{location}</div>
                </div>
                <div className="col-start-2 flex flex-col items-center justify-center">
                    <div
                        className={`top-0 right-0 w-4 h-4 rounded-full ${getStatusColor(
                            status,
                        )}`}
                    ></div>
                    <div className="block pt-2 text-2xl">{displayTime()}</div>
                    {extendedBy ? (
                        <div className="block pt-0.5 text-md">
                            {'+' + extendedBy}
                        </div>
                    ) : null}
                    <div className="block pt-1">{status}</div>
                </div>
            </div>
        </div>
    );
};

export { TherapistAppointment };
