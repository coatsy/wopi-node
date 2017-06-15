// <summary>
// Enumeration for the different types of WOPI Requests
// For more information see: https://wopi.readthedocs.org/projects/wopirest/en/latest/index.html
// </summary>
export enum WopiRequestType {
        None,
        CheckFileInfo,
        GetFile,
        Lock,
        GetLock,
        RefreshLock,
        Unlock,
        UnlockAndRelock,
        PutFile,
        PutRelativeFile,
        RenameFile,
        PutUserInfo

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
}
