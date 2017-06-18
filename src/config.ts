export class Constants {

    // WOPI Protocol Constants
    public static get WOPI_BASE_PATH() : string { return "/wopi/"; }
    public static get WOPI_CHILDREN_PATH() : string { return "/children"; }
    public static get WOPI_CONTENTS_PATH() : string { return "/contents"; }
    public static get WOPI_FILES_PATH() : string { return "files/"; }
    public static get WOPI_FOLDERS_PATH() : string { return "folders/"; }

    //WOPI Response Header Consts
    public static get WOPI_RESPONSE_HEADER_HOST_ENDPOINT() : string { return "X-WOPI-HostEndpoint"; }
    public static get WOPI_RESPONSE_HEADER_INVALID_FILE_NAME_ERROR() : string { return "X-WOPI-InvalidFileNameError"; }
    public static get WOPI_RESPONSE_HEADER_LOCK() : string { return "X-WOPI-Lock"; }
    public static get WOPI_RESPONSE_HEADER_LOCK_FAILURE_REASON() : string { return "X-WOPI-LockFailureReason"; }
    public static get WOPI_RESPONSE_HEADER_LOCKED_BY_OTHER_INTERFACE() : string { return "X-WOPI-LockedByOtherInterface"; }
    public static get WOPI_RESPONSE_HEADER_MACHINE_NAME() : string { return "X-WOPI-MachineName"; }
    public static get WOPI_RESPONSE_HEADER_PREF_TRACE() : string { return "X-WOPI-PerfTrace"; }
    public static get WOPI_RESPONSE_HEADER_SERVER_ERROR() : string { return "X-WOPI-ServerError"; }
    public static get WOPI_RESPONSE_HEADER_SERVER_VERSION() : string { return "X-WOPI-ServerVersion"; }
    public static get WOPI_RESPONSE_HEADER_VALID_RELATIVE_TARGET() : string { return "X-WOPI-ValidRelativeTarget"; }

    //WOPI Request Header Consts
    public static get WOPI_REQUEST_HEADER_APP_ENDPOINT() : string { return "X-WOPI-AppEndpoint"; }
    public static get WOPI_REQUEST_HEADER_CLIENT_VERSION() : string { return "X-WOPI-ClientVersion"; }
    public static get WOPI_REQUEST_HEADER_CORRELATION_ID() : string { return "X-WOPI-CorrelationId"; }
    public static get WOPI_REQUEST_HEADER_LOCK() : string { return "X-WOPI-Lock"; }
    public static get WOPI_REQUEST_HEADER_MACHINE_NAME() : string { return "X-WOPI-MachineName"; }
    public static get WOPI_REQUEST_HEADER_MAX_EXPECTED_SIZE() : string { return "X-WOPI-MaxExpectedSize"; }
    public static get WOPI_REQUEST_HEADER_OLD_LOCK() : string { return "X-WOPI-OldLock"; }
    public static get WOPI_REQUEST_HEADER_OVERRIDE() : string { return "X-WOPI-Override"; }
    public static get WOPI_REQUEST_HEADER_OVERWRITE_RELATIVE_TARGET() : string { return "X-WOPI-OverwriteRelativeTarget"; }
    public static get WOPI_REQUEST_HEADER_PREF_TRACE_REQUESTED() : string { return "X-WOPI-PerfTraceRequested"; }
    public static get WOPI_REQUEST_HEADER_PROOF() : string { return "X-WOPI-Proof"; }
    public static get WOPI_REQUEST_HEADER_PROOF_OLD() : string { return "X-WOPI-ProofOld"; }
    public static get WOPI_REQUEST_HEADER_RELATIVE_TARGET() : string { return "X-WOPI-RelativeTarget"; }
    public static get WOPI_REQUEST_HEADER_REQUESTED_NAME() : string { return "X-WOPI-RequestedName"; }
    public static get WOPI_REQUEST_HEADER_SESSION_CONTEXT() : string { return "X-WOPI-SessionContext"; }
    public static get WOPI_REQUEST_HEADER_SIZE() : string { return "X-WOPI-Size"; }
    public static get WOPI_REQUEST_HEADER_SUGGESTED_TARGET() : string { return "X-WOPI-SuggestedTarget"; }
    public static get WOPI_REQUEST_HEADER_TIME_STAMP() : string { return "X-WOPI-TimeStamp"; }

    // WOI URL Placeholders
    public static get WOPI_URL_PH_BUSINESS_USER() : string { return "<IsLicensedUser=BUSINESS_USER&>"; }
    public static get WOPI_URL_PH_DC_LLCC() : string { return "<rs=DC_LLCC&>"; }
    public static get WOPI_URL_PH_DISABLE_ASYNC() : string { return "<na=DISABLE_ASYNC&>"; }
    public static get WOPI_URL_PH_DISABLE_CHAT() : string { return "<dchat=DISABLE_CHAT&>"; }
    public static get WOPI_URL_PH_DISABLE_BROADCAST() : string { return "<vp=DISABLE_BROADCAST&>"; }
    public static get WOPI_URL_PH_EMBDDED() : string { return "<e=EMBEDDED&>"; }
    public static get WOPI_URL_PH_FULLSCREEN() : string { return "<fs=FULLSCREEN&>"; }
    public static get WOPI_URL_PH_PERFSTATS() : string { return "<showpagestats=PERFSTATS&>"; }
    public static get WOPI_URL_PH_RECORDING() : string { return "<rec=RECORDING&>"; }
    public static get WOPI_URL_PH_THEME_ID() : string { return "<thm=THEME_ID&>"; }
    public static get WOPI_URL_PH_UI_LLCC() : string { return "<ui=UI_LLCC&>"; }
    public static get WOPI_URL_PH_VALIDATOR_TEST_CATEGORY() : string { return "<testcategory=VALIDATOR_TEST_CATEGORY>"; }

    public static get WOPI_URL_PH_LIST() : ReadonlyArray<string> {return [
        Constants.WOPI_URL_PH_BUSINESS_USER,
        Constants.WOPI_URL_PH_DC_LLCC, 
        Constants.WOPI_URL_PH_DISABLE_ASYNC, 
        Constants.WOPI_URL_PH_DISABLE_CHAT, 
        Constants.WOPI_URL_PH_DISABLE_BROADCAST, 
        Constants.WOPI_URL_PH_EMBDDED, 
        Constants.WOPI_URL_PH_FULLSCREEN, 
        Constants.WOPI_URL_PH_PERFSTATS, 
        Constants.WOPI_URL_PH_RECORDING, 
        Constants.WOPI_URL_PH_THEME_ID, 
        Constants.WOPI_URL_PH_UI_LLCC, 
        Constants.WOPI_URL_PH_VALIDATOR_TEST_CATEGORY
        ] ; }

    // Cache Keys and values
    public static get WOPI_DISCOVERY_CACHE_KEY() : string { return "wopidisco"; }
    public static get WOPI_DICCOVERY_CACHE_TTL() : number { return 3600000; } // 1 hr

    // WOPI Discovery endpoint
    public static get WOPI_DISCOVERY_ENDPOINT() : string { return 'https://onenote.officeapps-df.live.com/hosting/discovery'; }
}
