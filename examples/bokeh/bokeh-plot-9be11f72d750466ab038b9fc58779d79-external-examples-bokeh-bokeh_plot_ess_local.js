(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("dfcff1a5-5fd3-43f2-b6fb-bbe77b21fbda");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'dfcff1a5-5fd3-43f2-b6fb-bbe77b21fbda' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.2.1.min.js": "qkRvDQVAIfzsJo40iRBbxt6sttt0hv4lh74DG7OK4MCHv4C5oohXYoHUM5W11uqS", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.1.min.js": "Sb7Mr06a9TNlet/GEBeKaf5xH3eb6AlCzwjtU82wNPyDrnfoiVl26qnvlKjmcAd+", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.1.min.js": "HaJ15vgfmcfRtB4c4YBOI4f1MUujukqInOWVqZJZZGK7Q+ivud0OKGSTn/Vm2iso"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.2.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.1.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"e951077e-2f6e-48cc-867a-11c2464a1db2":{"roots":{"references":[{"attributes":{},"id":"67979","type":"ResetTool"},{"attributes":{"toolbars":[{"id":"67989"}],"tools":[{"id":"67979"},{"id":"67980"},{"id":"67981"},{"id":"67982"},{"id":"67983"},{"id":"67984"},{"id":"67985"},{"id":"67986"}]},"id":"68024","type":"ProxyToolbar"},{"attributes":{"children":[{"id":"68025"},{"id":"68023"}]},"id":"68026","type":"Column"},{"attributes":{"source":{"id":"68004"}},"id":"68006","type":"CDSView"},{"attributes":{"data":{"rug_x":{"__ndarray__":"u/QnuP7V5z9SIsxa1SLgPw==","dtype":"float64","order":"little","shape":[2]},"rug_y":{"__ndarray__":"nB0+wbWyacCcHT7BtbJpwA==","dtype":"float64","order":"little","shape":[2]}},"selected":{"id":"68019"},"selection_policy":{"id":"68018"}},"id":"68004","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"68000","type":"Circle"},{"attributes":{"axis":{"id":"67971"},"ticker":null},"id":"67974","type":"Grid"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAACamZmZmZmpP5qZmZmZmbk/NDMzMzMzwz+amZmZmZnJPwAAAAAAANA/NDMzMzMz0z9nZmZmZmbWP5qZmZmZmdk/zczMzMzM3D8AAAAAAADgP5qZmZmZmeE/NDMzMzMz4z/NzMzMzMzkP2dmZmZmZuY/AAAAAAAA6D+amZmZmZnpPzQzMzMzM+s/zczMzMzM7D9nZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"PSWUrfrllUC6ZTfE07ObQIHSxpixD6BAXutlA2Fon0AWemawUmmdQBJdptJ4v59A48F0NdPPm0BhLg6FQP6cQNT8SMHKBJ1AN/hQuCybnECYCNGlG7+ZQOL2UqcslZtAhDgC8IHHmkDe0e+ORHOcQJp7JDyiB6BAxVCwvOY1n0BSmX0dHQ6gQFTe5JuCLJtAHVMIAw/Em0COFXr8JyGYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"68017"},"selection_policy":{"id":"68016"}},"id":"67998","type":"ColumnDataSource"},{"attributes":{},"id":"67984","type":"UndoTool"},{"attributes":{},"id":"67965","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"67987","type":"BoxAnnotation"},{"attributes":{"axis":{"id":"67975"},"dimension":1,"ticker":null},"id":"67978","type":"Grid"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"68007","type":"Span"},{"attributes":{},"id":"68019","type":"Selection"},{"attributes":{"children":[[{"id":"67962"},0,0]]},"id":"68023","type":"GridBox"},{"attributes":{},"id":"67985","type":"SaveTool"},{"attributes":{},"id":"68014","type":"BasicTickFormatter"},{"attributes":{},"id":"68018","type":"UnionRenderers"},{"attributes":{"text":"mu"},"id":"68009","type":"Title"},{"attributes":{},"id":"67976","type":"BasicTicker"},{"attributes":{},"id":"67982","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"67998"},"glyph":{"id":"67999"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68000"},"selection_glyph":null,"view":{"id":"68002"}},"id":"68001","type":"GlyphRenderer"},{"attributes":{},"id":"67980","type":"PanTool"},{"attributes":{},"id":"68017","type":"Selection"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"68008","type":"Span"},{"attributes":{"overlay":{"id":"67988"}},"id":"67983","type":"LassoSelectTool"},{"attributes":{"toolbar":{"id":"68024"},"toolbar_location":"above"},"id":"68025","type":"ToolbarBox"},{"attributes":{},"id":"68016","type":"UnionRenderers"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"68003","type":"Dash"},{"attributes":{"axis_label":"ESS for small intervals","formatter":{"id":"68012"},"ticker":{"id":"67976"}},"id":"67975","type":"LinearAxis"},{"attributes":{},"id":"67967","type":"LinearScale"},{"attributes":{"source":{"id":"67998"}},"id":"68002","type":"CDSView"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"68014"},"ticker":{"id":"67972"}},"id":"67971","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"67979"},{"id":"67980"},{"id":"67981"},{"id":"67982"},{"id":"67983"},{"id":"67984"},{"id":"67985"},{"id":"67986"}]},"id":"67989","type":"Toolbar"},{"attributes":{"below":[{"id":"67971"}],"center":[{"id":"67974"},{"id":"67978"}],"left":[{"id":"67975"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"68001"},{"id":"68005"},{"id":"68007"},{"id":"68008"}],"title":{"id":"68009"},"toolbar":{"id":"67989"},"toolbar_location":null,"x_range":{"id":"67963"},"x_scale":{"id":"67967"},"y_range":{"id":"67965"},"y_scale":{"id":"67969"}},"id":"67962","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"68004"},"glyph":{"id":"68003"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"68006"}},"id":"68005","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"67999","type":"Circle"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"67988","type":"PolyAnnotation"},{"attributes":{},"id":"68012","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"67987"}},"id":"67981","type":"BoxZoomTool"},{"attributes":{},"id":"67963","type":"DataRange1d"},{"attributes":{},"id":"67972","type":"BasicTicker"},{"attributes":{},"id":"67969","type":"LinearScale"},{"attributes":{"callback":null},"id":"67986","type":"HoverTool"}],"root_ids":["68026"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"e951077e-2f6e-48cc-867a-11c2464a1db2","root_ids":["68026"],"roots":{"68026":"dfcff1a5-5fd3-43f2-b6fb-bbe77b21fbda"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();