export const resetCount = (state) => {
    state.count = 0;
    state.lastmutation = 0;
    state.lastRandomInt = 0;
};
export const increment = (state) => {
    state.count++;
};
export const incrementby = (state, val) => {
    state.count += val;
    state.lastmutation = "increment : " + val;
    state.lastRandomInt = val;
};
export const isLoad = (state, val) => {
    state.isLoading = val;
};