function Storage() {

    this.get = function (name) {
        return JSON.parse(window.localStorage.getItem(name));
    };

    this.set = function (name, value) {
        window.localStorage.setItem(name, JSON.stringify(value));
    };

    this.clear = function () {
        window.localStorage.clear();
    };
}