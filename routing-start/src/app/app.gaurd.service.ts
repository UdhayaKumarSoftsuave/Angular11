

export class AppGaurdService {

    islogged = false ;

    isAuthendicated(){
        const result = new Promise(
            (resolve , reject ) => {
                setInterval(() => {
                    resolve(this.islogged );
                },500)
            }
        )
        return result;
    }

    isloggedIn(){
        this.islogged = true;
    }

    isloggedOut(){
        this.islogged = false;
    }

}