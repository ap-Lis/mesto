export class UserInfo {
    constructor (profileInfo, profileName) {
        this._profileInfo = profileInfo;
        this._profileName = profileName;
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