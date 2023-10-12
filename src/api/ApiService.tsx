import urls from "./urls.json"
import axios from "axios";
import {iAppointment} from "./interfaces/Appointment.tsx";

const ApiService = {
    getSessions: (therapistId="", adminId="", date=""): Promise<iAppointment[]> => {
        return axios.post(urls.sessions, {
            "therapist_id": therapistId,
            "admin_id": adminId,
            "date": date,
        });
    }
}

export { ApiService };