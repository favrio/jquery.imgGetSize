# image-size
使用该插件，可以在图片onload之前获取图片的大小，在瀑布流布局中，应该可能会有用处。
实现原理：
使用轮询，在图片onload之前，获取到图片大小。如果图片已经被缓存过，直接返回相关信息。

``` javascript
$(function () {
   $("img").imgGetSize(function (data) {
       $(this).attr({
           width: data.width,
           height: data.height
       });
   });
});
```
