export enum ROLES {
    ADMIN = "admin",
    USER = "user",
    GUEST = "guest"
}

export type User = {
    id: string | number;
    name: string;
    role: ROLES;
};

const usuer: User = {
    id: '123',
    name: 'John',
    role: ROLES.ADMIN
};

console.log(usuer);