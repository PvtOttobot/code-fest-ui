import {Appointment} from "./appointment/Appointment.tsx";

const Therapist = () => {
    const appts = [
        {name:'Safia Young',date:'11/11/11', time:'17:00'},
        {name:'Natalia Combs',date:'11/11/11',time:'10:00'},
        {name:'Johnathan Prince',date:'11/11/11',time:'09:30'},
    ]
        appts.sort(function (a, b) {
        return a.time.localeCompare(b.time);
    });
    
    console.log(appts);
    
    return(<div className="p-4 bg-white h-screen space-y-6">
        {
            appts.map((appt) => (
                <>
                
                    <Appointment date={appt.date} name={appt.name} time={appt.time}></Appointment>
                </>

            ))
        }
    </div>);
}

export { Therapist };