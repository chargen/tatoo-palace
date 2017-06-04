(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

if (promiseland._hasModule({ hashStr: "1f27895a1b70f747d734a51315e60c16" })){ return promiseland._getModule("1f27895a1b70f747d734a51315e60c16"); };
var PL$1 = (function(){
"use strict";
function PL$2/*parseException*/(PL$3/*msg*/, PL$4/*content*/){

  ;
  return {
    "type": "parse exception",
    "msg": PL$3/*msg*/,
    "content": PL$4/*content*/
  };
  ;};
function PL$5/*optional*/(PL$6/*param*/){

  ;
  return {
    "optional": true,
    "content": PL$6/*param*/
  };
  ;};

  ;
  /* function parseException (){} - hoisted */;
  ;
  /* function optional (){} - hoisted */;
  ;
  return {
    "parseException": PL$2/*parseException*/,
    "optional": PL$5/*optional*/
  };
  ;})();
;return PL$1;
};
  
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
