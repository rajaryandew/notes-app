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
    isPinned: boolean,
    tagId?: number | null
}

export type NewNote = {
    title: string;
    description?: string | null;
    tagId?: number | null;
};

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

export type Tag = {
    id: number,
    name: string,
    user?:string | null
}

export type NewTag = {
    name:string,
    user?:string | null,
}