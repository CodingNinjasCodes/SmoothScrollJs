var smooth_scroll = (function() {

    var intervalId;
    var header_height;
    var delta;
    var destinationY;
    var currentY;
    var ignore_links;

    var isInArray = function(value, array) {
        return array.indexOf(value) > -1;
    }

    var smoothScroll = function() {
        if (delta > 0 && currentY + delta > destinationY) {
            delta = destinationY - currentY;
            clearInterval(intervalId);
        }

        if (delta < 0 && currentY + delta < destinationY) {
            delta = destinationY - currentY;
            clearInterval(intervalId);
        }

        window.scrollBy(0, delta);
        currentY = currentY + delta;
        delta = delta * 1.1;
    };

    var scrollTo = function(el) {
        if (intervalId !== undefined || intervalId !== null) {
            clearInterval(intervalId);
        }

        destinationY = el.offsetTop - header_height;
        currentY = window.scrollY;

        intervalId = setInterval(smoothScroll.bind(el), 10);
        delta = 1;
        if (currentY > destinationY) {
            delta = delta * -1;
        }
    };


    var onClickAnchor = function(e) {
        e.preventDefault();
        var anchor_tag = this;
        anchor_href = this.getAttribute("href")
        element_id = anchor_href.slice(1, anchor_href.length);
        var el = document.getElementById(element_id);
        scrollTo(el);

    };

    var init = function(config) {
        //Get all internal links

        if (config !== undefined && config !== null) {
            if (config.header_id !== undefined && config.header_id !== null) {
                header_height = document.getElementById(config.header_id).getBoundingClientRect().height;
            }

            ignore_links = config.ignore_links || []
        }

        var internal_links = document.querySelectorAll("a[href^='#']");
        for (var i = 0; i < internal_links.length; i++) {
            link = internal_links[i];
            var href = link.getAttribute("href");
            if (href !== "#" && !isInArray(href.slice(1, href.length), ignore_links)) {
                link.addEventListener("click", onClickAnchor.bind(link));
            }
        }

        header_height = header_height || 0;
    };

    return {
        init: init
    }

})();
