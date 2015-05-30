/**
 * Created by HENG on 2015/5/30.
 */
$(function () {
   $("img").imgGetSize(function (data) {
       $(this).attr({
           width: data.width,
           height: data.height
       });
   });
});