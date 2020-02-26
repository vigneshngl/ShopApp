export class Customer {
    id: number
    name: string
    address: string
    email: string
    phone: string

    constructor(values : Object = {}) {
        Object.assign(this, values)
    }
}