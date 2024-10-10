// 특정 시간동안 delay
export const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));
