"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Constants {
    // WOPI Protocol Constants
    static get WOPI_BASE_PATH() { return "/wopi/"; }
    static get WOPI_CHILDREN_PATH() { return "/children"; }
    static get WOPI_CONTENTS_PATH() { return "/contents"; }
    static get WOPI_FILES_PATH() { return "files/"; }
    static get WOPI_FOLDERS_PATH() { return "folders/"; }
    //WOPI Response Header Consts
    static get WOPI_RESPONSE_HEADER_HOST_ENDPOINT() { return "X-WOPI-HostEndpoint"; }
    static get WOPI_RESPONSE_HEADER_INVALID_FILE_NAME_ERROR() { return "X-WOPI-InvalidFileNameError"; }
    static get WOPI_RESPONSE_HEADER_LOCK() { return "X-WOPI-Lock"; }
    static get WOPI_RESPONSE_HEADER_LOCK_FAILURE_REASON() { return "X-WOPI-LockFailureReason"; }
    static get WOPI_RESPONSE_HEADER_LOCKED_BY_OTHER_INTERFACE() { return "X-WOPI-LockedByOtherInterface"; }
    static get WOPI_RESPONSE_HEADER_MACHINE_NAME() { return "X-WOPI-MachineName"; }
    static get WOPI_RESPONSE_HEADER_PREF_TRACE() { return "X-WOPI-PerfTrace"; }
    static get WOPI_RESPONSE_HEADER_SERVER_ERROR() { return "X-WOPI-ServerError"; }
    static get WOPI_RESPONSE_HEADER_SERVER_VERSION() { return "X-WOPI-ServerVersion"; }
    static get WOPI_RESPONSE_HEADER_VALID_RELATIVE_TARGET() { return "X-WOPI-ValidRelativeTarget"; }
    //WOPI Request Header Consts
    static get WOPI_REQUEST_HEADER_APP_ENDPOINT() { return "X-WOPI-AppEndpoint"; }
    static get WOPI_REQUEST_HEADER_CLIENT_VERSION() { return "X-WOPI-ClientVersion"; }
    static get WOPI_REQUEST_HEADER_CORRELATION_ID() { return "X-WOPI-CorrelationId"; }
    static get WOPI_REQUEST_HEADER_LOCK() { return "X-WOPI-Lock"; }
    static get WOPI_REQUEST_HEADER_MACHINE_NAME() { return "X-WOPI-MachineName"; }
    static get WOPI_REQUEST_HEADER_MAX_EXPECTED_SIZE() { return "X-WOPI-MaxExpectedSize"; }
    static get WOPI_REQUEST_HEADER_OLD_LOCK() { return "X-WOPI-OldLock"; }
    static get WOPI_REQUEST_HEADER_OVERRIDE() { return "X-WOPI-Override"; }
    static get WOPI_REQUEST_HEADER_OVERWRITE_RELATIVE_TARGET() { return "X-WOPI-OverwriteRelativeTarget"; }
    static get WOPI_REQUEST_HEADER_PREF_TRACE_REQUESTED() { return "X-WOPI-PerfTraceRequested"; }
    static get WOPI_REQUEST_HEADER_PROOF() { return "X-WOPI-Proof"; }
    static get WOPI_REQUEST_HEADER_PROOF_OLD() { return "X-WOPI-ProofOld"; }
    static get WOPI_REQUEST_HEADER_RELATIVE_TARGET() { return "X-WOPI-RelativeTarget"; }
    static get WOPI_REQUEST_HEADER_REQUESTED_NAME() { return "X-WOPI-RequestedName"; }
    static get WOPI_REQUEST_HEADER_SESSION_CONTEXT() { return "X-WOPI-SessionContext"; }
    static get WOPI_REQUEST_HEADER_SIZE() { return "X-WOPI-Size"; }
    static get WOPI_REQUEST_HEADER_SUGGESTED_TARGET() { return "X-WOPI-SuggestedTarget"; }
    static get WOPI_REQUEST_HEADER_TIME_STAMP() { return "X-WOPI-TimeStamp"; }
    // WOI URL Placeholders
    static get WOPI_URL_PH_BUSINESS_USER() { return "<IsLicensedUser=BUSINESS_USER&>"; }
    static get WOPI_URL_PH_DC_LLCC() { return "<rs=DC_LLCC&>"; }
    static get WOPI_URL_PH_DISABLE_ASYNC() { return "<na=DISABLE_ASYNC&>"; }
    static get WOPI_URL_PH_DISABLE_CHAT() { return "<dchat=DISABLE_CHAT&>"; }
    static get WOPI_URL_PH_DISABLE_BROADCAST() { return "<vp=DISABLE_BROADCAST&>"; }
    static get WOPI_URL_PH_EMBDDED() { return "<e=EMBEDDED&>"; }
    static get WOPI_URL_PH_FULLSCREEN() { return "<fs=FULLSCREEN&>"; }
    static get WOPI_URL_PH_PERFSTATS() { return "<showpagestats=PERFSTATS&>"; }
    static get WOPI_URL_PH_RECORDING() { return "<rec=RECORDING&>"; }
    static get WOPI_URL_PH_THEME_ID() { return "<thm=THEME_ID&>"; }
    static get WOPI_URL_PH_UI_LLCC() { return "<ui=UI_LLCC&>"; }
    static get WOPI_URL_PH_VALIDATOR_TEST_CATEGORY() { return "<testcategory=VALIDATOR_TEST_CATEGORY>"; }
    static get WOPI_URL_PH_LIST() {
        return [
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
        ];
    }
    // Cache Keys and values
    static get WOPI_DISCOVERY_CACHE_KEY() { return "wopidisco"; }
    static get WOPI_DICCOVERY_CACHE_TTL() { return 3600000; } // 1 hr
    // WOPI Discovery endpoint
    static get WOPI_DISCOVERY_ENDPOINT() { return 'https://onenote.officeapps-df.live.com/hosting/discovery'; }
}
exports.Constants = Constants;
//# sourceMappingURL=config.js.map