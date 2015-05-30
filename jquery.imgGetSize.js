/**
 * Created by HENG on 2015/5/30.
 */

;(function($){
    function getSize(imgSrc, callback) {
        var imgObj = new Image();
        imgObj.src = imgSrc;
        var obj = null;
        if(imgObj.complete) {
            obj = {
                img: imgObj,
                width: imgObj.width,
                height: imgObj.height
            };
            callback.call(this, obj);
        } else {
            var timer = setInterval(function () {
                if(imgObj.width > 0 && imgObj.height > 0) {
                    obj = {
                        img: imgObj,
                        width: imgObj.width,
                        height: imgObj.height
                    };
                    callback.call(this, obj);
                    clearInterval(timer);
                }
            }, 50);
        }
    }

    $.fn.imgGetSize = function(callback) {
        return this.each(function() {
            getSize.call(this, this.src, callback);
        });
    };
})(jQuery);