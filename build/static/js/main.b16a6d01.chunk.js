(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{103:function(e,t,c){},136:function(e,t,c){},137:function(e,t,c){},138:function(e,t,c){},139:function(e,t,c){},155:function(e,t,c){},156:function(e,t,c){},157:function(e,t,c){},158:function(e,t,c){},159:function(e,t,c){},160:function(e,t,c){},161:function(e,t,c){},162:function(e,t,c){},163:function(e,t,c){},164:function(e,t,c){},165:function(e,t,c){},166:function(e,t,c){},167:function(e,t,c){},168:function(e,t,c){},169:function(e,t,c){},170:function(e,t,c){},171:function(e,t,c){},172:function(e,t,c){},174:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(24),i=c.n(n),r=c(10),j=c(6),l=c(69),o=c.n(l),d=c(70),b=c.n(d),u=c(71),m=c.n(u),O=c(72),p=c.n(O),h=c(73),x=c.n(h),v=c(74),g=c.n(v),f=c(75),N=c.n(f),y=(c(95),c(0));function w(){var e=Object(j.g)();return Object(y.jsxs)("div",{id:"nav",children:[Object(y.jsx)("div",{className:"nav-item",children:Object(y.jsx)("div",{className:"logo",children:"REMO"})}),Object(y.jsx)(r.b,{to:"/",children:Object(y.jsxs)("div",{className:"/"===e.pathname?"nav-item--activated":"nav-item",children:[Object(y.jsx)(o.a,{className:"icon"}),"Home"]})}),Object(y.jsx)(r.b,{to:"/Series",children:Object(y.jsxs)("div",{className:"/Series"===e.pathname?"nav-item--activated":"nav-item",children:[Object(y.jsx)(b.a,{className:"icon"}),"Series"]})}),Object(y.jsx)(r.b,{to:"/Movies",children:Object(y.jsxs)("div",{className:"/Movies"===e.pathname?"nav-item--activated":"nav-item",children:[Object(y.jsx)(m.a,{className:"icon"}),"Movies"]})}),Object(y.jsx)(r.b,{to:"/MyList",children:Object(y.jsxs)("div",{className:"/MyList"===e.pathname?"nav-item--activated":"nav-item",children:[Object(y.jsx)(p.a,{className:"icon"}),"MyList"]})}),Object(y.jsx)(r.b,{to:"/Downloads",children:Object(y.jsxs)("div",{className:"/Downloads"===e.pathname?"nav-item--activated":"nav-item",children:[Object(y.jsx)(x.a,{className:"icon"}),"Downloads"]})}),Object(y.jsx)(r.b,{to:"/News",children:Object(y.jsxs)("div",{className:"/News"===e.pathname?"nav-item--activated":"nav-item",children:[Object(y.jsx)(g.a,{className:"icon"}),"News"]})}),Object(y.jsx)(r.b,{to:"/Settings",children:Object(y.jsxs)("div",{className:"/Settings"===e.pathname?"nav-item--activated":"nav-item",children:[Object(y.jsx)(N.a,{className:"icon"}),"Settings"]})})]})}var S=c(5),k=c.n(S),_=c(9),T=c(3),M=(c(103),c(43)),C=c.n(M),L=c(78),P=c.n(L),I=c(77),E=c.n(I),A=c(22),B=c(29),U=c.n(B),D=c(76),R=c.n(D),F={baseUrl:"https://api.themoviedb.org/3/",apiKey:"85250e67dc2bb1a56f48a965b58ed848",originalImage:function(e){return"https://image.tmdb.org/t/p/original/".concat(e)},w500Image:function(e){return"https://image.tmdb.org/t/p/w500/".concat(e)},w200Image:function(e){return"https://image.tmdb.org/t/p/w200/".concat(e)}},G=U.a.create({baseURL:F.baseUrl,headers:{"Content-Type":"application/json"},paramsSerializer:function(e){return R.a.stringify(Object(A.a)(Object(A.a)({},e),{},{api_key:F.apiKey}))}});G.interceptors.request.use(function(){var e=Object(_.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),G.interceptors.response.use((function(e){return e&&e.data?e.data:e}),(function(e){throw e}));var V=G,q={movie:"movie",tv:"tv",all:"all"},W={trending:"trending",upcoming:"upcoming",popular:"popular",top_rated:"top_rated"},z={trending:"trending",popular:"popular",top_rated:"top_rated",on_the_air:"on_the_air"},K={getTrendingList:function(e,t){var c="trending/".concat(e,"/week");return V.get(c,t)},getMoviesList:function(e,t){var c="movie/".concat(W[e]);return V.get(c,t)},getTvList:function(e,t){var c="tv/".concat(z[e]);return V.get(c,t)},getVideos:function(e,t){var c="".concat(q[e],"/").concat(t,"/videos");return V.get(c,{params:{}})},search:function(e,t){var c="search/".concat(q[e]);return V.get(c,t)},discover:function(e,t){var c="discover/".concat(q[e]);return V.get(c,t)},detail:function(e,t,c){var s="".concat(q[e],"/").concat(t);return V.get(s,c)},credits:function(e,t){var c="".concat(q[e],"/").concat(t,"/credits");return V.get(c,{params:{}})},similar:function(e,t){var c="".concat(q[e],"/").concat(t,"/similar");return V.get(c,{params:{}})},getTVSeasons:function(e,t){var c="tv/".concat(e,"/season/").concat(t);return V.get(c,{params:{}})},getGenres:function(){return V.get("/genre/movie/list",{params:{}})}},Y=(c(136),function(){return Object(y.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"13",height:"13",viewBox:"0 0 24 24",className:"star",children:Object(y.jsx)("path",{d:"M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"})})});c(137);function H(e){var t=e.movie,c=F.w500Image(t.backdrop_path?t.backdrop_path:t.poster_path);return Object(y.jsxs)("div",{className:"result-container",children:[Object(y.jsx)("img",{src:c,alt:"".concat(t.title," Poster")}),Object(y.jsxs)("div",{className:"container",children:[Object(y.jsx)("span",{className:"listTitle",children:t.title}),Object(y.jsx)("div",{className:"details",children:Object(y.jsxs)("div",{className:"year",children:[t.release_date?t.release_date.slice(0,4):t.first_air_date?t.first_air_date.slice(0,4):""," ","- ",t.vote_average," ",Object(y.jsx)(Y,{})]})})]})]})}function J(){var e="https://i.pinimg.com/originals/2b/90/0d/2b900d5612554cd0b5edf7d8e848c3ea.png",t=Object(s.useState)(!1),c=Object(T.a)(t,2),a=c[0],n=c[1],i=Object(s.useState)(!1),l=Object(T.a)(i,2),o=l[0],d=l[1],b=Object(s.useState)(!1),u=Object(T.a)(b,2),m=u[0],O=u[1],p="https://api.themoviedb.org/3/genre/movie/list?api_key=".concat("85250e67dc2bb1a56f48a965b58ed848","&language=en-US"),h=Object(s.useState)([]),x=Object(T.a)(h,2),v=x[0],g=x[1],f=Object(s.useState)(""),N=Object(T.a)(f,2),w=N[0],S=N[1],M=Object(s.useState)([]),L=Object(T.a)(M,2),I=L[0],A=L[1],B=Object(s.useState)("All genres"),D=Object(T.a)(B,2),R=D[0],G=D[1],V=Object(j.f)(),q=Object(s.useState)("All time"),W=Object(T.a)(q,2),z=W[0],K=W[1];return Object(s.useEffect)((function(){var e=function(){var e=Object(_.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.a.get(p);case 3:t=e.sent,g(t.data.genres),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[p]),Object(s.useEffect)((function(){fetch("\n      https://api.themoviedb.org/3/search/movie?api_key=".concat(F.apiKey,"&language=en-US&query=").concat(w,"&page=1&include_adult=false")).then((function(e){return e.json()})).then((function(e){e.errors?A([]):A(e.results),console.log(I)}))}),[w]),Object(y.jsxs)("div",{id:"top-bar",children:[Object(y.jsxs)("div",{className:"left",children:[Object(y.jsxs)("div",{className:"boxContainer",children:[Object(y.jsxs)("div",{className:"genreBox",onClick:function(){d(!o),O(!1),n(!1)},children:[Object(y.jsxs)("span",{children:[" ",R]}),Object(y.jsx)(C.a,{})]}),o&&Object(y.jsx)("div",{className:"genreSelect",children:Object.values(v).map((function(e){return Object(y.jsx)(r.b,{to:{pathname:"/Movies/GenreSelected/".concat(e.name),id:"".concat(e.id)},style:{textDecoration:"none",color:"white"},children:Object(y.jsx)("span",{className:"genre",name:e.id,onClick:function(){G(e.name),d(!1)},children:e.name})})}))})]}),Object(y.jsxs)("div",{className:"boxContainer",children:[Object(y.jsxs)("div",{className:"yearBox",onClick:function(){O(!m),d(!1),n(!1)},children:[Object(y.jsx)("span",{children:z}),Object(y.jsx)(C.a,{})]}),m&&Object(y.jsxs)("div",{className:"yearSelect",children:[Object(y.jsx)("span",{children:"All time"}),Object(y.jsx)("input",{type:"number",min:"1990",value:z,onKeyUp:function(e){13===e.keyCode&&(V.push("/Movies/YearSelected/".concat(z)),O(!1))},onChange:function(e){return K(e.target.value)}})]})]})]}),Object(y.jsxs)("div",{className:"middle",children:[Object(y.jsxs)("form",{children:[Object(y.jsx)("input",{type:"text",placeholder:"Search Movies, TV series,...",value:w,onChange:function(e){return S(e.target.value)}}),Object(y.jsx)("div",{className:"searchIcon",children:Object(y.jsx)(r.b,{to:{pathname:"/Movies/Search/".concat(w),query:"".concat(w)},children:Object(y.jsx)(E.a,{className:"icon",onClick:function(){return S("")}})})})]}),I&&Object(y.jsx)("ul",{className:"results",children:I.map((function(e){return Object(y.jsx)("li",{children:Object(y.jsx)(H,{movie:e})},e.id)}))})]}),Object(y.jsxs)("div",{className:"right",children:[Object(y.jsx)(P.a,{className:"icon"}),Object(y.jsxs)("div",{className:"profile",children:[Object(y.jsxs)("div",{className:"main-profile",onClick:function(){n(!a),d(!1),O(!1)},children:[Object(y.jsx)("img",{src:e,alt:"profile_pic"}),Object(y.jsx)("span",{className:"username",children:"Ngyn Ngyn"}),Object(y.jsx)(C.a,{className:"icon"})]}),a&&Object(y.jsxs)("div",{className:"options",children:[Object(y.jsxs)("div",{className:"otherUsers",children:[Object(y.jsxs)("div",{className:"user",children:[Object(y.jsx)("img",{src:e,alt:"profile_pic"}),Object(y.jsx)("span",{className:"username",children:"Ngyn Ngyn"})]}),Object(y.jsxs)("div",{className:"user",children:[Object(y.jsx)("img",{src:e,alt:"profile_pic"}),Object(y.jsx)("span",{className:"username",children:"Ngyn Ngyn"})]}),Object(y.jsxs)("div",{className:"user",children:[Object(y.jsx)("img",{src:e,alt:"profile_pic"}),Object(y.jsx)("span",{className:"username",children:"Ngyn Ngyn"})]})]}),Object(y.jsxs)("div",{className:"menu",children:[Object(y.jsx)("span",{children:"Account"}),Object(y.jsx)("span",{children:"Help Center"}),Object(y.jsx)(r.b,{to:"/Login",children:Object(y.jsx)("span",{children:"Log Out"})})]})]})]})]})]})}c(138);var Z=function(e){var t=e.item,c=e.category,s=F.w500Image(t.backdrop_path?t.backdrop_path:t.poster_path),a="movie"===c?"/views/movie/".concat(t.id,"/play"):"views/tv/".concat(t.id,"/play");return Object(y.jsxs)("div",{className:"MovieListItem",children:[Object(y.jsxs)("div",{className:"wrap-img",children:[Object(y.jsx)("img",{src:s,alt:"movie-img"}),Object(y.jsx)(r.b,{to:a,children:Object(y.jsx)("div",{className:"play-btn-outer",children:Object(y.jsx)("div",{className:"play-btn"})})})]}),Object(y.jsx)("div",{className:"item-info"}),Object(y.jsx)("div",{className:"title",children:t.title||t.name}),Object(y.jsx)("div",{className:"details",children:Object(y.jsxs)("div",{className:"year",children:[t.release_date?t.release_date.slice(0,4):t.first_air_date?t.first_air_date.slice(0,4):""," ","- ",t.vote_average," ",Object(y.jsx)(Y,{})]})})]})},$=(c(139),c(79)),Q=c.n($),X=function(e){return Object(y.jsx)("div",{onClick:e.onClick,className:"icon leftArrow",children:Object(y.jsx)(Q.a,{})})},ee=c(80),te=c.n(ee),ce=function(e){return Object(y.jsx)("div",{onClick:e.onClick,className:"icon rightArrow",children:Object(y.jsx)(te.a,{})})},se=(c(64),c(65),c(26)),ae=c.n(se);function ne(e){var t=Object(s.useState)([]),c=Object(T.a)(t,2),a=c[0],n=c[1],i={infinite:!0,slidesToShow:6,swipeToSlide:!0,nextArrow:Object(y.jsx)(ce,{}),prevArrow:Object(y.jsx)(X,{}),responsive:[{breakpoint:1700,settings:{slidesToShow:4,slidesToScroll:4}},{breakpoint:1280,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:913,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:650,settings:{slidesToShow:1,slidesToScroll:1}}]};return Object(s.useEffect)((function(){var t=function(){var t=Object(_.a)(k.a.mark((function t(){var c,s;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=null,s={},"similar"===e.type){t.next=35;break}t.t0=e.category,t.next=t.t0===q.movie?6:23;break;case 6:if(!e.type){t.next=18;break}if(e.type!==W.trending){t.next=13;break}return t.next=10,K.getTrendingList(e.category,{params:s});case 10:c=t.sent,t.next=16;break;case 13:return t.next=15,K.getMoviesList(e.type,{params:s});case 15:c=t.sent;case 16:t.next=22;break;case 18:return s={with_genres:e.genre_id},t.next=21,K.discover(q.movie,{params:s});case 21:c=t.sent;case 22:return t.abrupt("break",33);case 23:if(e.type!==z.trending){t.next=29;break}return t.next=26,K.getTrendingList(e.category,{params:s});case 26:c=t.sent,t.next=32;break;case 29:return t.next=31,K.getTvList(e.type,{params:s});case 31:c=t.sent;case 32:return t.abrupt("break",33);case 33:t.next=38;break;case 35:return t.next=37,K.similar(e.category,e.id);case 37:c=t.sent;case 38:n(c.results);case 39:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[e.id,e.category,e.type]),Object(y.jsxs)("div",{className:"list",children:[Object(y.jsx)("span",{className:"listTitle",children:e.title}),Object(y.jsx)("div",{className:"wrapper",children:Object(y.jsx)(ae.a,Object(A.a)(Object(A.a)({},i),{},{children:a&&a.map((function(t,c){return Object(y.jsx)(Z,{item:t,category:e.category},c)}))}))})]})}c(155),c(156);var ie=c(81),re=c.n(ie),je=function(e){var t=e.item,c=Object(s.useState)([]),a=Object(T.a)(c,2),n=a[0],i=a[1];Object(s.useEffect)((function(){var e=function(){var e=Object(_.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.getGenres();case 2:t=e.sent,i(Object.values(t)[0]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t]);var j=n.map((function(e){return e.id})),l=n.map((function(e){return e.name})),o=F.originalImage(t.backdrop_path?t.backdrop_path:t.poster_path),d="/views/movie/".concat(t.id,"/play");return Object(y.jsx)("div",{className:"bannerContent",children:Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("img",{className:"img",src:o,alt:""}),Object(y.jsx)("div",{className:"filter"}),Object(y.jsxs)("div",{className:"slide-info",children:[Object(y.jsx)("div",{className:"tag",children:Object(y.jsx)("span",{children:"Popular Movies & Series"})}),Object(y.jsx)("div",{className:"title",children:t.name?t.name:t.original_title}),Object(y.jsxs)("div",{className:"yearGenre",children:[Object(y.jsx)("span",{name:"year",children:t.first_air_date?t.first_air_date.slice(0,4):t.release_date.slice(0,4)}),Object(y.jsx)("span",{className:"separator",children:"|"}),Object(y.jsx)("span",{name:"duration",children:"tv"===t.media_type?"Series":"Movie"}),Object(y.jsx)("span",{className:"separator",children:"|"}),Object(y.jsx)("span",{name:"genre",children:t.genre_ids.map((function(e){var t=j.indexOf(e);return void 0===t?null:l[t]})).filter(Boolean).toString().replace(/,/g,", ")})]}),Object(y.jsx)("div",{className:"desc",children:Object(y.jsx)("span",{children:t.overview.length<200?t.overview:t.overview.split(".")[0]+"..."})}),Object(y.jsx)("div",{className:"buttons",children:Object(y.jsx)(r.b,{to:d,children:Object(y.jsxs)("button",{className:"watchBtn",children:[Object(y.jsx)(re.a,{className:"playIcon"}),Object(y.jsx)("span",{children:"Watch"})]})})})]})]})})};function le(){var e=Object(s.useState)([]),t=Object(T.a)(e,2),c=t[0],a=t[1],n={arrows:!1,infinite:!0,autoplay:!0,autoplaySpeed:5e3,slidesToShow:1,slidesToScroll:1,centerPadding:0,swipeToSlide:!0,dots:!0,customPaging:function(){return Object(y.jsx)("div",{className:"dots"})}};return Object(s.useEffect)((function(){var e=function(){var e=Object(_.a)(k.a.mark((function e(){var t,s;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={page:1},e.next=3,K.getTrendingList(q.all,{params:t});case 3:s=e.sent,a(s.results.slice(0,6)),console.log(c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(y.jsx)("div",{className:"banner",children:Object(y.jsx)(ae.a,Object(A.a)(Object(A.a)({},n),{},{children:c.map((function(e){return Object(y.jsx)(je,{item:e})}))}))})}c(157),c(158),c.p,c(159);function oe(){return Object(y.jsxs)("div",{className:"home",children:[Object(y.jsx)(le,{}),Object(y.jsxs)("div",{className:"movieListContainer",children:[Object(y.jsx)(ne,{category:q.movie,type:W.trending,title:"Trending Movies"}),Object(y.jsx)(ne,{category:q.tv,type:z.trending,title:"Trending TV"}),Object(y.jsx)(ne,{category:q.movie,type:W.top_rated,title:"Top Rated Movies"}),Object(y.jsx)(ne,{category:q.tv,type:z.top_rated,title:"Top Rated TV"}),Object(y.jsx)(ne,{category:q.movie,type:W.popular,title:"Popular Movies"})]})]})}c(160);function de(){return Object(y.jsx)("div",{className:"downloads",children:Object(y.jsx)("div",{className:"main-title",children:"Downloads"})})}c(161);function be(e){var t=e.item,c=F.w500Image(t.backdrop_path?t.backdrop_path:t.poster_path);return Object(y.jsxs)("div",{className:"slide-item",children:[Object(y.jsx)("img",{className:"slide-img",src:c,alt:t.title}),Object(y.jsxs)("div",{className:"slide-info",children:[Object(y.jsx)("div",{className:"slide-title",children:t.title||t.title}),Object(y.jsxs)("div",{className:"slide-year",children:[t.release_date?t.release_date.slice(0,4):t.first_air_date?t.first_air_date.slice(0,4):""," ","- ",t.vote_average," ",Object(y.jsx)(Y,{})]})]})]})}c(162);function ue(e){var t=Object(s.useState)([]),c=Object(T.a)(t,2),a=c[0],n=c[1];return Object(s.useEffect)((function(){var t=function(){var t=Object(_.a)(k.a.mark((function t(){var c,s;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c={page:1},t.next=3,K.getMoviesList(e.type,{params:c});case 3:s=t.sent,n(s.results.slice()),console.log(a);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[e.type]),Object(y.jsx)("div",{className:"slide-list",children:Object(y.jsx)("div",{className:"slide-wrapper",children:Object(y.jsx)(ae.a,Object(A.a)(Object(A.a)({},{infinite:!0,slidesToShow:3,swipeToSlide:!0,arrows:!1,autoplay:!0,autoplaySpeed:5e3}),{},{children:a&&a.map((function(e){return Object(y.jsx)(be,{item:e,category:q.movie})}))}))})})}c(163);var me=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}];function Oe(){return Object(y.jsxs)("div",{className:"movies",children:[Object(y.jsx)("div",{className:"main-title",children:"Movies For You"}),Object(y.jsx)(ue,{type:W.popular}),Object(y.jsxs)("div",{className:"movieListContainer",children:[Object(y.jsx)(ne,{category:q.movie,genre_id:me[0].id,title:me[0].name}),Object(y.jsx)(ne,{category:q.movie,genre_id:me[3].id,title:me[3].name}),Object(y.jsx)(ne,{category:q.movie,genre_id:me[6].id,title:me[6].name}),Object(y.jsx)(ne,{category:q.movie,genre_id:me[2].id,title:me[2].name}),Object(y.jsx)(ne,{category:q.movie,genre_id:me[8].id,title:me[8].name}),Object(y.jsx)(ne,{category:q.movie,genre_id:me[10].id,title:me[10].name})]})]})}c(164);function pe(){return Object(y.jsx)("div",{className:"myList",children:Object(y.jsx)("div",{className:"main-title",children:"My List"})})}c(165);function he(){return Object(y.jsx)("div",{className:"news",children:Object(y.jsx)("div",{className:"main-title",children:"News"})})}c(166);function xe(){return Object(y.jsx)("div",{className:"series",children:Object(y.jsx)("div",{className:"main-title",children:"Series"})})}c(167);function ve(){return Object(y.jsx)("div",{className:"settings",children:Object(y.jsxs)("div",{className:"settings-container",children:[Object(y.jsx)("div",{className:"main-title",children:"Settings"}),Object(y.jsx)("div",{className:"settings-title",children:"Notification"}),Object(y.jsxs)("section",{className:"sub-container",children:[Object(y.jsx)("div",{children:"Your Movie"}),Object(y.jsxs)("section",{className:"settings-items",children:[Object(y.jsxs)("div",{className:"settings-item",children:[Object(y.jsxs)("div",{children:[Object(y.jsx)("span",{children:"Recommended Movie"}),Object(y.jsx)("p",{children:"Movie we find that you'll like"})]}),Object(y.jsxs)("label",{className:"check-button",children:[Object(y.jsx)("input",{type:"checkbox"}),Object(y.jsx)("span",{className:"check-slider"})]})]}),Object(y.jsxs)("div",{className:"settings-item",children:[Object(y.jsxs)("div",{children:[Object(y.jsx)("span",{children:"New Movie"}),Object(y.jsx)("p",{children:"New movies from genres you like"})]}),Object(y.jsxs)("label",{className:"check-button",children:[Object(y.jsx)("input",{type:"checkbox"}),Object(y.jsx)("span",{className:"check-slider"})]})]}),Object(y.jsxs)("div",{className:"settings-item",children:[Object(y.jsxs)("div",{children:[Object(y.jsx)("span",{children:"News Update"}),Object(y.jsx)("p",{children:"Get the hottest news everyday"})]}),Object(y.jsxs)("label",{className:"check-button",children:[Object(y.jsx)("input",{type:"checkbox"}),Object(y.jsx)("span",{className:"check-slider"})]})]})]}),Object(y.jsx)("div",{className:"sub-title",children:"Buster Update"}),Object(y.jsxs)("section",{className:"settings-items",children:[Object(y.jsxs)("div",{className:"settings-item",children:[Object(y.jsxs)("div",{children:[Object(y.jsx)("span",{children:"Product News"}),Object(y.jsx)("p",{children:"New features and latest product update on Buster"})]}),Object(y.jsxs)("label",{className:"check-button",children:[Object(y.jsx)("input",{type:"checkbox"}),Object(y.jsx)("span",{className:"check-slider"})]})]}),Object(y.jsxs)("div",{className:"settings-item",children:[Object(y.jsxs)("div",{children:[Object(y.jsx)("span",{children:"Deal and Offers"}),Object(y.jsx)("p",{children:"Promos and events for you"})]}),Object(y.jsxs)("label",{className:"check-button",children:[Object(y.jsx)("input",{type:"checkbox"}),Object(y.jsx)("span",{className:"check-slider"})]})]})]})]}),Object(y.jsx)("div",{className:"settings-title",children:"Display Options"}),Object(y.jsx)("section",{className:"sub-container",children:Object(y.jsxs)("section",{className:"settings-items",children:[Object(y.jsxs)("div",{className:"settings-item",children:[Object(y.jsx)("div",{children:Object(y.jsx)("span",{children:"Language"})}),Object(y.jsxs)("label",{className:"check-button",children:[Object(y.jsx)("input",{type:"checkbox"}),Object(y.jsx)("span",{className:"check-slider"})]})]}),Object(y.jsxs)("div",{className:"settings-item",children:[Object(y.jsx)("div",{children:Object(y.jsx)("span",{children:"Font Size"})}),Object(y.jsxs)("label",{className:"check-button",children:[Object(y.jsx)("input",{type:"checkbox"}),Object(y.jsx)("span",{className:"check-slider"})]})]})]})})]})})}var ge=c(202),fe=c(87),Ne=c(201),ye=Object(fe.a)({palette:{type:"dark"}});function we(e){var t=e.setPage,c=e.numOfPages,s=void 0===c?10:c;return Object(y.jsx)("div",{style:{width:"100%",display:"flex",justifyContent:"center",marginTop:10},children:Object(y.jsx)(Ne.a,{theme:ye,children:Object(y.jsx)(ge.a,{onChange:function(e){return c=e.target.textContent,t(c),void window.scroll(0,0);var c},count:s,color:"primary"})})})}function Se(){var e=Object(j.g)().query,t=Object(s.useState)(1),c=Object(T.a)(t,2),a=c[0],n=c[1],i=Object(s.useState)([]),r=Object(T.a)(i,2),l=r[0],o=r[1],d=Object(s.useState)(),b=Object(T.a)(d,2),u=b[0],m=b[1];return Object(s.useEffect)((function(){var t=function(){var t=Object(_.a)(k.a.mark((function t(){var c,s;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c={query:e,page:a},t.next=3,K.search(q.movie,{params:c});case 3:s=t.sent,o(s.results),m(s.total_pages),console.log(s);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[e,a]),Object(y.jsxs)("div",{className:"filter-list",children:[Object(y.jsx)("span",{className:"listTitle",children:e}),Object(y.jsx)("div",{className:"movie-wrapper",children:Object(y.jsx)("div",{className:"container",children:l.map((function(e,t){return Object(y.jsx)("div",{className:"item",children:Object(y.jsx)(Z,{item:e},t)})}))})}),u>1&&Object(y.jsx)(we,{setPage:n,numOfPages:u})]})}function ke(){var e=Object(j.g)(),t=Object(s.useState)(1),c=Object(T.a)(t,2),a=c[0],n=c[1],i=Object(s.useState)([]),r=Object(T.a)(i,2),l=r[0],o=r[1],d=Object(s.useState)(),b=Object(T.a)(d,2),u=b[0],m=b[1],O=e.pathname.slice(21);return Object(s.useEffect)((function(){var e=function(){var e=Object(_.a)(k.a.mark((function e(){var t,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={year:O,page:a},e.next=3,K.discover(q.movie,{params:t});case 3:c=e.sent,o(c.results),m(c.total_pages),console.log(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[O,a]),Object(y.jsxs)("div",{className:"filter-list",children:[Object(y.jsx)("span",{className:"listTitle",children:O}),Object(y.jsx)("div",{className:"movie-wrapper",children:Object(y.jsx)("div",{className:"container",children:l.map((function(e,t){return Object(y.jsx)("div",{className:"item",children:Object(y.jsx)(Z,{item:e},t)})}))})}),u>1&&Object(y.jsx)(we,{setPage:n,numOfPages:u})]})}function _e(){var e=Object(j.g)(),t=e.id,c=Object(s.useState)(1),a=Object(T.a)(c,2),n=a[0],i=a[1],r=Object(s.useState)([]),l=Object(T.a)(r,2),o=l[0],d=l[1],b=Object(s.useState)(),u=Object(T.a)(b,2),m=u[0],O=u[1];return Object(s.useEffect)((function(){var e=function(){var e=Object(_.a)(k.a.mark((function e(){var c,s;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={with_genres:t,page:n},e.next=3,K.discover(q.movie,{params:c});case 3:s=e.sent,d(s.results),O(s.total_pages),console.log(s);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t,n]),Object(y.jsxs)("div",{className:"filter-list",children:[Object(y.jsx)("span",{className:"listTitle",children:e.pathname.slice(22)}),Object(y.jsx)("div",{className:"movie-wrapper",children:Object(y.jsx)("div",{className:"container",children:o.map((function(e,t){return Object(y.jsx)("div",{className:"item",children:Object(y.jsx)(Z,{item:e},t)})}))})}),m>1&&Object(y.jsx)(we,{setPage:i,numOfPages:m})]})}var Te=[{userName:"buster@gmail.com",password:"123456"}],Me=c(85),Ce=c.n(Me),Le=c(86),Pe=c.n(Le),Ie=c(51),Ee=c.n(Ie);c(168);function Ae(){var e=Object(s.useState)(!1),t=Object(T.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(""),i=Object(T.a)(n,2),r=i[0],j=i[1],l=Object(s.useState)(""),o=Object(T.a)(l,2),d=o[0],b=o[1],u=Object(s.useState)(!1),m=Object(T.a)(u,2),O=m[0],p=m[1],h=Object(s.useState)(!1),x=Object(T.a)(h,2),v=x[0],g=x[1],f=Object(s.useState)(!1),N=Object(T.a)(f,2),w=N[0],S=N[1],k=Object(s.useState)(!1),_=Object(T.a)(k,2),M=_[0],C=_[1],L=Object(s.useState)(""),P=Object(T.a)(L,2),I=P[0],E=P[1],A=Object(s.useState)(""),B=Object(T.a)(A,2),U=B[0],D=B[1],R=Object(s.useState)(!1),F=Object(T.a)(R,2),G=(F[0],F[1],Te),V=function(){G.some((function(e){return e.userName===r&&e.password===d}))?window.location.href="http://localhost:3000/":(p(!0),setTimeout((function(){p(!1)}),2500))},q=function(){a(!c)};return Object(y.jsxs)("div",{id:"login",children:[Object(y.jsx)("div",{className:"mask"}),Object(y.jsxs)("div",{className:"container",children:[Object(y.jsx)("h1",{children:"BUSTER"}),Object(y.jsx)("h2",{children:"Sign in"}),Object(y.jsxs)("div",{className:"login-social",children:[Object(y.jsx)("button",{className:"login-gg",children:"Continue with Google"}),Object(y.jsx)("button",{className:"login-fb"})]}),Object(y.jsx)("p",{className:"or",children:"or"}),Object(y.jsxs)("div",{className:"login-box",children:[Object(y.jsx)("label",{children:"Email address"}),Object(y.jsx)("input",{type:"text",placeholder:"User Name...",onChange:function(e){j(e.target.value)},onBlur:function(e){var t=e.target.value;D(t);var s=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase());g(!(s||!c))}}),Object(y.jsx)("label",{children:"Password"}),Object(y.jsx)("input",{type:"password",onChange:function(e){b(e.target.value)},onKeyDown:function(e){13===e.keyCode&&V()},onBlur:function(e){var t=e.target.value;E(t),t.length<6&&c?S(!0):S(!1)}}),c&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("label",{children:"Confirm Password"}),Object(y.jsx)("input",{type:"password",onBlur:function(e){var t=e.target.value;C(t!==I)}})]})]}),Object(y.jsx)("p",{className:"forgot",children:"Forgot password?"}),!c&&Object(y.jsx)("button",{className:"btn-signin",onClick:V,children:"SIGN IN"}),c&&Object(y.jsx)("button",{className:"btn-signup",onClick:function(){var e=!v&&!w&&!M;console.log(e),e&&(console.log(G),G.push({userName:U,password:I}),q())},children:"SIGN UP"}),!c&&Object(y.jsxs)("p",{children:["Don't have an account ",Object(y.jsx)("span",{onClick:q,children:"Sign up"})]}),c&&Object(y.jsxs)("p",{children:["You have an account ",Object(y.jsx)("span",{onClick:q,children:"Sign in"})]})]}),Object(y.jsxs)("div",{className:"notice account ".concat(O?"display":"hidden"),children:[Object(y.jsx)(Ce.a,{}),Object(y.jsxs)("div",{className:"incorrect-detail",children:[Object(y.jsx)("h3",{children:"Unsuccess"}),Object(y.jsx)("p",{children:"User name or password is incorrect"})]})]}),Object(y.jsxs)("div",{className:"notice email ".concat(v?"display":"hidden"),children:[Object(y.jsx)(Pe.a,{}),Object(y.jsxs)("div",{className:"incorrect-detail",children:[Object(y.jsx)("h3",{children:"Warning"}),Object(y.jsx)("p",{children:"Emaild invalid"})]})]}),Object(y.jsxs)("div",{className:"notice password ".concat(w?"display":"hidden"),children:[Object(y.jsx)(Ee.a,{}),Object(y.jsxs)("div",{className:"incorrect-detail",children:[Object(y.jsx)("h3",{children:"Warning"}),Object(y.jsx)("p",{children:"Password must has at leat 6 characters"})]})]}),Object(y.jsxs)("div",{className:"notice confirm-password ".concat(M?"display":"hidden"),children:[Object(y.jsx)(Ee.a,{}),Object(y.jsxs)("div",{className:"incorrect-detail",children:[Object(y.jsx)("h3",{children:"Warning"}),Object(y.jsx)("p",{children:"Confirm password incorrect!!!"})]})]})]})}var Be=function(e){return"https://www.2embed.ru/embed/tmdb/movie?id=".concat(e)},Ue=function(e,t,c){return"https://www.2embed.ru/embed/tmdb/tv?id=".concat(e,"&s=").concat(t,"&e=").concat(c)},De=(c(12),c(169),function(e){var t=e.src;return Object(y.jsx)("div",{className:"video",style:{paddingBottom:"55%"},children:Object(y.jsx)("iframe",{src:t,frameBorder:"0",allowFullScreen:!0})})}),Re=(c(170),function(e){var t=e.title,c=e.overview,s=Object(j.h)().category;return Object(y.jsxs)("div",{className:"overview",children:[Object(y.jsx)("h1",{children:t}),"tv"===s&&Object(y.jsxs)("h2",{className:"episode-name",children:["Episode name:\xa0",c.name||c.title]}),Object(y.jsx)("p",{children:c.overview}),Object(y.jsxs)("div",{children:["Release Date:\xa0",c.first_air_date||c.release_date||c.air_date]})]})});c(171);var Fe=function(){var e=Object(j.h)(),t=e.category,c=e.id,a=Object(s.useState)([]),n=Object(T.a)(a,2),i=(n[0],n[1]),r=Object(s.useState)(""),l=Object(T.a)(r,2),o=l[0],d=l[1],b=Object(s.useState)(""),u=Object(T.a)(b,2),m=u[0],O=u[1],p=Object(s.useState)([]),h=Object(T.a)(p,2),x=(h[0],h[1]),v=Object(s.useState)({}),g=Object(T.a)(v,2),f=g[0],N=g[1],w=Object(s.useState)([]),S=Object(T.a)(w,2),M=S[0],C=S[1],L=Object(s.useState)({}),P=Object(T.a)(L,2),I=(P[0],P[1],function(){var e=Object(_.a)(k.a.mark((function e(){var s,a,n,i,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={},e.next=3,K.detail(t,c,{params:s});case 3:if(a=e.sent,"tv"!==t){e.next=9;break}x(a.seasons),N(a),e.next=14;break;case 9:return N(a),e.next=12,K.getTrendingList(t,{params:s});case 12:n=e.sent,x(n.results);case 14:i=a.backdrop_path?a.backdrop_path:a.poster_path,d(i),r=a.title?a.title:a.name,document.title="".concat(r," - BUSTER"),C(r);case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),E=function(){var e=Object(_.a)(k.a.mark((function e(){var s;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.getVideos(t,c);case 2:s=e.sent,i(s.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){I(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f;"movie"===t?O(Be(c)):(N(s),s.episode_number?O(Ue(c,e,s.episode_number)):O(Ue(c,e,1)))}(),E()}),[c]),Object(y.jsxs)("div",{className:"views",style:{backgroundImage:"url(".concat(F.originalImage(o),")")},children:[Object(y.jsxs)("div",{className:"views-top",children:[Object(y.jsx)("div",{className:"views-top-left",children:Object(y.jsx)(Re,{title:M,overview:f})}),Object(y.jsx)("div",{className:"views-top-right",children:Object(y.jsx)(De,{src:m})})]}),Object(y.jsxs)("div",{className:"views-bot",children:[Object(y.jsx)("ul",{className:"bot-more-title",children:Object(y.jsx)("h4",{className:"more-title-1 active",children:"SIMILAR"})}),Object(y.jsx)("div",{className:"bot-more-content",children:Object(y.jsx)("div",{className:"more-content-1",children:Object(y.jsx)(ne,{category:t,type:"similar",id:c})})})]})]})};c(172);var Ge=function(){return Object(y.jsx)("div",{className:"App",children:Object(y.jsxs)(r.a,{children:[Object(y.jsxs)("div",{children:[Object(y.jsx)(w,{}),Object(y.jsx)(J,{})]}),Object(y.jsx)(j.c,{children:Object(y.jsxs)("div",{className:"main-container",children:[Object(y.jsx)(j.a,{exact:!0,path:"/",component:oe}),Object(y.jsx)(j.a,{exact:!0,path:"/Downloads",component:de}),Object(y.jsx)(j.a,{exact:!0,path:"/Movies",component:Oe}),Object(y.jsx)(j.a,{exact:!0,path:"/MyList",component:pe}),Object(y.jsx)(j.a,{exact:!0,path:"/News",component:he}),Object(y.jsx)(j.a,{exact:!0,path:"/Series",component:xe}),Object(y.jsx)(j.a,{exact:!0,path:"/Settings",component:ve}),Object(y.jsx)(j.a,{path:"/views/:category/:id",component:Fe}),Object(y.jsx)(j.a,{exact:!0,path:"/Movies/Search/:query",component:Se}),Object(y.jsx)(j.a,{exact:!0,path:"/Movies/YearSelected/:year",component:ke}),Object(y.jsx)(j.a,{exact:!0,path:"/Movies/GenreSelected/:genre",component:_e})]})}),Object(y.jsx)(j.c,{children:Object(y.jsx)(j.a,{exact:!0,path:"/Login",component:Ae})})]})})};i.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(Ge,{})}),document.getElementById("root"))},95:function(e,t,c){}},[[174,1,2]]]);
//# sourceMappingURL=main.b16a6d01.chunk.js.map