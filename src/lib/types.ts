export type User = {
    username: string;
    password: string;
};

export type Note = {
    id:number,
    title:string,
    description?:string | null,
    username:string
}

export type NewNote = {
    title:string,
    description?:string|null
}