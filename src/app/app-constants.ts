export class AppConstants {

	/** Respnsavel por fazer a base da conecção com o back-end atravéz das url e dos end-ponts */

	public static get baseServidor(): string { return "https://18.216.244.199:8443/"}

	public static get baseLogin(): string { return this.baseServidor + "apirestaurante/login" }

	public static get baseUrl(): string {return this.baseServidor + "apirestaurante/home/"}
    
	public static get getbaseUrlPath(): string {return this.baseServidor + "apirestaurante/"}

}
