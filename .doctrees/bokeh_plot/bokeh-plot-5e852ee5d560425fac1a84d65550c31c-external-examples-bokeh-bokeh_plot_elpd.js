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
    
      
      
    
      var element = document.getElementById("1eb73e4b-8f57-43a3-bb5d-29cb61a2ade9");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '1eb73e4b-8f57-43a3-bb5d-29cb61a2ade9' but no matching script tag was found.")
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
                    
                  var docs_json = '{"4525d0eb-30af-454c-a5d1-5a6639d75780":{"roots":{"references":[{"attributes":{},"id":"67585","type":"LinearScale"},{"attributes":{},"id":"67600","type":"WheelZoomTool"},{"attributes":{"toolbar":{"id":"67633"},"toolbar_location":"above"},"id":"67634","type":"ToolbarBox"},{"attributes":{},"id":"67628","type":"Selection"},{"attributes":{"overlay":{"id":"67606"}},"id":"67601","type":"LassoSelectTool"},{"attributes":{},"id":"67597","type":"ResetTool"},{"attributes":{"axis":{"id":"67589"},"ticker":null},"id":"67592","type":"Grid"},{"attributes":{},"id":"67581","type":"DataRange1d"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"67623"},"ticker":{"id":"67594"}},"id":"67593","type":"LinearAxis"},{"attributes":{"source":{"id":"67617"}},"id":"67619","type":"CDSView"},{"attributes":{"overlay":{"id":"67605"}},"id":"67599","type":"BoxZoomTool"},{"attributes":{},"id":"67603","type":"SaveTool"},{"attributes":{"line_color":{"value":"#2a2eec"},"size":{"field":"sizes","units":"screen"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"67616","type":"Cross"},{"attributes":{},"id":"67587","type":"LinearScale"},{"attributes":{"callback":null},"id":"67604","type":"HoverTool"},{"attributes":{},"id":"67623","type":"BasicTickFormatter"},{"attributes":{},"id":"67598","type":"PanTool"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"67628"},"selection_policy":{"id":"67627"}},"id":"67617","type":"ColumnDataSource"},{"attributes":{},"id":"67627","type":"UnionRenderers"},{"attributes":{"axis":{"id":"67593"},"dimension":1,"ticker":null},"id":"67596","type":"Grid"},{"attributes":{"toolbars":[{"id":"67607"}],"tools":[{"id":"67597"},{"id":"67598"},{"id":"67599"},{"id":"67600"},{"id":"67601"},{"id":"67602"},{"id":"67603"},{"id":"67604"}]},"id":"67633","type":"ProxyToolbar"},{"attributes":{"below":[{"id":"67589"}],"center":[{"id":"67592"},{"id":"67596"}],"left":[{"id":"67593"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"67618"}],"title":{"id":"67620"},"toolbar":{"id":"67607"},"toolbar_location":null,"x_range":{"id":"67581"},"x_scale":{"id":"67585"},"y_range":{"id":"67583"},"y_scale":{"id":"67587"}},"id":"67580","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"67597"},{"id":"67598"},{"id":"67599"},{"id":"67600"},{"id":"67601"},{"id":"67602"},{"id":"67603"},{"id":"67604"}]},"id":"67607","type":"Toolbar"},{"attributes":{},"id":"67583","type":"DataRange1d"},{"attributes":{"children":[[{"id":"67580"},0,0]]},"id":"67632","type":"GridBox"},{"attributes":{"text":"Centered eight - Non centered eight"},"id":"67620","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"67605","type":"BoxAnnotation"},{"attributes":{"children":[{"id":"67634"},{"id":"67632"}]},"id":"67635","type":"Column"},{"attributes":{},"id":"67590","type":"BasicTicker"},{"attributes":{},"id":"67594","type":"BasicTicker"},{"attributes":{},"id":"67602","type":"UndoTool"},{"attributes":{"data_source":{"id":"67617"},"glyph":{"id":"67616"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"67619"}},"id":"67618","type":"GlyphRenderer"},{"attributes":{},"id":"67625","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"67625"},"ticker":{"id":"67590"}},"id":"67589","type":"LinearAxis"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"67606","type":"PolyAnnotation"}],"root_ids":["67635"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"4525d0eb-30af-454c-a5d1-5a6639d75780","root_ids":["67635"],"roots":{"67635":"1eb73e4b-8f57-43a3-bb5d-29cb61a2ade9"}}];
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