export class UrlUtil{


    public static getUrl(destination: string, param?: string | number) {
        return "https://angular-exercise.trunarrative.cloud/TruProxyAPI/rest/Companies/v1/" + destination + (param ? param : "");
    }

}