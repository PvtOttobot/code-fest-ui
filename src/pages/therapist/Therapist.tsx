import {Appointment} from "./appointment/Appointment.tsx";
import {useState} from "react";

const Therapist = () => {
    const apptsFake = [
        {name:'Safia Young',date:'11/11/11', time:'13:00', postcode:'A12 3BC', large: false},
        {name:'Natalia Combs',date:'11/11/11',time:'14:00', postcode:'A12 3BC', large: false},
        {name:'Johnathan Prince',date:'11/11/11',time:'14:30', postcode:'A12 3BC', large: false},
        {name:'Safia Young',date:'11/11/11', time:'13:00', postcode:'A12 3BC', large: false},
        {name:'Natalia Combs',date:'11/11/11',time:'14:00', postcode:'A12 3BC', large: false},
        {name:'Johnathan Prince',date:'11/11/11',time:'14:30', postcode:'A12 3BC', large: false},
        {name:'Safia Young',date:'11/11/11', time:'13:00', postcode:'A12 3BC', large: false},
        {name:'Natalia Combs',date:'11/11/11',time:'14:00', postcode:'A12 3BC', large: false},
        {name:'Johnathan Prince',date:'11/11/11',time:'14:30', postcode:'A12 3BC', large: false},
    ]
    const [appts, setAppts] = useState(apptsFake);

    const expand = (id: string) => {
        console.log("TODO expanded this id "+id)
        setAppts([
            {name:'Safia Young',date:'11/11/11', time:'13:00', postcode:'A12 3BC', large: true},
        ])
    }
    const collapse = () => {
        console.log("TODO collapsed this")
        setAppts(apptsFake)
    }
    return(<div className="p-4 bg-amber-white h-screen space-y-6 overflow-auto">
        {appts.map((appt) => (
            <Appointment
                date={appt.date}
                name={appt.name}
                time={appt.time}
                postcode={appt.postcode}
                expand={expand}
                collapse={collapse}
                large={appt.large}
            ></Appointment>
        ))}
    </div>);
}

export { Therapist };