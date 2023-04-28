import { useMyContext } from '../application/Provider';

export const useAuth = () => {
    const [state, setState] = useMyContext();

    return {
        isAuthenticated: !!state.user,
    };
}