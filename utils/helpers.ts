import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { environment } from '../../environment';
import { ICanActivate } from '../interfaces/core.interface';

export default class AuthHelpers {
    public static canActivateConfig: ICanActivate;

    public static generateToken(userId, userRole) {
        return jwt.sign({type: 'main', userId, userRole}, environment.jwtSecret, { expiresIn: '4 hours' });
    }

    public static generateRefreshToken() {
        return jwt.sign({type: 'refresh'}, environment.jwtRefreshSecret, { expiresIn: '4 hours' });
    }

    public static hashPassword(password) {
        return bcrypt.hash(password, 10);
    }

    private static getConfigFile<T>(fieldName: string, fileName: string): T {
        if (!AuthHelpers[fieldName]) {
            const file = require(fileName);
            AuthHelpers[fieldName] = file;
        }

        return AuthHelpers[fieldName];
    }

    public static getCanActivate(): ICanActivate {
        return AuthHelpers.getConfigFile('canActivateConfig', '../config/can-activate.json');
    }
}