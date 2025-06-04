import {login as mockLogin} from '../../authMock/auth';
import {User} from "../../../hooks/auth/AuthContext.tsx";

export async function postLogin(
    email: string,
    password: string,
    mock: boolean,
    onLogin: (user: User) => void // nieuw argument
): Promise<boolean> {

    if (mock) {
        return mockLogin(email, password);
    }

    const startTime = Date.now();

    try {
        const response = await fetch('http://localhost:8080/auth/login', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ usernameOrEmail: email, password: password }),
        });

        const elapsedTime = Date.now() - startTime;
        const remainingTime = 1000 - elapsedTime;

        if (remainingTime > 0) {
            await new Promise((resolve) => setTimeout(resolve, remainingTime));
        }

        if (!response.ok) {
            throw new Error("Invalid Credentials");
        }

        const responseData = await response.json();
        console.log(responseData.userResponseDTO);
        onLogin(responseData.userResponseDTO);

        return true;
    } catch (err) {
        console.error(err);
        return false;
    }
}