(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{250:function(t,e,n){"use strict";var o=n(25);function r(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={props:{postEdit:{type:Object}},data:function(){return{post:this.postEdit?c({},this.postEdit):{title:"",descr:"",img:"",content:""}}},methods:{cancel:function(){this.$router.push("/admin/")},onSubmit:function(){this.$emit("submit",this.post)}}},f=n(3),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"new-post"},[n("div",{staticClass:"container"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[n("AppInput",{model:{value:t.post.title,callback:function(e){t.$set(t.post,"title",e)},expression:"post.title"}},[t._v(" Title ")]),t._v(" "),n("AppInput",{model:{value:t.post.descr,callback:function(e){t.$set(t.post,"descr",e)},expression:"post.descr"}},[t._v(" Descr ")]),t._v(" "),n("AppInput",{model:{value:t.post.img,callback:function(e){t.$set(t.post,"img",e)},expression:"post.img"}},[t._v(" Img ")]),t._v(" "),n("AppTextarea",{model:{value:t.post.content,callback:function(e){t.$set(t.post,"content",e)},expression:"post.content"}},[t._v(" Content ")]),t._v(" "),n("div",{staticClass:"controls"},[n("div",{on:{click:t.cancel}},[t._v("Cancel")]),t._v(" "),n("AppButton",[t._v(" Save ")])],1)],1)])])}),[],!1,null,null,null);e.a=component.exports},288:function(t,e,n){"use strict";n.r(e);var o={components:{newPostForm:n(250).a},layout:"admin",methods:{onSubmit:function(t){var e=this;this.$store.dispatch("addPost",t).then((function(){e.$router.push("/admin")}))}}},r=n(3),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper-content"},[e("newPostForm",{on:{submit:this.onSubmit}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);