export class UserInfo {
    constructor (profileInfoSelector, profileNameSelector) {
        this._profileInfo = document.querySelector(profileInfoSelector);
        this._profileName = document.querySelector(profileNameSelector);
    }

    getUserInfo() {
        const profileInfo = {
            info: this._profileInfo.textContent,
            name: this._profileName.textContent,
        }
        return profileInfo;
    }

    setUserInfo(info) {
        this._profileInfo.textContent = info.info;
        this._profileName.textContent = info.name;
    }
}