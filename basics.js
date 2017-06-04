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
    if (promiseland._hasModule({ hashStr: "cbad43138ce5582f64a804d62f1e618f" })){ return promiseland._getModule("cbad43138ce5582f64a804d62f1e618f"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "cbad43138ce5582f64a804d62f1e618f", "module": PL$1, promising: true });
var PL$22/*console*/;try{PL$22/*console*/ = console;}catch(e){};
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
var PL$9/*basic*/;
var PL$10/*unit*/;
var PL$11/*concept*/;
PL$3/*promiseland exception catcher*/(function(){

  ;
  __requireFun("./Parser").then(PL$3/*promiseland exception catcher*/(function(PL$6){PL$5/*Parser*/ = PL$6;
  __requireFun("./util").then(PL$3/*promiseland exception catcher*/(function(PL$8){PL$7/*util*/ = PL$8;
  PL$9/*basic*/ = new PL$5/*Parser*/();
  PL$10/*unit*/ = PL$9/*basic*/["unit"];
  PL$11/*concept*/ = PL$9/*basic*/["concept"];
  PL$9/*basic*/["addConcept"]("string", {
    "test": (function(PL$12/*interface*/, PL$13/*params*/){
    
      ;
      if((typeof PL$13/*params*/ === "string")){
        var PL$14/*i*/ = 0;
        ;
        var PL$15/*c*/;
        ;
        for(PL$14/*i*/ = 0;(PL$14/*i*/ < PL$13/*params*/["length"]);++PL$14/*i*/){{
          PL$15/*c*/ = PL$12/*interface*/["eat"](PL$10/*unit*/["char"]());
          if((! PL$15/*c*/ || (PL$15/*c*/ !== PL$13/*params*/[PL$14/*i*/]))){
            return;
          };
          ;}};
        ;
        return PL$13/*params*/;
      };
      ;
      ;})
  });
  PL$9/*basic*/["addConcept"]("regexChar", {
    "test": (function(PL$12/*interface*/, PL$13/*params*/){
    
      ;
      if((typeof PL$13/*params*/ === "object")){
        var PL$15/*c*/ = PL$12/*interface*/["eat"](PL$10/*unit*/["char"]());
        ;
        if(PL$15/*c*/){
          if(PL$13/*params*/["test"](PL$15/*c*/)){
            return PL$15/*c*/;
          };
          ;
        };
        ;
      };
      ;
      ;})
  });
  PL$9/*basic*/["addConcept"]("alternative", {
    "test": (function(PL$12/*interface*/, PL$13/*params*/){
    
      ;
      var PL$16/*l*/ = (PL$13/*params*/["length"] || 0);
      ;
      var PL$14/*i*/ = 0;
      ;
      if((typeof PL$13/*params*/ === "string")){
        var PL$17/*eaten*/ = PL$12/*interface*/["eat"](PL$10/*unit*/["char"]());
        ;
        if(! PL$17/*eaten*/){
          return;
        };
        ;
        if((PL$13/*params*/["indexOf"](PL$17/*eaten*/) === - 1)){
          return;
        };
        ;
        return PL$17/*eaten*/;
      }else{
      for(PL$14/*i*/ = 0;(PL$14/*i*/ < PL$16/*l*/);++PL$14/*i*/){{
        PL$17/*eaten*/ = PL$12/*interface*/["eat"](PL$13/*params*/[PL$14/*i*/]);
        if(PL$17/*eaten*/){
          return PL$17/*eaten*/;
        };
        ;}};
      ;
      };
      ;
      ;})
  });
  PL$9/*basic*/["addConcept"]("label", {
    "test": (function(PL$12/*interface*/, PL$13/*params*/){
    
      ;
      var PL$17/*eaten*/ = PL$12/*interface*/["eat"](PL$13/*params*/);
      ;
      if(PL$17/*eaten*/){
        if((typeof PL$17/*eaten*/ === "string")){
          return {
            "source": PL$17/*eaten*/
          };
        };
        ;
        return PL$17/*eaten*/;
      };
      ;
      ;})
  });
  PL$9/*basic*/["addUnit"]("eol", PL$9/*basic*/["concept"]["alternative"]([
    PL$11/*concept*/["string"]("\n"), 
    PL$11/*concept*/["string"]("\r\n"), 
    PL$11/*concept*/["string"]("\r"), 
    PL$11/*concept*/["string"]("\u2028"), 
    PL$11/*concept*/["string"]("\u2029")
  ]));
  PL$9/*basic*/["addConcept"]("sequence", {
    "test": (function(PL$12/*interface*/, PL$13/*params*/){
    
      ;
      var PL$16/*l*/ = (PL$13/*params*/["length"] || 0);
      ;
      if(! PL$16/*l*/){
        return;
      };
      ;
      var PL$18/*ret*/ = {
        "sequence": [
          
        ]
      };
      ;
      var PL$14/*i*/ = 0;
      ;
      var PL$17/*eaten*/;
      ;
      for(PL$14/*i*/ = 0;(PL$14/*i*/ < PL$16/*l*/);++PL$14/*i*/){{
        if(PL$13/*params*/[PL$14/*i*/]["optional"]){
          PL$17/*eaten*/ = PL$12/*interface*/["eat"](PL$13/*params*/[PL$14/*i*/]["content"]);
          if(! PL$17/*eaten*/){
            continue;;
          };
          ;
        }else{
        PL$17/*eaten*/ = PL$12/*interface*/["eat"](PL$13/*params*/[PL$14/*i*/]);
        if(! PL$17/*eaten*/){
          return;
        };
        ;
        };
        ;
        PL$18/*ret*/["sequence"]["push"](PL$17/*eaten*/);}};
      ;
      if(PL$18/*ret*/["sequence"]["length"]){
        return PL$18/*ret*/;
      };
      ;
      ;})
  });
  PL$9/*basic*/["addConcept"]("list", {
    "test": (function(PL$12/*interface*/, PL$13/*params*/){
    
      ;
      var PL$19/*debug*/ = false;
      ;
      var PL$20/*res*/ = {
        
      };
      ;
      var PL$21/*hasStartOrEnd*/ = false;
      ;
      if(PL$13/*params*/["start"]){
        PL$20/*res*/["start"] = PL$12/*interface*/["eat"](PL$13/*params*/["start"]);
        if(! PL$20/*res*/["start"]){
          if(PL$19/*debug*/){
            PL$22/*console*/["log"]("failed start");
          };
          ;
          return;
        };
        ;
        PL$21/*hasStartOrEnd*/ = true;
      };
      ;
      if(PL$13/*params*/["end"]){
        PL$21/*hasStartOrEnd*/ = true;
      };
      ;
      var PL$23/*min*/ = (PL$13/*params*/["min"] || (PL$21/*hasStartOrEnd*/ ? 0 : 1));
      ;
      if((PL$23/*min*/ < 0)){
        throw PL$7/*util*/["parseException"]("min can not be < 0", PL$13/*params*/);
      };
      ;
      if(((PL$23/*min*/ < 1) && ! PL$21/*hasStartOrEnd*/)){
        throw PL$7/*util*/["parseException"]("min can not be < 1 without start or end", PL$13/*params*/);
      };
      ;
      var PL$24/*max*/ = 0;
      ;
      if((PL$13/*params*/["max"] >= 1)){
        PL$24/*max*/ = PL$13/*params*/["max"];
      };
      ;
      PL$20/*res*/["list"] = [
        
      ];
      var PL$25/*cont*/ = true;
      ;
      while(PL$25/*cont*/){
      {
        if(PL$13/*params*/["end"]){
          PL$20/*res*/["end"] = PL$12/*interface*/["eat"](PL$13/*params*/["end"]);
          if(PL$20/*res*/["end"]){
            PL$25/*cont*/ = false;
            break;;
          };
          ;
        };
        ;
        if(PL$13/*params*/["never"]){
          var PL$26/*never*/ = PL$12/*interface*/["eat"](PL$13/*params*/["never"]);
          ;
          if(PL$26/*never*/){
            if(PL$19/*debug*/){
              PL$22/*console*/["log"]("failed never");
            };
            ;
            return;
          };
          ;
        };
        ;
        var PL$17/*eaten*/ = PL$12/*interface*/["eat"](PL$13/*params*/["of"]);
        ;
        if(PL$17/*eaten*/){
          PL$20/*res*/["list"]["push"](PL$17/*eaten*/);
          if((PL$24/*max*/ && ((PL$20/*res*/["list"]["length"] + 1) > PL$24/*max*/))){
            PL$25/*cont*/ = false;
          };
          ;
        }else{
        PL$25/*cont*/ = false;
        };
        ;}};
      ;
      if((PL$20/*res*/["list"]["length"] < PL$23/*min*/)){
        if(PL$19/*debug*/){
          PL$22/*console*/["log"]("failed length");
        };
        ;
        return;
      };
      ;
      if((PL$13/*params*/["end"] && ! PL$20/*res*/["end"])){
        PL$20/*res*/["end"] = PL$12/*interface*/["eat"](PL$13/*params*/["end"]);
        if(! PL$20/*res*/["end"]){
          if(PL$19/*debug*/){
            PL$22/*console*/["log"]("failed end");
          };
          ;
          return;
        };
        ;
      };
      ;
      return PL$20/*res*/;
      ;})
  });
  PL$1.resolve(PL$9/*basic*/); return;
  PL$1.resolve(); return;}), PL$4/*catch rejected*/);
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
