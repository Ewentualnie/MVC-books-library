import cron from 'node-cron';
import {createDBBackup, deleteMarkedBooks} from "../services/cron-service";
import {Schedule} from "../models/types";

const runCron: Schedule = {
    scheduleBackup: () => cron.schedule("0 0 * * *", createDBBackup),
    scheduleDelete: () => cron.schedule('0 2 * * *', deleteMarkedBooks)
}

export default runCron;