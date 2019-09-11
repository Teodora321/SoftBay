const homeController = (function () {

    const getHome = function (ctx) {
        ctx.isAuthenticated = userService.checkSession();
        ctx.username = userService.findUsername();

        ctx.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function (res) {
            this.partial('../views/home/home.hbs');
        }).catch(function (err) {
            console.log(err)
            notifier.handleError(err);
        });
    };

    return {
        getHome
    };
})();