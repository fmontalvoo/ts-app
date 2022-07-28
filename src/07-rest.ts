import { User, ROLES } from './01-enum';

const currentUser: User = {
    id: 1,
    name: 'Max',
    role: ROLES.USER
}

export const checkAdminRole = () => (currentUser.role === ROLES.ADMIN);

console.log(checkAdminRole());

export const checkRole = (...roles: string[]) => {
    // return roles.some(role => currentUser.role === role);
    return roles.includes(currentUser.role);
}

console.log(checkRole(ROLES.ADMIN, ROLES.USER, ROLES.GUEST));