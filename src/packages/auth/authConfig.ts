export interface IAuthConfiguration {
    domain: string,
    clientId: string,
    loginRedirectUri: string,
    audience: string
};

export const authConfig: IAuthConfiguration = {
    domain: "rikstv.eu.auth0.com",
    clientId: "OrjL47xXXkIP0kR0VjVifYd0cVvESRRi",
    loginRedirectUri: `http://localhost:55573`,
    audience: "http://metadata-admin-api.rikstv.no"
};