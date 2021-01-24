import createEventEmitter from "../hooks/emit";
import {EventEmitter} from "../hooks/emit";

export interface FilterValues {
    filter: string
}

export interface FilterServiceMethods{
    setFilter: (filter: string) => void
}

export interface Filter extends FilterValues, FilterServiceMethods{}

export class FilterService implements Filter {
    public filter: string = "";

    public eventEmitter: EventEmitter = createEventEmitter();

    public setFilter = (filter: string) => {
        this.filter = filter;
        this.eventEmitter.emit()
    };
}

export default new FilterService()
