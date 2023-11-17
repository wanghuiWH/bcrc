(function(){var a=0.017453292519943295;var g=function(u,t,r,p,m,l,k,j,h,x,w,v,s,q,o,n){this.elements=window.Float32Array?new Float32Array(16):[];var i=this.elements;i[0]=(u!==undefined)?u:1;i[4]=t||0;i[8]=r||0;i[12]=p||0;i[1]=m||0;i[5]=(l!==undefined)?l:1;i[9]=k||0;i[13]=j||0;i[2]=h||0;i[6]=x||0;i[10]=(w!==undefined)?w:1;i[14]=v||0;i[3]=s||0;i[7]=q||0;i[11]=o||0;i[15]=(n!==undefined)?n:1};g.prototype={set:function(u,t,r,p,m,l,k,j,h,x,w,v,s,q,o,n){var i=this.elements;i[0]=u;i[4]=t;i[8]=r;i[12]=p;i[1]=m;i[5]=l;i[9]=k;i[13]=j;i[2]=h;i[6]=x;i[10]=w;i[14]=v;i[3]=s;i[7]=q;i[11]=o;i[15]=n;return this},identity:function(){this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return this},multiplyMatrices:function(Q,P){var x=Q.elements;var h=this.elements;var u=x[0],s=x[4],r=x[8],q=x[12];var O=x[1],N=x[5],M=x[9],L=x[13];var G=x[2],F=x[6],E=x[10],D=x[14];var y=x[3],w=x[7],v=x[11],t=x[15];var m=P[0],l=P[1],j=P[2],i=P[3];var K=P[4],J=P[5],I=P[6],H=P[7];var C=P[8],B=P[9],A=P[10],z=P[11];var p=P[12],o=P[13],n=P[14],k=P[15];h[0]=u*m+s*K+r*C+q*p;h[4]=u*l+s*J+r*B+q*o;h[8]=u*j+s*I+r*A+q*n;h[12]=u*i+s*H+r*z+q*k;h[1]=O*m+N*K+M*C+L*p;h[5]=O*l+N*J+M*B+L*o;h[9]=O*j+N*I+M*A+L*n;h[13]=O*i+N*H+M*z+L*k;h[2]=G*m+F*K+E*C+D*p;h[6]=G*l+F*J+E*B+D*o;h[10]=G*j+F*I+E*A+D*n;h[14]=G*i+F*H+E*z+D*k;h[3]=y*m+w*K+v*C+t*p;h[7]=y*l+w*J+v*B+t*o;h[11]=y*j+w*I+v*A+t*n;h[15]=y*i+w*H+v*z+t*k;return this},_rounded:function(j,h){h=Math.pow(10,h||15);return Math.round(j*h)/h},_arrayWrap:function(h){return window.Float32Array?new Float32Array(h):h},appendTransform:function(s,q,p,G,F,E,u,t,r,o,n,A,w,v){var m=u*a;var D=this._rounded(Math.cos(m));var j=this._rounded(Math.sin(m));var l=t*a;var C=this._rounded(Math.cos(l));var i=this._rounded(Math.sin(l));var k=r*a;var B=this._rounded(Math.cos(k*-1));var h=this._rounded(Math.sin(k*-1));this.multiplyMatrices(this,this._arrayWrap([1,0,0,s,0,D,j,q,0,-j,D,p,0,0,0,1]));this.multiplyMatrices(this,this._arrayWrap([C,0,i,0,0,1,0,0,-i,0,C,0,0,0,0,1]));this.multiplyMatrices(this,this._arrayWrap([B*G,h*F,0,0,-h*G,B*F,0,0,0,0,1*E,0,0,0,0,1]));if(o||n){this.multiplyMatrices(this,this._arrayWrap([this._rounded(Math.cos(o*a)),this._rounded(Math.sin(o*a)),0,0,-1*this._rounded(Math.sin(n*a)),this._rounded(Math.cos(n*a)),0,0,0,0,1,0,0,0,0,1]))}if(A||w||v){this.elements[12]-=A*this.elements[0]+w*this.elements[4]+v*this.elements[8];this.elements[13]-=A*this.elements[1]+w*this.elements[5]+v*this.elements[9];this.elements[14]-=A*this.elements[2]+w*this.elements[6]+v*this.elements[10]}return this}};var f=function(k,i,m,l,j,h){this.a=k==null?1:k;this.b=i||0;this.c=m||0;this.d=l==null?1:l;this.tx=j||0;this.ty=h||0;return this};f.prototype={identity:function(){this.a=this.d=1;this.b=this.c=this.tx=this.ty=0;return this},appendTransform:function(l,j,o,n,s,m,k,t,q){if(s%360){var h=s*a;var p=Math.cos(h);var i=Math.sin(h)}else{p=1;i=0}if(m||k){m*=a;k*=a;this.append(Math.cos(k),Math.sin(k),-Math.sin(m),Math.cos(m),l,j);this.append(p*o,i*o,-i*n,p*n,0,0)}else{this.append(p*o,i*o,-i*n,p*n,l,j)}if(t||q){this.tx-=t*this.a+q*this.c;this.ty-=t*this.b+q*this.d}return this},append:function(q,o,n,m,l,j){var i=this.a;var p=this.b;var k=this.c;var h=this.d;this.a=q*i+o*k;this.b=q*p+o*h;this.c=n*i+m*k;this.d=n*p+m*h;this.tx=l*i+j*k+this.tx;this.ty=l*p+j*h+this.ty;return this},initialize:function(k,i,m,l,j,h){this.a=k;this.b=i;this.c=m;this.d=l;this.tx=j;this.ty=h;return this},setValues:function(k,i,m,l,j,h){this.a=k==null?1:k;this.b=i||0;this.c=m||0;this.d=l==null?1:l;this.tx=j||0;this.ty=h||0;return this},copy:function(h){return this.setValues(h.a,h.b,h.c,h.d,h.tx,h.ty)}};function e(l,k,n){for(var j=0,h=k.length;j<h;j++){var m=k[j];d(l,m,n)}}function d(h,j,i){Object.defineProperty(h,j,{get:function(){return this["_"+j]},set:function(k){this["_"+j]=k;i()}})}function c(h){return(typeof HTMLElement==="object"?h instanceof HTMLElement:h&&typeof h==="object"&&h!==null&&h.nodeType===1&&typeof h.nodeName==="string")}function b(j,h){if(j.___mixCSS3Transform){return}var k=["translateX","translateY","translateZ","scaleX","scaleY","scaleZ","rotateX","rotateY","rotateZ","skewX","skewY","originX","originY","originZ"],i=c(j);if(!h){k.push("perspective")}j.___mixCSS3Transform=true;e(j,k,function(){var m=j.matrix3d.identity().appendTransform(j.translateX,j.translateY,j.translateZ,j.scaleX,j.scaleY,j.scaleZ,j.rotateX,j.rotateY,j.rotateZ,j.skewX,j.skewY,j.originX,j.originY,j.originZ);var l=(h?"":"perspective("+j.perspective+"px) ")+"matrix3d("+Array.prototype.slice.call(m.elements).join(",")+")";if(i){j.style.transform=j.style.msTransform=j.style.OTransform=j.style.MozTransform=j.style.webkitTransform=l}else{j.transform=l}});j.matrix3d=new g();if(!h){j.perspective=500}j.scaleX=j.scaleY=j.scaleZ=1;j.translateX=j.translateY=j.translateZ=j.rotateX=j.rotateY=j.rotateZ=j.skewX=j.skewY=j.originX=j.originY=j.originZ=0}b.getMatrix3D=function(j){var h={translateX:0,translateY:0,translateZ:0,rotateX:0,rotateY:0,rotateZ:0,skewX:0,skewY:0,originX:0,originY:0,originZ:0,scaleX:1,scaleY:1,scaleZ:1};for(var i in j){if(j.hasOwnProperty(i)){h[i]=j[i]}}return new g().identity().appendTransform(h.translateX,h.translateY,h.translateZ,h.scaleX,h.scaleY,h.scaleZ,h.rotateX,h.rotateY,h.rotateZ,h.skewX,h.skewY,h.originX,h.originY,h.originZ).elements};b.getMatrix2D=function(j){var h={translateX:0,translateY:0,rotation:0,skewX:0,skewY:0,originX:0,originY:0,scaleX:1,scaleY:1};for(var i in j){if(j.hasOwnProperty(i)){h[i]=j[i]}}return new f().identity().appendTransform(h.translateX,h.translateY,h.scaleX,h.scaleY,h.rotation,h.skewX,h.skewY,h.originX,h.originY)};if(typeof module!=="undefined"&&typeof exports==="object"){module.exports=b}else{window.Transform=b}})();