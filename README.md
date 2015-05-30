# image-size
使用该插件，可以在图片onload之前获取图片的大小，在瀑布流布局中，应该可能会有用处。
###实现原理：
使用轮询，在图片onload之前，获取到图片大小。如果图片已经被缓存过，直接返回相关信息。

回调参数包含img: imgObj、width、height。
1. img: 图片元素
2. width: 图片宽度
3. height: 图片高度

``` javascript
$(function () {
   $("img").imgGetSize(function (data) {
       // this指向当前图片元素。
       // data包含图片引用img、宽度width、高度height
       $(this).attr({
           width: data.width,
           height: data.height
       });
   });
});
```
