//使用require.config()方法，我们可以对模块的加载行为进行自定义。require.config()就写在主模块（main.js）的头部。参数就是一个对象，这个对象的paths属性指定各个模块的加载路径。
require.config({
   // 在path配置了一个模块ID和路径的映射
   paths: {
      'jquery': '../lib/jquery-1.7.2'
   }
});
// require函数接受的第一个参数是，所依赖模块的一个数组
// 第二个参数是一个回调函数，当前面指定的模块都加载成功后，它将被调用。加载的模块会以参数形式传入该函数，从而在回调函数内部就可以使用这些模块
require(['jquery'], function($) {
   $(document).on('click', '#contentBtn', function() {
      $('#messagebox').html('You have access Jquery by using require()');
   });
});
