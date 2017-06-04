(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
var __requireFun = function(parModule){
      var returnPromise = new __Promise();
      try{__require([parModule], function(m){
        if (promiseland.isPromiseLandPromisingModule(m)){
          m.then(function(realm){returnPromise.resolve(realm);}, function(e){returnPromise.reject(e);});
        }else{
          returnPromise.resolve(m);
        };
        }, function(err){ returnPromise.reject(err); });
      }catch(e){ returnPromise.reject(e); };
      return returnPromise.promise;};
    if (promiseland._hasModule({ hashStr: "ac73fa236280c484aa638c5bacc4b843" })){ return promiseland._getModule("ac73fa236280c484aa638c5bacc4b843"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "ac73fa236280c484aa638c5bacc4b843", "module": PL$1, promising: true });
var PL$2 = (function(){
"use strict";
var PL$3/*promiseland exception catcher*/ = function(code){
  return function(res){
    try{ code(res); }catch(e){
      PL$1.reject(e);
    };
  };
};
var PL$4/*catch rejected*/ = function(e){
  PL$1.reject(e);
};
var PL$5/*Parser*/;
var PL$7/*util*/;
var PL$9/*basics*/;
PL$3/*promiseland exception catcher*/(function(){

  ;
  __requireFun("./Parser").then(PL$3/*promiseland exception catcher*/(function(PL$6){PL$5/*Parser*/ = PL$6;
  __requireFun("./util").then(PL$3/*promiseland exception catcher*/(function(PL$8){PL$7/*util*/ = PL$8;
  __requireFun("./basics").then(PL$3/*promiseland exception catcher*/(function(PL$10){PL$9/*basics*/ = PL$10;
  PL$1.resolve(PL$9/*basics*/); return;
  PL$1.resolve(); return;}), PL$4/*catch rejected*/);
  ;}), PL$4/*catch rejected*/);
  ;}), PL$4/*catch rejected*/);
  ;
})();return PL$1;
})();
;;
return PL$1};
  
  if (typeof exports == "object" && typeof module == "object"){ // CommonJS
    module.exports = __modFun(function(modulesAr, callback, errBack){
      // the require function for CommonJs
      var args = [];
      try{
        var i = 0;
        var l = modulesAr.length;
        for (i; i < l; ++i){
          args.push(require(modulesAr[i]));
        };
      }catch(e){
        errBack(e);
        return;
      };
      callback.apply(callback, args);
    }, require("promiseland"));
  
  }else if (typeof define == "function" && define.amd){ // AMD
    define(["require", "promiseland"], __modFun);
  
  }else{ // Plain browser env
    __modFun(function(){ throw { msg: "require not possible in non loader mode" }; });
  
  };
})();
