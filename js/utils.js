export const throttle = (callback, delayBetweenFrames = 500) => {
  let timeoutId, lastCallTime;
  return (...rest) => {
    const elapsedTime = Date.now() - lastCallTime;
    const delay = Math.max(delayBetweenFrames - elapsedTime, 0);
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback(...rest);
      lastCallTime = Date.now();
    }, delay);
  };
};
