All internal links would scroll Smoothly.

Usage : 

Include the js file
```
<script type="text/javascript" src="smoothScroll.js"></script>
```

Add this script after the body load. Ideally one may add this just before the closing of body tag.

```  
<script type="text/javascript">
        smooth_scroll.init();
</script>
```

If there is a fixed header, pass the id of fixed header as config.

```
<script type="text/javascript">
        smooth_scroll.init({
            header_id : "page-header"
        });
</script>


```

If there is are links that should be ignored. Pass an array to ignore those links. Example

```
<script type="text/javascript">
        smooth_scroll.init({
            header_id : "page-header",
            ignore_links: ["page-header"]
        });
</script>


```

Without Smooth Scroll
![alt text](https://raw.githubusercontent.com/CodingNinjasCodes/SmoothScrollJs/master/without_smooth_scroll.gif "Without Smooth Scroll")

With Smooth Scroll
![alt text](https://raw.githubusercontent.com/CodingNinjasCodes/SmoothScrollJs/master/with_smooth_scroll.gif "With Smooth Scroll")


