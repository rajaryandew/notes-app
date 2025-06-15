export type User = {
    username: string;
    password: string;
};

export type Note = {
    id:number,
    title:string,
    description?:string | null,
    username:string,
    isDeleted?: boolean
    isPinned: boolean
}

export type NewNote = {
    title:string,
    description?:string|null
}

export type ButtonVariant = 
        | "link"
        | "default"
        | "destructive"
        | "outline"
        | "secondary"
        | "ghost"
        | null
        | undefined;
;