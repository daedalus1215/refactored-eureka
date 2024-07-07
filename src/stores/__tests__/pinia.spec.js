import { setActivePinia, createPinia } from 'pinia';
import useUserStore from '@/stores/user';

// vi.mock() allows us to mock dependencies
vi.mock('@/includes/firebase', () => ({
    auth: {
        signInWithEmailAndPassword: () => Promise.resolve(),
    }
}));

describe('user', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    });

    test('authenticate user', async () => {
        // Arrange
        const target = useUserStore();

        expect(target.userLoggedIn).not.toBe(true);

        // Act
        await target.authenticate({});

        // Assert
        expect(target.userLoggedIn).toBe(true);
    })
})