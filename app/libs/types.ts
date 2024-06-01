export interface Welcome {
    data: Datum[];
}

export interface Datum {
    id:     number;
    url:    string;
    newurl: string;
}