interface DetailedFile {
    UserId: string;
    CloseUrl: string;
    HostEditUrl: string;
    HostViewUrl: string;
    SupportsCoauth: boolean;
    SupportsExtendedLockLength: boolean;
    SupportsFileCreation: boolean;
    SupportsFolders: boolean;
    SupportsGetLock: boolean;
    SupportsLocks: boolean;
    SupportsRename: boolean;
    SupportsScenarioLinks: boolean;
    SupportsSecureStorage: boolean;
    SupportsUpdate: boolean;
    SupportsUserInfo: boolean;
    LicensesCheckForEditIsEnabled: boolean;
    ReadOnly: boolean;
    RestrictedWebViewOnly: boolean;
    UserCanAttend: boolean;
    UserCanNotWriteRelative: boolean;
    UserCanPresent: boolean;
    UserCanRename: boolean;
    UserCanWrite: boolean;
    WebEditingDisabled: boolean;
    Actions: WopiAction[];
}