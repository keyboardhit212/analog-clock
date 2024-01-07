
export default class Time {

    #date = null;
    #time = null;

    constructor() {
        this.#date = new Date();
        this.#time = this.#extractTime();
    }

    #extractTime() {
        return this.#date.toString().split(" ")[4].split(":");
    }

    getTime() {
        return {
            second: this.getSecond(),
            minute: this.getMinute(),
            hour: this.getHour()
        };
    }

    getHour() {
        return Number(this.#time[0]);
    }

    getMinute() {
        return Number(this.#time[1]);
    }

    getSecond() {
        return Number(this.#time[2]);
    }

}