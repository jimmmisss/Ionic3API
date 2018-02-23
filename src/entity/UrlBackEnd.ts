/**
 * @author Wesley F Pereira
 * email: jimmmisss@gmail.com
 */

export class UrlBackEnd {

    static Url() {
        return "http://localhost:8080/";
    }

    static oauthUrl() {
        return "oauth/token?grant_type=password&username=";
    }

    static usuarioUrl() {
        return "v1/protected/usuario/logado";
    }

    static listaFilmes() {
        return "v1/protected/filme";
    }

    static infoFilme() {
        return "v1/protected/filme/";
    }

    static addFilme() {
        return "v1/admin/filme/";
    }

}