const notifier = (function () {
    $(document).on({
        ajaxStart: function () {
            $('#loadingNotification').fadeIn();
        },
        ajaxStop: function () {
            $('#loadingNotification').fadeOut();
        }
    });

    const showSuccess = function (message) {
        const infoBox = $('#successNotification');
        infoBox.find('span').text(message);
        infoBox.fadeIn();
        infoBox.fadeOut(3000);
    };

    const showError = function (message) {
        const errorBox = $('#errorNotification');
        errorBox.find('span').text(message);
        errorBox.fadeIn();
        errorBox.fadeOut(3000);
    };

    const handleError = function (err) {
        showError(err.responseJSON.description);
    };

    return {
        showSuccess,
        showError,
        handleError
    };
})();