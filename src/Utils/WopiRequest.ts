import * as enums from './wopirequesttype';

export class WopiRequest {
    Id: string;
    RequestType: enums.WopiRequestType;
    AccessToken: string;
}
