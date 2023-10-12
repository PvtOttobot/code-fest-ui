interface AppointmentProps {
    name: string;
    date: string;
    time: string;
}

const Appointment = (props: AppointmentProps) => {
    return(
        <div className="p-4 bg-blue-300">
            <p className="text-blue-950 font-bold">
                Name: {props.name}
            </p>
            <p className="text-blue-950 font-bold">
                Date: {props.date}
            </p>
            <p className="text-blue-950 font-bold">
                Time: {props.time}
            </p>
            <button text-align:center onClick={() => console.log("CHECKIN COMPLETE")}>Click me</button>
        </div>
    );
}

export { Appointment };
