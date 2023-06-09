const Flight = require('../models/flight')

function create(req, res){
    Flight.findById(req.params.flightId)
        .then(flightDoc => {
            flightDoc.destinations.push(req.body)
            return flightDoc.save()
        })
        .then(flightDoc => {
            res.redirect(`/flights/${flightDoc.id}`)
        })
        .catch(err => {
            console.log('this is the error in destination create\n', err)

            res.send(err)
        })
}

module.exports = {
    create,
}