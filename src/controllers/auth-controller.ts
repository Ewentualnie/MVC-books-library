import {NextFunction, Request, Response} from "express";
import basicAuth from "basic-auth";
import adminUser from "../models/administrator";

const authCheck = (req: Request, res: Response, next: NextFunction) => {
    const user = basicAuth(req);
    if (!user || user.name != adminUser.name || user.pass != adminUser.pass) {
        res.set('WWW-Authenticate', 'Basic');
        res.status(401).send();
        return;
    }
    next();
}

export default authCheck