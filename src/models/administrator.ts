import {Admin} from "./types";

const adminUser: Admin = {
    name: process.env.adminName || 'admin',
    pass: process.env.adminPass || 'password'
};

export default adminUser