import {iAppointment} from "../../../api/interfaces/Appointment.tsx";

interface AppointmentProps extends iAppointment {}

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
        </div>
    );
}

export { Appointment };