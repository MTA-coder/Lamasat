import { IBranch } from "./branch";
import { IDepartment } from "./department";

export interface IUser {
    id: number;
    username: string;
    email: string;
    user_scope: string;
}
