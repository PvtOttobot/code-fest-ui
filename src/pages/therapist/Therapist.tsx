import {Appointment} from "./appointment/Appointment.tsx";
import {GeoLoc} from "./appointment/GeoLocation.tsx";
import {MyComponent} from "./appointment/Button.tsx";

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

    const locationtest = navigator.geolocation.getCurrentPosition(position => {
        console.log(position.coords.latitude)
        console.log(position.coords.longitude)
    })

    return(
        <div className="p-4 bg-white h-screen space-y-6">
        {
            appts.map((appt) => (
                <>
                
                    <Appointment date={appt.date} name={appt.name} time={appt.time}></Appointment>
                    <p>HELLOOO</p>
                </>
            ))
            
        }
        <div>
            <p>Lat</p>
            <p>Long</p>
        </div>
    </div>
    );
}

export { Therapist };