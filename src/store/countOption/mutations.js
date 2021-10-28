export default {
    addCount(state, num) {
        if (state.count < 100) {
            state.count += num
        }
    },
    subCount(state, num) {
        if (state.count > 0) {
            state.count -= num
        }
    }
}