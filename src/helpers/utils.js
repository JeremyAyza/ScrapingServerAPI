export const booleanNumber = () => {
    return Math.random() < 0.5 ? 0 : 1;
}


export const delay = (time = 1000) => {
    return new Promise((resolve) => setTimeout(resolve, time))
}