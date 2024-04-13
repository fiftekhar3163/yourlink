// User Class
export class User {
    constructor(id, name, userName, email) {
        this._id = id;
        this._name = name;
        this._userName = userName;
        this._email = email;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get userName() {
        return this._userName;
    }

    get email() {
        return this._email;
    }

    getInfo() {
        return `Name: ${this._name}<br>Username: ${this._userName}<br>Email: ${this._email}`;
    }
}

// Subscriber Class
export class Subscriber extends User {
    constructor(id, name, userName, email, pages, groups, canMonetize) {
        super(id, name, userName, email);
        this._pages = pages;
        this._groups = groups;
        this._canMonetize = canMonetize;
    }

    get pages() {
        return this._pages;
    }

    get groups() {
        return this._groups;
    }

    get canMonetize() {
        return this._canMonetize;
    }

    getInfo() {
        return `${super.getInfo()}<br>Pages: ${this._pages.join(', ')}<br>Groups: ${this._groups.join(', ')}<br>Can Monetize: ${this._canMonetize ? 'Yes' : 'No'}`;
    }
}
