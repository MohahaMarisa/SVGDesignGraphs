require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"SVGLayer":[function(require,module,exports){
"SVGLayer class\n\nproperties\n- linecap <string> (\"round\" || \"square\" || \"butt\")\n- fill <string> (css color)\n- stroke <string> (css color)\n- strokeWidth <number>\n- dashOffset <number> (from -1 to 1, defaults to 0)";
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.SVGLayer = (function(superClass) {
  extend(SVGLayer, superClass);

  function SVGLayer(options) {
    var cName, d, footer, header, path, t;
    if (options == null) {
      options = {};
    }
    options = _.defaults(options, {
      dashOffset: 1,
      strokeWidth: 2,
      stroke: "#28affa",
      backgroundColor: null,
      clip: false,
      fill: "transparent",
      linecap: "round"
    });
    SVGLayer.__super__.constructor.call(this, options);
    if (options.fill === null) {
      this.fill = null;
    }
    this.width += options.strokeWidth / 2;
    this.height += options.strokeWidth / 2;
    d = new Date();
    t = d.getTime();
    cName = "c" + t;
    header = "<svg class='" + cName + "' x='0px' y='0px' width='" + this.width + "' height='" + this.height + "' viewBox='-" + (this.strokeWidth / 2) + " -" + (this.strokeWidth / 2) + " " + (this.width + this.strokeWidth / 2) + " " + (this.height + this.strokeWidth / 2) + "'>";
    path = options.path;
    footer = "</svg>";
    this.html = header + path + footer;
    Utils.domComplete((function(_this) {
      return function() {
        var domPath;
        domPath = document.querySelector('.' + cName + ' path');
        _this._pathLength = domPath.getTotalLength();
        _this.style = {
          "stroke-dasharray": _this.pathLength
        };
        return _this.dashOffset = options.dashOffset;
      };
    })(this));
  }

  SVGLayer.define("pathLength", {
    get: function() {
      return this._pathLength;
    },
    set: function(value) {
      return print("SVGLayer.pathLength is readonly");
    }
  });

  SVGLayer.define("linecap", {
    get: function() {
      return this.style.strokeLinecap;
    },
    set: function(value) {
      return this.style.strokeLinecap = value;
    }
  });

  SVGLayer.define("strokeLinecap", {
    get: function() {
      return this.style.strokeLinecap;
    },
    set: function(value) {
      return this.style.strokeLinecap = value;
    }
  });

  SVGLayer.define("fill", {
    get: function() {
      return this.style.fill;
    },
    set: function(value) {
      if (value === null) {
        value = "transparent";
      }
      return this.style.fill = value;
    }
  });

  SVGLayer.define("stroke", {
    get: function() {
      return this.style.stroke;
    },
    set: function(value) {
      return this.style.stroke = value;
    }
  });

  SVGLayer.define("strokeColor", {
    get: function() {
      return this.style.stroke;
    },
    set: function(value) {
      return this.style.stroke = value;
    }
  });

  SVGLayer.define("strokeWidth", {
    get: function() {
      return Number(this.style.strokeWidth.replace(/[^\d.-]/g, ''));
    },
    set: function(value) {
      return this.style.strokeWidth = value;
    }
  });

  SVGLayer.define("dashOffset", {
    get: function() {
      return this._dashOffset;
    },
    set: function(value) {
      var dashOffset;
      this._dashOffset = value;
      if (this.pathLength != null) {
        dashOffset = Utils.modulate(value, [0, 1], [this.pathLength, 0]);
        return this.style.strokeDashoffset = dashOffset;
      }
    }
  });

  return SVGLayer;

})(Layer);


},{}],"myModule":[function(require,module,exports){
var SVGLayer, module;

module = require("myModule");

SVGLayer = require("SVGLayer");

exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{"SVGLayer":"SVGLayer","myModule":"myModule"}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvTWFyaXNhTHUvUGljdHVyZXMvU1ZHIEFuaW1hdGVkIGdyYXBoLmZyYW1lci9tb2R1bGVzL1NWR0xheWVyLmNvZmZlZSIsIi9Vc2Vycy9NYXJpc2FMdS9QaWN0dXJlcy9TVkcgQW5pbWF0ZWQgZ3JhcGguZnJhbWVyL21vZHVsZXMvbXlNb2R1bGUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFBQSxJQUFBOzs7QUFXTSxPQUFPLENBQUM7OztFQUVBLGtCQUFDLE9BQUQ7QUFDWixRQUFBOztNQURhLFVBQVU7O0lBQ3ZCLE9BQUEsR0FBVSxDQUFDLENBQUMsUUFBRixDQUFXLE9BQVgsRUFDVDtNQUFBLFVBQUEsRUFBWSxDQUFaO01BQ0EsV0FBQSxFQUFhLENBRGI7TUFFQSxNQUFBLEVBQVEsU0FGUjtNQUdBLGVBQUEsRUFBaUIsSUFIakI7TUFJQSxJQUFBLEVBQU0sS0FKTjtNQUtBLElBQUEsRUFBTSxhQUxOO01BTUEsT0FBQSxFQUFTLE9BTlQ7S0FEUztJQVFWLDBDQUFNLE9BQU47SUFFQSxJQUFHLE9BQU8sQ0FBQyxJQUFSLEtBQWdCLElBQW5CO01BQ0MsSUFBQyxDQUFBLElBQUQsR0FBUSxLQURUOztJQUdBLElBQUMsQ0FBQSxLQUFELElBQVUsT0FBTyxDQUFDLFdBQVIsR0FBc0I7SUFDaEMsSUFBQyxDQUFBLE1BQUQsSUFBVyxPQUFPLENBQUMsV0FBUixHQUFzQjtJQUdqQyxDQUFBLEdBQVEsSUFBQSxJQUFBLENBQUE7SUFDUixDQUFBLEdBQUksQ0FBQyxDQUFDLE9BQUYsQ0FBQTtJQUNKLEtBQUEsR0FBUSxHQUFBLEdBQU07SUFDZCxNQUFBLEdBQVMsY0FBQSxHQUFlLEtBQWYsR0FBcUIsMkJBQXJCLEdBQWdELElBQUMsQ0FBQSxLQUFqRCxHQUF1RCxZQUF2RCxHQUFtRSxJQUFDLENBQUEsTUFBcEUsR0FBMkUsY0FBM0UsR0FBd0YsQ0FBQyxJQUFDLENBQUEsV0FBRCxHQUFhLENBQWQsQ0FBeEYsR0FBd0csSUFBeEcsR0FBMkcsQ0FBQyxJQUFDLENBQUEsV0FBRCxHQUFhLENBQWQsQ0FBM0csR0FBMkgsR0FBM0gsR0FBNkgsQ0FBQyxJQUFDLENBQUEsS0FBRCxHQUFTLElBQUMsQ0FBQSxXQUFELEdBQWEsQ0FBdkIsQ0FBN0gsR0FBc0osR0FBdEosR0FBd0osQ0FBQyxJQUFDLENBQUEsTUFBRCxHQUFVLElBQUMsQ0FBQSxXQUFELEdBQWEsQ0FBeEIsQ0FBeEosR0FBa0w7SUFDM0wsSUFBQSxHQUFPLE9BQU8sQ0FBQztJQUNmLE1BQUEsR0FBUztJQUNULElBQUMsQ0FBQSxJQUFELEdBQVEsTUFBQSxHQUFTLElBQVQsR0FBZ0I7SUFHeEIsS0FBSyxDQUFDLFdBQU4sQ0FBa0IsQ0FBQSxTQUFBLEtBQUE7YUFBQSxTQUFBO0FBQ2pCLFlBQUE7UUFBQSxPQUFBLEdBQVUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsR0FBQSxHQUFJLEtBQUosR0FBVSxPQUFqQztRQUNWLEtBQUMsQ0FBQSxXQUFELEdBQWUsT0FBTyxDQUFDLGNBQVIsQ0FBQTtRQUNmLEtBQUMsQ0FBQSxLQUFELEdBQVM7VUFBQyxrQkFBQSxFQUFtQixLQUFDLENBQUEsVUFBckI7O2VBQ1QsS0FBQyxDQUFBLFVBQUQsR0FBYyxPQUFPLENBQUM7TUFKTDtJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBbEI7RUEzQlk7O0VBaUNiLFFBQUMsQ0FBQSxNQUFELENBQVEsWUFBUixFQUNDO0lBQUEsR0FBQSxFQUFLLFNBQUE7YUFBRyxJQUFDLENBQUE7SUFBSixDQUFMO0lBQ0EsR0FBQSxFQUFLLFNBQUMsS0FBRDthQUFXLEtBQUEsQ0FBTSxpQ0FBTjtJQUFYLENBREw7R0FERDs7RUFJQSxRQUFDLENBQUEsTUFBRCxDQUFRLFNBQVIsRUFDQztJQUFBLEdBQUEsRUFBSyxTQUFBO2FBQUcsSUFBQyxDQUFBLEtBQUssQ0FBQztJQUFWLENBQUw7SUFDQSxHQUFBLEVBQUssU0FBQyxLQUFEO2FBQ0osSUFBQyxDQUFBLEtBQUssQ0FBQyxhQUFQLEdBQXVCO0lBRG5CLENBREw7R0FERDs7RUFLQSxRQUFDLENBQUEsTUFBRCxDQUFRLGVBQVIsRUFDQztJQUFBLEdBQUEsRUFBSyxTQUFBO2FBQUcsSUFBQyxDQUFBLEtBQUssQ0FBQztJQUFWLENBQUw7SUFDQSxHQUFBLEVBQUssU0FBQyxLQUFEO2FBQ0osSUFBQyxDQUFBLEtBQUssQ0FBQyxhQUFQLEdBQXVCO0lBRG5CLENBREw7R0FERDs7RUFLQSxRQUFDLENBQUEsTUFBRCxDQUFRLE1BQVIsRUFDQztJQUFBLEdBQUEsRUFBSyxTQUFBO2FBQUcsSUFBQyxDQUFBLEtBQUssQ0FBQztJQUFWLENBQUw7SUFDQSxHQUFBLEVBQUssU0FBQyxLQUFEO01BQ0osSUFBRyxLQUFBLEtBQVMsSUFBWjtRQUNDLEtBQUEsR0FBUSxjQURUOzthQUVBLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBUCxHQUFjO0lBSFYsQ0FETDtHQUREOztFQU9BLFFBQUMsQ0FBQSxNQUFELENBQVEsUUFBUixFQUNDO0lBQUEsR0FBQSxFQUFLLFNBQUE7YUFBRyxJQUFDLENBQUEsS0FBSyxDQUFDO0lBQVYsQ0FBTDtJQUNBLEdBQUEsRUFBSyxTQUFDLEtBQUQ7YUFBVyxJQUFDLENBQUEsS0FBSyxDQUFDLE1BQVAsR0FBZ0I7SUFBM0IsQ0FETDtHQUREOztFQUlBLFFBQUMsQ0FBQSxNQUFELENBQVEsYUFBUixFQUNDO0lBQUEsR0FBQSxFQUFLLFNBQUE7YUFBRyxJQUFDLENBQUEsS0FBSyxDQUFDO0lBQVYsQ0FBTDtJQUNBLEdBQUEsRUFBSyxTQUFDLEtBQUQ7YUFBVyxJQUFDLENBQUEsS0FBSyxDQUFDLE1BQVAsR0FBZ0I7SUFBM0IsQ0FETDtHQUREOztFQUlBLFFBQUMsQ0FBQSxNQUFELENBQVEsYUFBUixFQUNDO0lBQUEsR0FBQSxFQUFLLFNBQUE7YUFBRyxNQUFBLENBQU8sSUFBQyxDQUFBLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBbkIsQ0FBMkIsVUFBM0IsRUFBdUMsRUFBdkMsQ0FBUDtJQUFILENBQUw7SUFDQSxHQUFBLEVBQUssU0FBQyxLQUFEO2FBQ0osSUFBQyxDQUFBLEtBQUssQ0FBQyxXQUFQLEdBQXFCO0lBRGpCLENBREw7R0FERDs7RUFLQSxRQUFDLENBQUEsTUFBRCxDQUFRLFlBQVIsRUFDQztJQUFBLEdBQUEsRUFBSyxTQUFBO2FBQUcsSUFBQyxDQUFBO0lBQUosQ0FBTDtJQUNBLEdBQUEsRUFBSyxTQUFDLEtBQUQ7QUFDSixVQUFBO01BQUEsSUFBQyxDQUFBLFdBQUQsR0FBZTtNQUNmLElBQUcsdUJBQUg7UUFDQyxVQUFBLEdBQWEsS0FBSyxDQUFDLFFBQU4sQ0FBZSxLQUFmLEVBQXNCLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBdEIsRUFBOEIsQ0FBQyxJQUFDLENBQUEsVUFBRixFQUFjLENBQWQsQ0FBOUI7ZUFDYixJQUFDLENBQUEsS0FBSyxDQUFDLGdCQUFQLEdBQTBCLFdBRjNCOztJQUZJLENBREw7R0FERDs7OztHQXJFOEI7Ozs7QUNSL0IsSUFBQTs7QUFBQSxNQUFBLEdBQVMsT0FBQSxDQUFRLFVBQVI7O0FBQ1QsUUFBQSxHQUFXLE9BQUEsQ0FBUSxVQUFSOztBQUNYLE9BQU8sQ0FBQyxLQUFSLEdBQWdCOztBQUVoQixPQUFPLENBQUMsVUFBUixHQUFxQixTQUFBO1NBQ3BCLEtBQUEsQ0FBTSx1QkFBTjtBQURvQjs7QUFHckIsT0FBTyxDQUFDLE9BQVIsR0FBa0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXCJcIlwiXG5TVkdMYXllciBjbGFzc1xuXG5wcm9wZXJ0aWVzXG4tIGxpbmVjYXAgPHN0cmluZz4gKFwicm91bmRcIiB8fCBcInNxdWFyZVwiIHx8IFwiYnV0dFwiKVxuLSBmaWxsIDxzdHJpbmc+IChjc3MgY29sb3IpXG4tIHN0cm9rZSA8c3RyaW5nPiAoY3NzIGNvbG9yKVxuLSBzdHJva2VXaWR0aCA8bnVtYmVyPlxuLSBkYXNoT2Zmc2V0IDxudW1iZXI+IChmcm9tIC0xIHRvIDEsIGRlZmF1bHRzIHRvIDApXG5cIlwiXCJcblxuY2xhc3MgZXhwb3J0cy5TVkdMYXllciBleHRlbmRzIExheWVyXG5cblx0Y29uc3RydWN0b3I6IChvcHRpb25zID0ge30pIC0+XG5cdFx0b3B0aW9ucyA9IF8uZGVmYXVsdHMgb3B0aW9ucyxcblx0XHRcdGRhc2hPZmZzZXQ6IDFcblx0XHRcdHN0cm9rZVdpZHRoOiAyXG5cdFx0XHRzdHJva2U6IFwiIzI4YWZmYVwiXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IG51bGxcblx0XHRcdGNsaXA6IGZhbHNlXG5cdFx0XHRmaWxsOiBcInRyYW5zcGFyZW50XCJcblx0XHRcdGxpbmVjYXA6IFwicm91bmRcIlxuXHRcdHN1cGVyIG9wdGlvbnNcblxuXHRcdGlmIG9wdGlvbnMuZmlsbCA9PSBudWxsXG5cdFx0XHRAZmlsbCA9IG51bGxcblxuXHRcdEB3aWR0aCArPSBvcHRpb25zLnN0cm9rZVdpZHRoIC8gMlxuXHRcdEBoZWlnaHQgKz0gb3B0aW9ucy5zdHJva2VXaWR0aCAvIDJcblxuXHRcdCMgSFRNTCBmb3IgdGhlIFNWRyBET00gZWxlbWVudCwgbmVlZCB1bmlxdWUgY2xhc3MgbmFtZXNcblx0XHRkID0gbmV3IERhdGUoKVxuXHRcdHQgPSBkLmdldFRpbWUoKVxuXHRcdGNOYW1lID0gXCJjXCIgKyB0XG5cdFx0aGVhZGVyID0gXCI8c3ZnIGNsYXNzPScje2NOYW1lfScgeD0nMHB4JyB5PScwcHgnIHdpZHRoPScje0B3aWR0aH0nIGhlaWdodD0nI3tAaGVpZ2h0fScgdmlld0JveD0nLSN7QHN0cm9rZVdpZHRoLzJ9IC0je0BzdHJva2VXaWR0aC8yfSAje0B3aWR0aCArIEBzdHJva2VXaWR0aC8yfSAje0BoZWlnaHQgKyBAc3Ryb2tlV2lkdGgvMn0nPlwiXG5cdFx0cGF0aCA9IG9wdGlvbnMucGF0aFxuXHRcdGZvb3RlciA9IFwiPC9zdmc+XCJcblx0XHRAaHRtbCA9IGhlYWRlciArIHBhdGggKyBmb290ZXJcblxuXHRcdCMgd2FpdCB3aXRoIHF1ZXJ5aW5nIHBhdGhsZW5ndGggZm9yIHdoZW4gZG9tIGlzIGZpbmlzaGVkXG5cdFx0VXRpbHMuZG9tQ29tcGxldGUgPT5cblx0XHRcdGRvbVBhdGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJytjTmFtZSsnIHBhdGgnKVxuXHRcdFx0QF9wYXRoTGVuZ3RoID0gZG9tUGF0aC5nZXRUb3RhbExlbmd0aCgpXG5cdFx0XHRAc3R5bGUgPSB7XCJzdHJva2UtZGFzaGFycmF5XCI6QHBhdGhMZW5ndGg7fVxuXHRcdFx0QGRhc2hPZmZzZXQgPSBvcHRpb25zLmRhc2hPZmZzZXRcblxuXHRAZGVmaW5lIFwicGF0aExlbmd0aFwiLFxuXHRcdGdldDogLT4gQF9wYXRoTGVuZ3RoXG5cdFx0c2V0OiAodmFsdWUpIC0+IHByaW50IFwiU1ZHTGF5ZXIucGF0aExlbmd0aCBpcyByZWFkb25seVwiXG5cblx0QGRlZmluZSBcImxpbmVjYXBcIixcblx0XHRnZXQ6IC0+IEBzdHlsZS5zdHJva2VMaW5lY2FwXG5cdFx0c2V0OiAodmFsdWUpIC0+XG5cdFx0XHRAc3R5bGUuc3Ryb2tlTGluZWNhcCA9IHZhbHVlXG5cblx0QGRlZmluZSBcInN0cm9rZUxpbmVjYXBcIixcblx0XHRnZXQ6IC0+IEBzdHlsZS5zdHJva2VMaW5lY2FwXG5cdFx0c2V0OiAodmFsdWUpIC0+XG5cdFx0XHRAc3R5bGUuc3Ryb2tlTGluZWNhcCA9IHZhbHVlXG5cblx0QGRlZmluZSBcImZpbGxcIixcblx0XHRnZXQ6IC0+IEBzdHlsZS5maWxsXG5cdFx0c2V0OiAodmFsdWUpIC0+XG5cdFx0XHRpZiB2YWx1ZSA9PSBudWxsXG5cdFx0XHRcdHZhbHVlID0gXCJ0cmFuc3BhcmVudFwiXG5cdFx0XHRAc3R5bGUuZmlsbCA9IHZhbHVlXG5cblx0QGRlZmluZSBcInN0cm9rZVwiLFxuXHRcdGdldDogLT4gQHN0eWxlLnN0cm9rZVxuXHRcdHNldDogKHZhbHVlKSAtPiBAc3R5bGUuc3Ryb2tlID0gdmFsdWVcblxuXHRAZGVmaW5lIFwic3Ryb2tlQ29sb3JcIixcblx0XHRnZXQ6IC0+IEBzdHlsZS5zdHJva2Vcblx0XHRzZXQ6ICh2YWx1ZSkgLT4gQHN0eWxlLnN0cm9rZSA9IHZhbHVlXG5cblx0QGRlZmluZSBcInN0cm9rZVdpZHRoXCIsXG5cdFx0Z2V0OiAtPiBOdW1iZXIoQHN0eWxlLnN0cm9rZVdpZHRoLnJlcGxhY2UoL1teXFxkLi1dL2csICcnKSlcblx0XHRzZXQ6ICh2YWx1ZSkgLT5cblx0XHRcdEBzdHlsZS5zdHJva2VXaWR0aCA9IHZhbHVlXG5cblx0QGRlZmluZSBcImRhc2hPZmZzZXRcIixcblx0XHRnZXQ6IC0+IEBfZGFzaE9mZnNldFxuXHRcdHNldDogKHZhbHVlKSAtPlxuXHRcdFx0QF9kYXNoT2Zmc2V0ID0gdmFsdWVcblx0XHRcdGlmIEBwYXRoTGVuZ3RoP1xuXHRcdFx0XHRkYXNoT2Zmc2V0ID0gVXRpbHMubW9kdWxhdGUodmFsdWUsIFswLCAxXSwgW0BwYXRoTGVuZ3RoLCAwXSlcblx0XHRcdFx0QHN0eWxlLnN0cm9rZURhc2hvZmZzZXQgPSBkYXNoT2Zmc2V0XG4iLCIjIEFkZCB0aGUgZm9sbG93aW5nIGxpbmUgdG8geW91ciBwcm9qZWN0IGluIEZyYW1lciBTdHVkaW8uIFxuIyBteU1vZHVsZSA9IHJlcXVpcmUgXCJteU1vZHVsZVwiXG4jIFJlZmVyZW5jZSB0aGUgY29udGVudHMgYnkgbmFtZSwgbGlrZSBteU1vZHVsZS5teUZ1bmN0aW9uKCkgb3IgbXlNb2R1bGUubXlWYXJcbm1vZHVsZSA9IHJlcXVpcmUgXCJteU1vZHVsZVwiXG5TVkdMYXllciA9IHJlcXVpcmUgXCJTVkdMYXllclwiXG5leHBvcnRzLm15VmFyID0gXCJteVZhcmlhYmxlXCJcblxuZXhwb3J0cy5teUZ1bmN0aW9uID0gLT5cblx0cHJpbnQgXCJteUZ1bmN0aW9uIGlzIHJ1bm5pbmdcIlxuXG5leHBvcnRzLm15QXJyYXkgPSBbMSwgMiwgM10iXX0=
