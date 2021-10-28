export default {
    getAddCount(context, num) {
        context.commit('addCount', num)
    },
    getSubCount(context, num) {
        context.commit('subCount', num)
    }
}