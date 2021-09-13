import { Status } from "./Status";

export class Todos {
    constructor(
        public id                  : number,
        public description         : string,
        public assignedDate        : Date,
        public status              : string,
        public completedDate       : Date,
    ){}
}
