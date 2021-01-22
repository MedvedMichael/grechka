export interface Store {
    id: number,
    name: string,
    address: {
        city: string,
        street: string,
        building: string
    }
}