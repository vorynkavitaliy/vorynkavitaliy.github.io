import "jquery";
import simplePagination from "jquery-simple-pagination";



var example = jQuery ('#container').simplePagination({
    current: 7,
    count: 14,
    name: 'page'
  });
  jQuery('#container input[name=page]').change(function() {
    console.log(jQuery(this).val());
  });
//   $('#prev').click(function() { example.setPrevPage(); });
//   $('#next').click(function() { example.setNextPage(); });
//   $('#reset').click(function() { example.setPage(1); });

