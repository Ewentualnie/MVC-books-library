import cron from 'node-cron';
import {createDBBackup, deleteMarkedBooks, removeBackups} from "../services/cron-service";
import {Schedule} from "../models/types";

const runCron: Schedule = {
    scheduleCreateBackup: () => cron.schedule("0 1 * * *", createDBBackup),
    scheduleDeleteBooks: () => cron.schedule('0 2 * * *', deleteMarkedBooks),
    scheduleRemoveBackups: () => cron.schedule('0 0 1 * *', removeBackups)
}

export default runCron;