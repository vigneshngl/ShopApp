import { Mobile } from './Mobile'

export class Order {
    id : number
    customerId : number
    mobiles : Mobile[]
    orderTotal : number
}