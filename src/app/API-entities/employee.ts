import { IBranch } from "./branch";
import { IDepartment } from "./department";

export interface IEmployee {
    Id: number;
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
}
