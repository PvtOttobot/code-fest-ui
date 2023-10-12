import {Appointment} from "./appointment/Appointment.tsx";
import {useEffect, useState} from "react";
import {iAppointment} from "../../api/interfaces/Appointment.tsx";
import {ApiService} from "../../api/ApiService.tsx";

const Therapist = () => {
    const [appts, setAppts] = useState<iAppointment[]>([
                {name:'Safia Young',date:'11/11/11', time:'13:00'},
                {name:'Natalia Combs',date:'11/11/11',time:'14:00'},
                {name:'Johnathan Prince',date:'11/11/11',time:'14:30'},
            ]
        );
    useEffect(() => {
        ApiService.getSessions().then(
            (result) => {setAppts(result)}
        );
    })
    return(<div className="p-4 bg-white h-screen space-y-6">
        {
            appts.map((appt) => (
                <Appointment date={appt.date} name={appt.name} time={appt.time}></Appointment>
            ))
        }
    </div>);
}

export { Therapist };