import authReducer from '../../reducers/auth';

test('Should set user to login user id', () => {
    const action = {
        type: 'LOGIN',
        uid: 'My_user_id'
    };
    const state = authReducer({}, action);
    expect(state).toEqual({ uid: action.uid });
});

test('Should clear user id on logout', () => {
    const action = {
        type: 'LOGOUT',
    }
    const state = authReducer({ uid: 'Some new id' }, action);
    expect(state).toEqual({});
});