/// <summary>
/// Enumeration for the different types of WOPI Requests
/// For more information see: https://wopi.readthedocs.org/projects/wopirest/en/latest/index.html
/// </summary>
var WopiRequestType;
(function (WopiRequestType) {
    WopiRequestType[WopiRequestType["None"] = 0] = "None";
    WopiRequestType[WopiRequestType["CheckFileInfo"] = 1] = "CheckFileInfo";
    WopiRequestType[WopiRequestType["GetFile"] = 2] = "GetFile";
    WopiRequestType[WopiRequestType["Lock"] = 3] = "Lock";
    WopiRequestType[WopiRequestType["GetLock"] = 4] = "GetLock";
    WopiRequestType[WopiRequestType["RefreshLock"] = 5] = "RefreshLock";
    WopiRequestType[WopiRequestType["Unlock"] = 6] = "Unlock";
    WopiRequestType[WopiRequestType["UnlockAndRelock"] = 7] = "UnlockAndRelock";
    WopiRequestType[WopiRequestType["PutFile"] = 8] = "PutFile";
    WopiRequestType[WopiRequestType["PutRelativeFile"] = 9] = "PutRelativeFile";
    WopiRequestType[WopiRequestType["RenameFile"] = 10] = "RenameFile";
    WopiRequestType[WopiRequestType["PutUserInfo"] = 11] = "PutUserInfo";
    /*
    DeleteFile, //ONENOTE ONLY
    ExecuteCellStorageRequest, //ONENOTE ONLY
    ExecuteCellStorageRelativeRequest, //ONENOTE ONLY
    ReadSecureStore, //NO DOCS
    GetRestrictedLink, //NO DOCS
    RevokeRestrictedLink, //NO DOCS
    ExecuteCobaltRequest, //In GitHub Sample
    CheckFolderInfo, //In GitHub Sample
    EnumerateChildren //In GitHub Sample
    */
})(WopiRequestType || (WopiRequestType = {}));
//# sourceMappingURL=WopiRequestType.js.map