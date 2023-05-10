import cron from 'node-cron';
import {createDBBackup, deleteMarkedBooks} from "../services/cron-service";

cron.schedule("0 0 * * *", createDBBackup)
cron.schedule('0 2 * * *', deleteMarkedBooks)