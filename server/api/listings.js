const router = require('express').Router();
const {Listing} = require('../db/models');

//GET /api/listings
router.get('/', async(req, res, next) => {
    try{
        const listings = await Listing.findAll();
        res.json(listings);
    } catch(e){
        next(e);  
    }
});

router.post('/', async(req, res, next) => {
    try{
        const {description, name, price, imgurl} = req.body;

        const newListing = await Listing.create({
            name,
            description,
            price,
            imgurl,
            sold: false
        });
        res.sendStatus(201);
    } catch(e){
        next(e);
    }
});

router.put('/:id', async(req, res, next) => {
    try{
        const {name, description, price, imgurl, sold} = req.body;
        const id = parseInt(req.params.id);
        const listing = await Listing.findOne({where: {
            id: id
        }})
        if(listing){
            const updated = await listing.update({name, description, price, imgurl, sold});
            res.sendStatus(201);
        } else {
            res.sendStatus(404);
        }
    } catch(e){
        next(e);
    }
});

router.delete('/:id', async(req, res, next)=> {
    try{
        const listing = await Listing.findOne({where: {id: parseInt(req.params.id)}});
        if(listing){
            await listing.destroy();
            res.sendStatus(204);
        } else {
            res.sendStatus(404);
        }
    } catch(e){
        next(e);
    }
})

module.exports = router;