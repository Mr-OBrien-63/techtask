declare module 'bcryptjs' {  
  export function hash(password: string, salt: string | number): Promise<string>;  
  export function compare(password: string, hashed: string): Promise<boolean>;  
  export function genSalt(rounds?: number): Promise<string>;  
  export function hashSync(password: string, salt: string | number): string;  
  export function compareSync(password: string, hashed: string): boolean;  
  export function genSaltSync(rounds?: number): string;  
}