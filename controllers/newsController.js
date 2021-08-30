class newsController {

    async post ( req, res ) {
        
    }

    async getAll ( req, res ) {

    }
     
    async getOne ( req, res ) {
        res.json({text: 'Bip-bop'})
    }

}

module.exports = new newsController;