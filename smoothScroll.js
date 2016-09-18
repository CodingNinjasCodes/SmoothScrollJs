var smooth_scroll = (function() {

    var intervalId;
    var header_height;

    var smoothScroll = function() {


        destinationY = this.offsetTop - header_height;
        currentY = window.scrollY;

        if (currentY < destinationY) {
            if (destinationY - currentY < delta) {
                window.scrollTo(0, destinationY);
                clearInterval(intervalId);

            }
            window.scrollTo(0, currentY + delta);

        } else {
            if (currentY - destinationY < delta) {
                window.scrollTo(0, destinationY);
                clearInterval(intervalId);
            }
            window.scrollTo(0, currentY - delta);
        }

        delta = delta + 0.2;



    };

    var scrollTo = function(el) {
        if (intervalId !== undefined || intervalId !== null) {
            clearInterval(intervalId);
        }
        intervalId = setInterval(smoothScroll.bind(el), 10);
        delta = 1;
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
        var internal_links = document.querySelectorAll("a[href^='#']");
        for (var i = 0; i < internal_links.length; i++) {
            link = internal_links[i];
            link.addEventListener("click", onClickAnchor.bind(link));
        }
        if (config !== undefined && config !== null) {
            if (config.header_id !== undefined && config.header_id !== null) {
                header_height = document.getElementById(config.header_id).getBoundingClientRect().height;

            }

        }
        header_height = header_height || 0;



    };

    return {
        init: init
    }

})();
