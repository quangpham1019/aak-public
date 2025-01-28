$(function() {
    // Build "dynamic" rulers by adding items
    $(".ruler[data-items]").each(function() {
        var ruler = $(this).empty(),
            len = Number(ruler.attr("data-items")) || 0,
            item = $(document.createElement("li")),
            i;
        for (i = 0; i < len; i++) {
            ruler.append(item.clone().text(i + 1));
        }
    });
    // Change the spacing programatically
    $("#spacing").change(function() {
        changeRulerSpacing($(this).val());
    });

    function changeRulerSpacing(spacing) {
        $(".ruler").
        css("padding-right", spacing).
        find("li").
        css("padding-left", spacing);
    }
});