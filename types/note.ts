export interface Note {
    id: number;
    title: string;
    content: string;
    category: string;
    createdAt: string;
    updatedAt: string;
}


 export type Category = 'Todo' | 'Work' | 'Personal' | 'Meeting' | 'Shopping';
 