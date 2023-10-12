import { TherapistAppointments } from "./TherapistAppointments";

const TherapistAppointment = () => {

    const therapyAppointment = [
        {therapistName: 'Therapist 1', therapistApptDate:'12/10/2023', therapistApptStartTime:'15:00', therapistApptEndTime: '17:00', therapistApptLocation: 'X-Y', therapistApptStatus: 'Not checked in'},
        {therapistName: 'Therapist 2', therapistApptDate:'12/10/2023', therapistApptStartTime:'11:00', therapistApptEndTime: '13:00', therapistApptLocation: 'X-Y', therapistApptStatus: 'Checked in'},
        {therapistName: 'Therapist 3', therapistApptDate:'12/10/2023', therapistApptStartTime:'09:00', therapistApptEndTime: '11:00', therapistApptLocation: 'X-Y', therapistApptStatus: 'Extended'},
        {therapistName: 'Therapist 4', therapistApptDate:'11/10/2023', therapistApptStartTime:'15:00', therapistApptEndTime: '17:00', therapistApptLocation: 'X-Y', therapistApptStatus: 'Checked out'},
    ]
        therapyAppointment.sort(function(a,b){
            return a.therapistApptStartTime.localeCompare(b.therapistApptStartTime);
    });

    console.log(therapyAppointment);
    return(
        <div className="divide-y divide-slate-100">
            <div className="flex-auto flex space-x-4 pr-4">
                <button className="flex-none w-1/2 h-12 uppercase font-medium tracking-wider bg-slate-900 text-white" type="submit">
                Buy now
                </button>
                <button className="flex-none w-1/2 h-12 uppercase font-medium tracking-wider border border-slate-200 text-slate-900" type="button">
                Add to bag
                </button>
            </div>
        </div>
    );
}

export {TherapistAppointment}