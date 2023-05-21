export class UserInfo {
    constructor (profileInfoSelector, profileNameSelector, profileAvatarSelector) {
        this._profileInfo = document.querySelector(profileInfoSelector);
        this._profileName = document.querySelector(profileNameSelector);
        this._profileAvatar = document.querySelector(profileAvatarSelector);
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
        this.id = info.id
    }

    setUserAvatar(imgLink) {
        this._profileAvatar.style.backgroundImage = `url('${imgLink}')`;
    }

    getUserId() {
        return this.id;
    }
}