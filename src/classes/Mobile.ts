export class Mobile {
    public id: number
    public brand:string
    public name: string
    public price: number
    public desc: string
    public quantity: number
    public url: string
    public available: boolean

    constructor(values : Object = {}) {
        Object.assign(this, values)
    }
}