export interface User {
   uid: string;
   email: string;
   displayName: string;
   photoURL: string;
   emailVerified: boolean;
}

export interface Details {
   uid: string;
   PIN?: number;
   tables?: number;
   message?: number;
   tablearray?:Array<string | number>;
}
