import {Appointment} from "./appointment/Appointment.tsx";

const Therapist = () => {
    const appts = [
        {name:'Safia Young',date:'11/11/11', time:'13:00', postcode:'A12 3BC'},
        {name:'Natalia Combs',date:'11/11/11',time:'14:00', postcode:'A12 3BC'},
        {name:'Johnathan Prince',date:'11/11/11',time:'14:30', postcode:'A12 3BC'},
        {name:'Safia Young',date:'11/11/11', time:'13:00', postcode:'A12 3BC'},
        {name:'Natalia Combs',date:'11/11/11',time:'14:00', postcode:'A12 3BC'},
        {name:'Johnathan Prince',date:'11/11/11',time:'14:30', postcode:'A12 3BC'},
        {name:'Safia Young',date:'11/11/11', time:'13:00', postcode:'A12 3BC'},
        {name:'Natalia Combs',date:'11/11/11',time:'14:00', postcode:'A12 3BC'},
        {name:'Johnathan Prince',date:'11/11/11',time:'14:30', postcode:'A12 3BC'},
    ]
    return(<div className="p-4 bg-amber-white h-screen space-y-6 overflow-auto">
        {appts.map((appt) => (
            <Appointment date={appt.date} name={appt.name} time={appt.time} postcode={appt.postcode}></Appointment>
        ))}
    </div>);
}

export { Therapist };