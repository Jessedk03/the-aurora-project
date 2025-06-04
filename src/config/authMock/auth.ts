interface User {
    email: string;
    password: string;
    isAdmin: boolean;
}

const mockUsers: User[] = [
    {email: "Jessedekoe03@gmail.com", password: "Test1234!", isAdmin: false},
    {email: "admin@test.com", password: "Test1234!", isAdmin: true}
];

export const login = async (_email: string, _password: string): Promise<boolean> => {

    const user = mockUsers.find(user => user.email === _email && user.password === _password);
    return !!user;
}
