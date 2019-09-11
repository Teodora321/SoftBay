$(function () {
    Sammy('#container', function () {
        this.use('Handlebars', 'hbs');
        //home
        this.get('/', homeController.getHome);
        this.get('#/home', homeController.getHome);
        //user register
        this.get('#/user/register', userController.getRegister);
        this.post('#/user/register', userController.postRegister);
        //user login
        this.get('#/user/login', userController.getLogin);
        this.post('#/user/login', userController.postLogin);
        //use logout
        this.get('#/user/logout', userController.logout);
        //my routes
        this.get('#/user/profile', userController.getProfile)
        this.get('#/offers/create', offerController.getCreateOffer);
        this.post('#/offers/create', offerController.postCreateOffer);
        this.get('#/offers/dashboard', offerController.getAllOffers);


        this.get('#/offer/details/:offerId', offerController.getOfferDetails);

        this.get('#/offer/edit/:offerId', offerController.getEditOffer);
        this.post('#/offer/edit/:offerId', offerController.postEditOffer);

        this.get('#/offer/delete/:offerId', offerController.getDeleteOffer);
        this.post('#/offer/delete/:offerId', offerController.postDeleteOffer);

        

        // this.get('#/movie/create', movieController.getAddMovie);
        // this.post('#/movie/create', movieController.postAddMovie);

        // this.get('#/movie/all', movieController.getAllMovies);
        // this.get('#/movie/my', movieController.getMyMovies);

        // this.get('#/movie/ticket/:movieId', movieController.buyMovieTicket);
        // this.get('#/movie/details/:movieId', movieController.getMovieDetails);

        // this.get('#/movie/edit/:movieId', movieController.getEditMovie);
        // this.post('#/movie/edit/:movieId', movieController.postEditMovie);

        // this.get('#/movie/delete/:movieId', movieController.getDeleteMovie);
        // this.post('#/movie/delete/:movieId', movieController.postDeleteMovie);

        // this.get('#/movie/search', movieController.searchMovie);
    }).run('/');
});