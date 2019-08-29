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

module.exports = router;