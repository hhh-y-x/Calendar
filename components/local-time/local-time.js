export function localtime() {
    const localTimeSection = document.querySelector('.local-time__clock');
    const hoursElement = document.querySelector('.local-time__clock--hours');
    const minutesElement = document.querySelector('.local-time__clock--minutes');
    const secondsElement = document.querySelector('.local-time__clock--seconds');
    const periodElement = document.querySelector('.local-time__clock--period');
    const now = new Date();

    function adjustTime() {
        const hours = now.getHours();
        if (hours >= 12) {
            if (periodElement.classList.contains('local-time__clock--period--am')) {
                periodElement.classList.remove('local-time__clock--period--am')
            };
            periodElement.classList.add('local-time__clock--period--pm');
            periodElement.textContent = 'PM';

            return String(hours > 12 ? hours - 12 : 12);
        } else if (`${now.getHours()}` < 12) {
            if (periodElement.classList.contains('local-time__clock--period--pm')) {
                periodElement.classList.remove('local-time__clock--period--pm')
            };
            periodElement.classList.add('local-time__clock--period--am');
            periodElement.textContent = 'AM';

            return String(hours);
        };
    };

    function padZero(time) {
        return String(time).padStart(2, '0');
    };
};