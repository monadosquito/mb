import todo, { add, complete } from './todo'


describe('todo reducer', () => {
    it('should return [] as initial state', () => {
        expect(
            todo.reducer(undefined, {})
        ).toEqual([])
    })
    it('should add todo', () => {
        expect(
            todo.reducer(
                [ { id: 1, text: 'test 1', done: true } ],
                add({ text: 'test 2' })
            )
        ).toEqual(
            [
                { id: 1, text: 'test 1', done: true },
                { id: 2, text: 'test 2', done: false },
            ]
        )
    })
    it('should complete todo', () => {
        expect(
            todo.reducer(
                [
                    { id: 1, text: 'test 1', done: true },
                    { id: 2, text: 'test 2', done: false },
                ],
                complete(2),
            )
        ).toEqual(
            [
                { id: 1, text: 'test 1', done: true },
                { id: 2, text: 'test 2', done: true },
            ]
        )
    })
})
