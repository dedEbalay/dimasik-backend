class UserController {

    async registration ( req, res ) {
        
    }

    async login ( req, res ) {

    }
     
    async auth ( req, res ) {
        res.json({text: 'Bip-bop'})
    }

}

module.exports = new UserController;