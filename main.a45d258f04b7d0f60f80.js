/*! For license information please see main.a45d258f04b7d0f60f80.js.LICENSE.txt */
!function(t){function e(e){for(var r,c,a=e[0],s=e[1],u=e[2],l=0,p=[];l<a.length;l++)c=a[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);for(f&&f(e);p.length;)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={0:0},i=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var a=window.webpackJsonp=window.webpackJsonp||[],s=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var f=s;i.push([121,1]),n()}({121:function(t,e,n){n(122),t.exports=n(310)},310:function(t,e,n){"use strict";n.r(e);n(308);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=s(t);if(e){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}function a(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var u=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(s,Phaser.Scene);var e,n,r,a=c(s);function s(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),a.call(this,{key:"BootScene"})}return e=s,(n=[{key:"preload",value:function(){this.load.image("bg_1","./assets/images/bg.png"),this.load.image("bg_2","./assets/images/bg_2.png"),this.load.image("bg_3","./assets/images/bg_3.png"),this.load.image("bg_4","./assets/images/bg_4.png"),this.load.image("bg_5","./assets/images/bg_5.png"),this.load.image("bg_6","./assets/images/bg_6.png"),this.load.image("logo","./assets/images/logo.png"),this.load.image("hand","./assets/images/hand.png"),this.load.image("bitcoin-icon","./assets/images/bitcoin-icon.png"),this.load.image("pro_Bubble","./assets/images/pro_Bubble.png"),this.load.image("anti_Bubble","./assets/images/anti_Bubble.png");for(var t=1;t<=6;t++)this.load.image("anti-crypto-".concat(t),"./assets/images/anti-crypto/".concat(t,".png"));for(var e=1;e<=11;e++)this.load.image("pro-crypto-".concat(e),"./assets/images/pro-crypto/".concat(e,".png"));for(var n=1;n<=3;n++)this.load.audio("fruit-splat-".concat(n),"./assets/sounds/fruit-splat-".concat(n,".mp3"));this.load.audio("score","./assets/sounds/score.wav");for(var r=1;r<=5;r++)this.load.image("f-".concat(r),"./assets/images/f-".concat(r,".png")),this.load.image("f-".concat(r,"-e"),"./assets/images/f-".concat(r,"-e.png"))}},{key:"create",value:function(){}},{key:"update",value:function(){this.scene.start("GameScene")}}])&&o(e.prototype,n),r&&o(e,r),s}(),f={isgameOver:!1,name:"",email:""};function l(t){return t.sys.canvas.width/2}function p(t){return t.sys.canvas.height/2}function y(t){return t.sys.canvas.width}function h(t){return t.sys.canvas.height}function b(t){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=w(t);if(e){var o=w(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}function m(t,e){return!e||"object"!==b(e)&&"function"!=typeof e?_(t):e}function _(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function w(t){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function O(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(i,Phaser.Physics.Arcade.Image);var e,n,r,o=v(i);function i(t,e,n){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),O(_(r=o.call(this,t,e,n,"anti-crypto-".concat(Phaser.Math.Between(1,6)))),"speed",3e3),O(_(r),"bubble",void 0),r.scene.add.existing(_(r)),r.scene.physics.world.enable(_(r)),r.setVelocityX(100),r.setScale(.4),r.flipX=!0,r.setBodySize(.3*r.width,.5*r.height),r.bubble=r.scene.add.image(r.x,r.y-100,"anti_Bubble").setScale(.7),r.name="anti-crypto",r}return e=i,(n=[{key:"preUpdate",value:function(){this&&(this.bubble.setPosition(this.x+30,this.y-140),f.isgameOver&&this.setVelocityX(0))}},{key:"die",value:function(){this.bubble.destroy(),this.destroy()}}])&&d(e.prototype,n),r&&d(e,r),i}();function S(t){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function j(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function x(t,e){return(x=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function R(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=T(t);if(e){var o=T(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return B(this,n)}}function B(t,e){return!e||"object"!==S(e)&&"function"!=typeof e?k(t):e}function k(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function T(t){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function E(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var M=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&x(t,e)}(i,Phaser.Physics.Arcade.Image);var e,n,r,o=R(i);function i(t,e,n,r){var c;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),E(k(c=o.call(this,t,e,n,"f-".concat(r))),"speed",3e3),E(k(c),"fruitsIndex",void 0),c.scene.add.existing(k(c)),c.scene.physics.world.enable(k(c)),c.fruitsIndex=r,c.name="fruits",c.setInteractive({cursor:"pointer"}),c}return e=i,(n=[{key:"shoot",value:function(t){this.setVelocity(t.x*this.speed,t.y*this.speed)}},{key:"hit",value:function(){var t=this.scene;t.sound.play("fruit-splat-".concat(Phaser.Math.Between(1,3)));var e=this.scene.add.image(this.x,this.y,"f-".concat(this.fruitsIndex,"-e")).setScale(0);this.scene.tweens.add({targets:e,duration:200,scale:1.2,onComplete:function(){t.tweens.add({targets:e,duration:200,alpha:0,onComplete:function(){e.destroy()}})}})}}])&&j(e.prototype,n),r&&j(e,r),i}();function C(t){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function F(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function G(t,e){return(G=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function V(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=X(t);if(e){var o=X(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return I(this,n)}}function I(t,e){return!e||"object"!==C(e)&&"function"!=typeof e?D(t):e}function D(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function X(t){return(X=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function z(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var A=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&G(t,e)}(i,Phaser.Physics.Arcade.Image);var e,n,r,o=V(i);function i(t,e,n){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),z(D(r=o.call(this,t,e,n,"pro-crypto-".concat(Phaser.Math.Between(1,11)))),"speed",3e3),z(D(r),"bubble",void 0),r.scene.add.existing(D(r)),r.scene.physics.world.enable(D(r)),r.setVelocityX(100),r.setScale(.4),r.flipX=!0,r.setBodySize(.3*r.width,.5*r.height),r.bubble=r.scene.add.image(r.x,r.y-100,"pro_Bubble").setScale(.7),r.name="pro-crypto",r}return e=i,(n=[{key:"preUpdate",value:function(){this&&(this.bubble.setPosition(this.x+30,this.y-140),f.isgameOver&&this.setVelocityX(0))}},{key:"die",value:function(){this.bubble.destroy(),this.destroy()}}])&&F(e.prototype,n),r&&F(e,r),i}();function U(t){return(U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function J(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function H(t,e){return(H=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function N(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=L(t);if(e){var o=L(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return q(this,n)}}function q(t,e){return!e||"object"!==U(e)&&"function"!=typeof e?K(t):e}function K(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function L(t){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Q(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var W=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&H(t,e)}(i,Phaser.Scene);var e,n,r,o=N(i);function i(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),Q(K(t=o.call(this,"GameScene")),"currentFruits",void 0),Q(K(t),"isDragStart",void 0),Q(K(t),"fruitsRotateVec",void 0),Q(K(t),"speed",2e3),Q(K(t),"fruitsGroup",void 0),Q(K(t),"anti_crypto_group",void 0),Q(K(t),"pro_crypto_group",void 0),Q(K(t),"score",void 0),Q(K(t),"scoreText",void 0),Q(K(t),"currentBg",4),Q(K(t),"bg",void 0),t}return e=i,(n=[{key:"init",value:function(){this.score=0}},{key:"create",value:function(){var t=this;this.fruitsGroup=this.add.group(),this.anti_crypto_group=this.add.group(),this.pro_crypto_group=this.add.group(),this.bg=this.add.image(l(this),p(this),"bg_".concat(this.currentBg));var e=this.add.image(y(this)-170,h(this)-200,"logo").setScale(.7);this.tweens.add({targets:e,scale:.72,yoyo:!0,repeat:-1}),this.add.image(70,65,"bitcoin-icon").setScale(.4).setDepth(10),this.scoreText=this.add.text(120,70,"0",{fontSize:"120px"}).setOrigin(0,.5).setDepth(10),this.currentFruits=new M(this,y(this)-250,p(this)+50,Phaser.Math.Between(1,5)),this.fruitsGroup.add(this.currentFruits);var n=this.add.image(y(this)-250,p(this)+130,"hand").setScale(.3);this.tweens.add({targets:n,duration:500,x:n.x-200,repeat:5,onComplete:function(){n.visible=!1}}),this.input.on("gameobjectdown",(function(){f.isgameOver||(t.isDragStart=!0,n.visible=!1)})),this.input.on("pointerup",(function(){t.isDragStart&&(t.isDragStart=!1,t.currentFruits.shoot(t.fruitsRotateVec),t.time.addEvent({delay:500,callback:function(){t.currentFruits=new M(t,y(t)-250,p(t)+50,Phaser.Math.Between(1,5)),t.fruitsGroup.add(t.currentFruits)}}))})),this.time.addEvent({delay:2e3,callback:function(){if(1==Phaser.Math.Between(0,1)){var e=new P(t,-100,Phaser.Math.Between(100,h(t)-100));t.anti_crypto_group.add(e)}else{var n=new A(t,-100,Phaser.Math.Between(100,h(t)-100));t.pro_crypto_group.add(n)}},repeat:-1}),this.physics.add.overlap(this.fruitsGroup,this.anti_crypto_group,(function(e,n){0!=t.currentFruits.body.velocity.x&&(e.hit(),t.score+=10,t.scoreText.text="".concat(t.score),n.die(),e.destroy())})),this.physics.add.overlap(this.fruitsGroup,this.pro_crypto_group,(function(e,n){0!=t.currentFruits.body.velocity.x&&(e.hit(),t.score-=10,t.scoreText.text="".concat(t.score),n.die(),e.destroy(),t.cameras.main.shake(500,.01),t.time.addEvent({delay:500,callback:function(){t.changebg()}}))}));var r=this.physics.add.image(y(this)-50,p(this),"bg").setScale(.1,1).setAlpha(.01);this.physics.add.overlap(r,this.anti_crypto_group,(function(e,n){f.isgameOver||(f.isgameOver=!0,t.add.text(l(t),p(t)-200,"Game Over",{fontSize:"130px",color:"red"}).setOrigin(.5))}))}},{key:"update",value:function(t,e){if(this.isDragStart){var n=this.input.activePointer,r=n.x-this.currentFruits.x,o=n.y-this.currentFruits.y;this.fruitsRotateVec=new Phaser.Math.Vector2(r,o),this.fruitsRotateVec.normalize()}}},{key:"changebg",value:function(){this.currentBg++,this.currentBg>6&&(this.currentBg=1),this.bg.setTexture("bg_".concat(this.currentBg))}}])&&J(e.prototype,n),r&&J(e,r),i}(),Y={type:Phaser.AUTO,parent:"game",backgroundColor:"#001625",width:1920,height:1080,scale:{mode:Phaser.Scale.FIT,autoCenter:Phaser.Scale.CENTER_BOTH},dom:{createContainer:!0},physics:{default:"arcade",arcade:{gravity:{y:0},debug:!1}},scene:[u,W]};new Phaser.Game(Y)}});