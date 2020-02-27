export class Employee {
    salary: number
    department: string

    constructor(values : Object = {}) {
        Object.assign(this, values)
    }
}