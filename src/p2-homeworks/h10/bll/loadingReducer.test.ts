import {loadingAC, loadingReducer} from "./loadingReducer";




describe('changed loading value should be correct', () => {
    it('loading changed to false', function () {
            let startState = { loading: true };
            let endState = loadingReducer(startState, loadingAC());

            expect(endState.loading).toBe(false);
    });

    it('loading changed to true', function () {
        let startState = { loading: false };
        let endState = loadingReducer(startState, loadingAC());

        expect(endState.loading).toBe(true);
    });
})