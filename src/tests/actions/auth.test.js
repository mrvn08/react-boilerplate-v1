import { login, logout } from '../../actions/auth';

test('Should set up login action object', () => {
    const action = login('some_id');
    expect(action).toEqual({
        type: 'LOGIN',
        uid: 'some_id'
    });
});

test('Should set up logout action object', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});
