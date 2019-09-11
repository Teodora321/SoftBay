const offerService = (function () {

    // const getMyMovies = function (userId) {
    //     return requester.get('appdata', `movies?query={"_acl.creator":"${userId}"}`, 'Kinvey');
    // };

    const createOffer = function (data) {
        return requester.post('appdata', 'offers', 'Kinvey', data);
    };

    const getAllOffers = function () {
        return requester.get('appdata', `offers`, 'Kinvey');
        
    };

    const getOffer = function (offerId) {
        return requester.get('appdata', `offers/${offerId}`, 'Kinvey');
    };

    const editOffer = function (offerId, offer) {
        return requester.put('appdata', `offers/${offerId}`, 'Kinvey', offer);
    };

    const deleteOffer = function (offerId) {
        return requester.del('appdata', `offers/${offerId}`, 'Kinvey');
    };

    return {
        createOffer,
        getAllOffers,
        getOffer,
        editOffer,
        deleteOffer 
    };
})();