import { IBranch } from "./branch";
import { IDepartment } from "./department";
import { IUser } from "./user";

export interface IEmployee {
    id: number;
    full_name: string;
    gender: string;
    birthday: Date;
    phone: string,
    phone2: string;
    address: string;
    default_salary: number;
    type_salary: string;
    type_salary_of: string;
    branch: IBranch;
    department: IDepartment;
    users: IUser[];
}
