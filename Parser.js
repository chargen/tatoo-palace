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
    if (promiseland._hasModule({ hashStr: "399a8921e86a77bcfe59ce0f6dedc642" })){ return promiseland._getModule("399a8921e86a77bcfe59ce0f6dedc642"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "399a8921e86a77bcfe59ce0f6dedc642", "module": PL$1, promising: true });
var PL$16/*console*/;try{PL$16/*console*/ = console;}catch(e){};
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
var PL$5/*util*/;
var PL$7/*parseException*/;
var PL$8/*leftException*/;
var PL$24/*unitChar*/;
var PL$26/*unitDataChar*/;
var PL$27/*unitEof*/;
var PL$28/*unitDataEof*/;
var PL$29/*conceptSource*/;
var PL$30/*conceptDataSource*/;
var PL$35/*addSomething*/;
var PL$42/*extendSomething*/;
var PL$61/*Parser*/;
function PL$9/*makeRun*/(PL$10/*parser*/){

  ;
  var PL$11/*run*/ = {
    "next": 0,
    "tree": {
      "left": undefined
    },
    "interface": {
      "eat": (function(PL$12/*food*/, PL$13/*option*/){
      
        ;
        PL$13/*option*/ = (PL$13/*option*/ || {
          
        });
        var PL$14/*ret*/;
        ;
        var PL$15/*t*/ = PL$11/*run*/["tree"];
        ;
        if((PL$13/*option*/["left"] === undefined)){
          if(PL$15/*t*/["left"]){
            PL$16/*console*/["log"]("trying to eat something but there is left");
            throw PL$8/*leftException*/;
          };
          ;
        };
        ;
        if((PL$13/*option*/["left"] === true)){
          if((PL$15/*t*/["left"] === false)){
            PL$16/*console*/["log"]("trying to eat left but nope");
            throw PL$8/*leftException*/;
          };
          ;
          if(PL$15/*t*/["left"]){
            PL$14/*ret*/ = PL$15/*t*/["left"];
            PL$15/*t*/["left"] = undefined;
            return PL$14/*ret*/;
          };
          ;
        };
        ;
        var PL$17/*oldLeft*/ = PL$15/*t*/["left"];
        ;
        if(((PL$13/*option*/["left"] === false) || PL$13/*option*/["left"])){
          PL$15/*t*/["left"] = PL$13/*option*/["left"];
        };
        ;
        try
        {
          PL$14/*ret*/ = PL$10/*parser*/["apply"](PL$12/*food*/, PL$11/*run*/);}catch(PL$18/*err*/){
          PL$15/*t*/["left"] = PL$17/*oldLeft*/;
          if((PL$18/*err*/ === PL$8/*leftException*/)){
            return;
          };
          ;
          throw PL$18/*err*/;};
        ;
        PL$15/*t*/["left"] = PL$17/*oldLeft*/;
        return PL$14/*ret*/;
        ;}),
      "barfer": (function(){
      
        ;
        var PL$19/*next*/ = PL$11/*run*/["next"];
        ;
        var PL$20/*tree*/ = PL$11/*run*/["tree"];
        ;
        var PL$21/*left*/ = PL$11/*run*/["tree"]["left"];
        ;
        return (function(){
        
          ;
          PL$11/*run*/["next"] = PL$19/*next*/;
          PL$11/*run*/["tree"] = PL$20/*tree*/;
          PL$11/*run*/["tree"]["left"] = PL$21/*left*/;
          ;});
        ;}),
      "pos": (function(){
      
        ;
        return PL$11/*run*/["next"];
        ;}),
      "substr": (function(PL$22/*pos*/, PL$23/*len*/){
      
        ;
        return PL$10/*parser*/["code"]["substr"](PL$22/*pos*/, PL$23/*len*/);
        ;})
    }
  };
  ;
  return PL$11/*run*/;
  ;};
PL$3/*promiseland exception catcher*/(function(){

  ;
  __requireFun("./util").then(PL$3/*promiseland exception catcher*/(function(PL$6){PL$5/*util*/ = PL$6;
  PL$7/*parseException*/ = PL$5/*util*/["parseException"];
  PL$8/*leftException*/ = {
    
  };
  /* function makeRun (){} - hoisted */;
  ;
  PL$24/*unitChar*/ = (function(PL$25/*param*/){
  
    ;
    return {
      "type": "unit",
      "name": "char",
      "param": {
        
      }
    };
    ;});
  PL$26/*unitDataChar*/ = {
    "elemental": true,
    "name": "char"
  };
  PL$27/*unitEof*/ = (function(PL$25/*param*/){
  
    ;
    return {
      "type": "unit",
      "name": "eof",
      "param": {
        
      }
    };
    ;});
  PL$28/*unitDataEof*/ = {
    "elemental": true,
    "name": "eof"
  };
  PL$29/*conceptSource*/ = (function(PL$25/*param*/){
  
    ;
    return {
      "type": "concept",
      "name": "source",
      "param": PL$25/*param*/
    };
    ;});
  PL$30/*conceptDataSource*/ = {
    "test": (function(PL$31/*interface*/, PL$32/*params*/){
    
      ;
      var PL$33/*startPos*/ = PL$31/*interface*/["pos"]();
      ;
      var PL$34/*eaten*/ = PL$31/*interface*/["eat"](PL$32/*params*/);
      ;
      if(PL$34/*eaten*/){
        return PL$31/*interface*/["substr"](PL$33/*startPos*/, (PL$31/*interface*/["pos"]() - PL$33/*startPos*/));
      };
      ;
      ;})
  };
  PL$35/*addSomething*/ = (function(PL$36/*obj*/, PL$37/*type*/, PL$38/*name*/, PL$25/*param*/){
  
    ;
    var PL$39/*typeObj*/ = PL$36/*obj*/[PL$37/*type*/];
    ;
    var PL$40/*typeDataObj*/ = PL$36/*obj*/[(PL$37/*type*/ + "Data")];
    ;
    if((! PL$39/*typeObj*/ || ! PL$40/*typeDataObj*/)){
      throw PL$7/*parseException*/(("addSomething called with " + PL$37/*type*/), PL$36/*obj*/);
    };
    ;
    if(! PL$39/*typeObj*/[PL$38/*name*/]){
      PL$39/*typeObj*/[PL$38/*name*/] = (function(PL$41/*callParam*/){
      
        ;
        return {
          "type": PL$37/*type*/,
          "name": PL$38/*name*/,
          "param": PL$41/*callParam*/
        };
        ;});
    };
    ;
    if(! PL$25/*param*/){
      return;
    };
    ;
    if(PL$40/*typeDataObj*/[PL$38/*name*/]){
      throw PL$7/*parseException*/((((PL$37/*type*/ + " ") + PL$38/*name*/) + " allready exists"), PL$25/*param*/);
    };
    ;
    PL$40/*typeDataObj*/[PL$38/*name*/] = PL$25/*param*/;
    ;});
  PL$42/*extendSomething*/ = (function(PL$36/*obj*/, PL$43/*other*/, PL$37/*type*/){
  
    ;
    var PL$44/*i*/;
    ;
    for(PL$44/*i*/ in PL$43/*other*/[PL$37/*type*/]){
      if((PL$36/*obj*/[PL$37/*type*/][PL$44/*i*/] == PL$43/*other*/[PL$37/*type*/][PL$44/*i*/])){
        continue;;
      };
      ;
      if(PL$36/*obj*/[PL$37/*type*/][PL$44/*i*/]){
        throw PL$7/*parseException*/((PL$37/*type*/ + "already exists"), PL$44/*i*/);
      };
      ;
      PL$36/*obj*/[PL$37/*type*/][PL$44/*i*/] = PL$43/*other*/[PL$37/*type*/][PL$44/*i*/];};
    ;
    for(PL$44/*i*/ in PL$43/*other*/[(PL$37/*type*/ + "Data")]){
      if((PL$36/*obj*/[(PL$37/*type*/ + "Data")][PL$44/*i*/] == PL$43/*other*/[(PL$37/*type*/ + "Data")][PL$44/*i*/])){
        continue;;
      };
      ;
      if(PL$36/*obj*/[(PL$37/*type*/ + "Data")][PL$44/*i*/]){
        throw PL$7/*parseException*/((PL$37/*type*/ + " already exists"), PL$44/*i*/);
      };
      ;
      PL$36/*obj*/[(PL$37/*type*/ + "Data")][PL$44/*i*/] = PL$43/*other*/[(PL$37/*type*/ + "Data")][PL$44/*i*/];};
    ;
    ;});
  PL$61/*Parser*/ = (function(){var PL$45/*inherited*/ = {};
  var res = promiseland.createClass({
    "constructor": (function(){
    
      ;
      this["unit"] = {
        
      };
      this["unitData"] = {
        
      };
      this["concept"] = {
        
      };
      this["conceptData"] = {
        
      };
      this["tree"] = {
        
      };
      this["treeData"] = {
        
      };
      this["unit"]["char"] = PL$24/*unitChar*/;
      this["unitData"]["char"] = PL$26/*unitDataChar*/;
      this["unit"]["eof"] = PL$27/*unitEof*/;
      this["unitData"]["eof"] = PL$28/*unitDataEof*/;
      this["concept"]["source"] = PL$29/*conceptSource*/;
      this["conceptData"]["source"] = PL$30/*conceptDataSource*/;
      ;}),
    "parse": (function(PL$46/*code*/, PL$47/*program*/){
    
      ;
      this["code"] = PL$46/*code*/;
      this["list"] = [
        
      ];
      var PL$48/*idx*/ = 0;
      ;
      var PL$49/*c*/;
      ;
      for(PL$48/*idx*/ = 0;(PL$48/*idx*/ < PL$46/*code*/["length"]);++PL$48/*idx*/){{
        this["list"]["push"]({
          "char": {
            "valid": true,
            "next": (PL$48/*idx*/ + 1),
            "content": PL$46/*code*/[PL$48/*idx*/]
          }
        });}};
      ;
      this["list"]["push"]({
        "eof": {
          "valid": true,
          "next": (PL$48/*idx*/ + 1),
          "content": {
            "unit": "eof"
          }
        }
      });
      return this["apply"](PL$47/*program*/);
      ;}),
    "apply": (function(PL$50/*data*/, PL$11/*run*/){
    
      ;
      var PL$10/*parser*/ = this;
      ;
      if(! PL$11/*run*/){
        PL$11/*run*/ = PL$9/*makeRun*/(this);
      };
      ;
      var PL$51/*barf*/ = PL$11/*run*/["interface"]["barfer"]();
      ;
      var PL$33/*startPos*/ = PL$11/*run*/["interface"]["pos"]();
      ;
      var PL$14/*ret*/;
      ;
      if((PL$50/*data*/["type"] === "concept")){
        var PL$52/*concept*/ = this["conceptData"][PL$50/*data*/["name"]];
        ;
        if(! PL$52/*concept*/){
          throw PL$7/*parseException*/("missing concept", PL$50/*data*/);
        };
        ;
        PL$14/*ret*/ = PL$52/*concept*/["test"](PL$11/*run*/["interface"], PL$50/*data*/["param"]);
        if(! PL$14/*ret*/){
          PL$51/*barf*/();
          return;
        };
        ;
        if(((typeof PL$14/*ret*/ === "object") && ! PL$14/*ret*/["concept"])){
          PL$14/*ret*/["concept"] = PL$50/*data*/["name"];
          PL$14/*ret*/["startPos"] = PL$33/*startPos*/;
          PL$14/*ret*/["endPos"] = PL$11/*run*/["interface"]["pos"]();
        };
        ;
        return PL$14/*ret*/;
      };
      ;
      if((PL$50/*data*/["type"] === "tree")){
        var PL$20/*tree*/ = this["treeData"][PL$50/*data*/["name"]];
        ;
        if((! PL$20/*tree*/ || ! PL$20/*tree*/["nodes"])){
          throw PL$7/*parseException*/("missing tree", PL$50/*data*/);
        };
        ;
        var PL$34/*eaten*/;
        ;
        var PL$53/*n*/ = 0;
        ;
        var PL$54/*node*/;
        ;
        var PL$55/*minBp*/ = 0;
        ;
        if((PL$50/*data*/["param"] && PL$50/*data*/["param"]["minBp"])){
          PL$55/*minBp*/ = PL$50/*data*/["param"]["minBp"];
        };
        ;
        var PL$15/*t*/ = {
          
        };
        ;
        PL$11/*run*/["tree"] = PL$15/*t*/;
        var PL$56/*treebarf*/ = PL$11/*run*/["interface"]["barfer"]();
        ;
        for(PL$53/*n*/ = 0;(PL$53/*n*/ < PL$20/*tree*/["nodes"]["length"]);++PL$53/*n*/){{
          PL$54/*node*/ = PL$20/*tree*/["nodes"][PL$53/*n*/];
          PL$56/*treebarf*/();
          PL$34/*eaten*/ = PL$11/*run*/["interface"]["eat"](PL$54/*node*/, {
            "left": false
          });
          if(PL$34/*eaten*/){
            if((PL$34/*eaten*/["bp"] >= PL$55/*minBp*/)){
              break;;
            }else{
            PL$56/*treebarf*/();
            PL$34/*eaten*/ = undefined;
            };
            ;
          };
          ;}};
        ;
        var PL$57/*newEaten*/ = PL$34/*eaten*/;
        ;
        while(PL$57/*newEaten*/){
        {
          PL$34/*eaten*/ = PL$57/*newEaten*/;
          var PL$21/*left*/ = PL$57/*newEaten*/;
          ;
          PL$11/*run*/["tree"] = PL$15/*t*/;
          PL$56/*treebarf*/ = PL$11/*run*/["interface"]["barfer"]();
          for(PL$53/*n*/ = 0;(PL$53/*n*/ < PL$20/*tree*/["nodes"]["length"]);++PL$53/*n*/){{
            PL$54/*node*/ = PL$20/*tree*/["nodes"][PL$53/*n*/];
            PL$56/*treebarf*/();
            PL$16/*console*/["log"]("setting left to");
            PL$16/*console*/["log"](PL$21/*left*/);
            PL$57/*newEaten*/ = PL$11/*run*/["interface"]["eat"](PL$54/*node*/, {
              "left": PL$21/*left*/
            });
            if(PL$57/*newEaten*/){
              if(((PL$57/*newEaten*/["bp"] <= PL$34/*eaten*/["bp"]) && (PL$57/*newEaten*/["bp"] >= PL$55/*minBp*/))){
                break;;
              }else{
              PL$56/*treebarf*/();
              PL$57/*newEaten*/ = undefined;
              };
              ;
            };
            ;}};
          ;}};
        ;
        PL$16/*console*/["log"]("eaten:");
        PL$16/*console*/["log"](PL$34/*eaten*/);
        if(! PL$34/*eaten*/){
          PL$51/*barf*/();
          return;
        };
        ;
        if((typeof PL$34/*eaten*/ === "object")){
          PL$34/*eaten*/["tree"] = PL$50/*data*/["name"];
          PL$34/*eaten*/["startPos"] = PL$33/*startPos*/;
          PL$34/*eaten*/["endPos"] = PL$11/*run*/["interface"]["pos"]();
        };
        ;
        return PL$34/*eaten*/;
      };
      ;
      if((PL$50/*data*/["type"] === "unit")){
        var PL$58/*entries*/ = this["list"][PL$11/*run*/["next"]];
        ;
        if(! PL$58/*entries*/){
          PL$51/*barf*/();
          return;
        };
        ;
        var PL$59/*entry*/ = PL$58/*entries*/[PL$50/*data*/["name"]];
        ;
        if(PL$59/*entry*/){
          if(PL$59/*entry*/["valid"]){
            PL$11/*run*/["next"] = PL$59/*entry*/["next"];
            return PL$59/*entry*/["content"];
          };
          ;
          PL$51/*barf*/();
          return;
        };
        ;
        var PL$60/*unit*/ = this["unitData"][PL$50/*data*/["name"]];
        ;
        if(! PL$60/*unit*/){
          PL$51/*barf*/();
          throw PL$7/*parseException*/("missing unit", PL$50/*data*/);
        };
        ;
        if(PL$60/*unit*/["elemental"]){
          PL$51/*barf*/();
          return;
        };
        ;
        PL$59/*entry*/ = {
          
        };
        PL$59/*entry*/["content"] = PL$11/*run*/["interface"]["eat"](PL$60/*unit*/);
        if(PL$59/*entry*/["content"]){
          PL$59/*entry*/["valid"] = true;
        }else{
        PL$59/*entry*/["valid"] = false;
        PL$51/*barf*/();
        };
        ;
        PL$58/*entries*/[PL$50/*data*/["name"]] = PL$59/*entry*/;
        if((typeof PL$59/*entry*/["content"] === "object")){
          if(! PL$59/*entry*/["content"]["units"]){
            PL$59/*entry*/["content"]["units"] = {
              
            };
          };
          ;
          if((PL$59/*entry*/["content"]["unit"] && ! PL$59/*entry*/["content"]["units"][PL$59/*entry*/["content"]["unit"]])){
            PL$59/*entry*/["content"]["units"][PL$59/*entry*/["content"]["unit"]] = PL$59/*entry*/["content"];
          };
          ;
          PL$59/*entry*/["content"]["units"][PL$50/*data*/["name"]] = PL$59/*entry*/["content"];
          PL$59/*entry*/["content"]["unit"] = PL$50/*data*/["name"];
          if((typeof PL$59/*entry*/["content"]["bp"] !== "number")){
            PL$59/*entry*/["content"]["bp"] = (this["maxBp"] || 1000000);
          };
          ;
          PL$59/*entry*/["content"]["startPos"] = PL$33/*startPos*/;
          PL$59/*entry*/["content"]["endPos"] = PL$11/*run*/["interface"]["pos"]();
        };
        ;
        return PL$59/*entry*/["content"];
      };
      ;
      throw PL$7/*parseException*/("unknown type", PL$50/*data*/);
      ;}),
    "addConcept": (function(PL$38/*name*/, PL$52/*concept*/){
    
      ;
      if((! PL$52/*concept*/ || (typeof PL$52/*concept*/["test"] !== "function"))){
        throw PL$7/*parseException*/("missing test function in concept", PL$52/*concept*/);
      };
      ;
      PL$35/*addSomething*/(this, "concept", PL$38/*name*/, PL$52/*concept*/);
      ;}),
    "addUnit": (function(PL$38/*name*/, PL$25/*param*/){
    
      ;
      PL$35/*addSomething*/(this, "unit", PL$38/*name*/, PL$25/*param*/);
      ;}),
    "addTree": (function(PL$38/*name*/, PL$25/*param*/){
    
      ;
      if(PL$25/*param*/){
        if((PL$25/*param*/["length"] && ! PL$25/*param*/["nodes"])){
          PL$25/*param*/ = {
            "nodes": PL$25/*param*/
          };
        };
        ;
      };
      ;
      PL$35/*addSomething*/(this, "tree", PL$38/*name*/, PL$25/*param*/);
      ;}),
    "extend": (function(PL$43/*other*/){
    
      ;
      if(! PL$43/*other*/){
        throw PL$7/*parseException*/("called extend without other", PL$43/*other*/);
      };
      ;
      PL$42/*extendSomething*/(this, PL$43/*other*/, "unit");
      PL$42/*extendSomething*/(this, PL$43/*other*/, "concept");
      PL$42/*extendSomething*/(this, PL$43/*other*/, "tree");
      return this;
      ;})
  }, [], PL$45/*inherited*/);
  return res; })();PL$61/*Parser*/;
  PL$1.resolve(PL$61/*Parser*/); return;
  PL$1.resolve(); return;}), PL$4/*catch rejected*/);
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
