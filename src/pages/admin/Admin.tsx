import { Navbar } from '../../shared/components/Navbar.tsx';
import { TherapistAppointment } from './components/TherapistAppointment.tsx';

const getStatusWeight = (status: string) => {
    switch (status) {
        case 'Emergency':
            return 1;
        case 'Extended':
            return 2;
        case 'Checked in':
            return 3;
        case 'Not checked in':
            return 4;
        case 'Checked out':
            return 5;
        default:
            return 6; // default weight
    }
};

const durationToMinutes = (duration: string) => {
    const [hours, minutes] = duration.split(':').map(Number);
    return hours * 60 + minutes;
};

const Admin = () => {
    const therapyAppointments = [
        {
            name: 'Therapist 1',
            clientName: 'Client 1',
            dateTime: '12/10/2023',
            duration: '01:00',
            location: 'X-Y',
            status: 'Not checked in',
        },
        {
            name: 'Therapist 2',
            clientName: 'Client 2',
            dateTime: '12/10/2023',
            duration: '02:00',
            location: 'X-Y',
            status: 'Checked in',
        },
        {
            name: 'Therapist 3',
            clientName: 'Client 3',
            dateTime: '12/10/2023',
            duration: '00:30',
            location: 'X-Y',
            status: 'Extended',
            extendedBy: '00:10',
        },
        {
            name: 'Therapist 4',
            clientName: 'Client 4',
            dateTime: '11/10/2023',
            duration: '01:15',
            location: 'X-Y',
            status: 'Checked out',
        },
        {
            name: 'Therapist 4',
            clientName: 'Client 4',
            dateTime: '11/10/2023',
            duration: '01:15',
            location: 'X-Y',
            status: 'Emergency',
        },
    ];

    therapyAppointments.sort((a, b) => {
        const statusWeightA = getStatusWeight(a.status);
        const statusWeightB = getStatusWeight(b.status);

        if (statusWeightA !== statusWeightB) {
            return statusWeightA - statusWeightB;
        }

        return durationToMinutes(a.duration) - durationToMinutes(b.duration);
    });

    return (
        <div className="flex min-h-screen font-sans">
            <Navbar />
            <div className="container mx-auto px-4 mt-20">
                <div className="grid grid-cols-12 gap-4 auto-rows-max">
                    {therapyAppointments.map((appt) => {
                        return (
                            <TherapistAppointment
                                name={appt.name}
                                clientName={appt.clientName}
                                dateTime={appt.dateTime}
                                duration={appt.duration}
                                location={appt.location}
                                status={appt.status}
                                extendedBy={appt.extendedBy}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export { Admin };
