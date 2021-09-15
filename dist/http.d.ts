/// <reference types="node" />
import { IncomingMessage, RequestOptions } from 'http';
export interface HttpRequestOptions extends RequestOptions {
    url?: string;
    searchParams?: {
        [key: string]: string;
    };
}
export interface httpResponse {
    response: IncomingMessage;
    data: string;
}
export declare function httpRequest(reqOpts: HttpRequestOptions | string | URL, body?: any): Promise<httpResponse>;
export declare function objToCookies(obj: any): string;
export declare function cookiesToObj(cookiesStr: string): object;
//# sourceMappingURL=../src/dist/http.d.ts.map