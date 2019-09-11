const offerController = (function () {
    const getCreateOffer = function (ctx) {
        ctx.isAuthenticated = userService.checkSession();
        ctx.username = userService.findUsername();

        ctx.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function (res) {
            this.partial('../views/offers/create.hbs');
        }).catch(function (err) {
            console.log(err)
            notifier.handleError(err);
        });
    };

    const postCreateOffer = function (ctx) {
         ctx.isAuthenticated = userService.checkSession();
         ctx.username = userService.findUsername();
        let {
            product,
            description,
            price,
            pictureUrl
        } = ctx.params;

        const data = {
            product,
            description,
            price,
            pictureUrl
        };
        offerService.createOffer(data)
            .then(function (res) {
                ctx.redirect('#/home');
            }).catch(function (err) {
                console.log(err);
            });
    };

    const getAllOffers = function (ctx) {
        ctx.isAuthenticated = userService.checkSession();
        ctx.username = userService.findUsername();

        offerService.getAllOffers()
            .then(function (offers) {
             
                ctx.offers = offers.slice(0);
                
                ctx.loadPartials({
                    header: '../views/common/header.hbs',
                    footer: '../views/common/footer.hbs'
                }).then(function (res) {
                    this.partial('../views/offers/dashboard.hbs');
                });
            })
            .catch(function (err) {
                //console.log(err)
                notifier.handleError(err);
            });
    };
    const getOfferDetails = function (ctx) {
        ctx.isAuthenticated = userService.checkSession();
        ctx.username = userService.findUsername();
        const offerId = ctx.params.offerId;

        offerService.getOffer(offerId)
            .then(function (offer) {
                ctx.offer = offer;

                ctx.loadPartials({
                    header: '../views/common/header.hbs',
                    footer: '../views/common/footer.hbs'
                }).then(function (res) {
                    this.partial('../views/offers/details.hbs');
                });
            })
            .catch(function (err) {
                //console.log(err)
                notifier.handleError(err);
            });
    };
    const getEditOffer = function (ctx) {
        ctx.isAuthenticated = userService.checkSession();
        ctx.username = userService.findUsername();
        const offerId = ctx.params.offerId;

        offerService.getOffer(offerId)
            .then(function (offer) {
                ctx.offer = offer;

                ctx.loadPartials({
                    header: '../views/common/header.hbs',
                    footer: '../views/common/footer.hbs'
                }).then(function (res) {
                    this.partial('../views/offers/edit.hbs');
                });
            })
            .catch(function (err) {
                console.log(err)
                notifier.handleError(err);
            });
    };
    const postEditOffer = function (ctx) {
         ctx.isAuthenticated = userService.checkSession();
         ctx.username = userService.findUsername();
        let {
            product,
            description,
            price,
            pictureUrl
        } = ctx.params;

        const data = {
            product,
            description,
            price,
            pictureUrl
        };
        const offerId = ctx.params.offerId;

        offerService.editOffer(offerId, data)
            .then(function (res) {
                notifier.showSuccess('Offer edited successfully.');
                ctx.redirect('#/offers/dashboard');
            })
            .catch(function (err) {
                console.log(err)
                notifier.handleError(err);
            });
    };
    const getDeleteOffer = function (ctx) {
        ctx.isAuthenticated = userService.checkSession();
        ctx.username = userService.findUsername();
        const offerId = ctx.params.offerId;

        offerService.getOffer(offerId)
            .then(function (offer) {
                ctx.offer = offer;

                ctx.loadPartials({
                    header: '../views/common/header.hbs',
                    footer: '../views/common/footer.hbs'
                }).then(function (res) {
                    this.partial('../views/offers/remove.hbs');
                });
            })
            .catch(function (err) {
                //console.log(err)
                notifier.handleError(err);
            });
    };
    const postDeleteOffer = function (ctx) {
         ctx.isAuthenticated = userService.checkSession();
         ctx.username = userService.findUsername();
        const offerId = ctx.params.offerId;

        offerService.deleteOffer(offerId)
            .then(function (res) {
                notifier.showSuccess('Offer removed successfully!');
                ctx.redirect('#/home');
            })
            .catch(function (err) {
                console.log(err)
                notifier.handleError(err);
            });
    };
    
    
    return {
        getCreateOffer,
        postCreateOffer,
        getAllOffers,
        getOfferDetails,
        getEditOffer,
        postEditOffer,
        getDeleteOffer,
        postDeleteOffer
    }
})();