export function localtime() {
    const localTimeSection = document.querySelector('.local-time__clock');
    const hoursElement = document.querySelector('.local-time__clock--hours');
    const minutesElement = document.querySelector('.local-time__clock--minutes');
    const secondsElement = document.querySelector('.local-time__clock--seconds');
    const periodElement = document.querySelector('.local-time__clock--period');
    const now = new Date();
};