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
    
      
      
    
      var element = document.getElementById("0aaab5d7-c894-4161-ac82-de24695b29da");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '0aaab5d7-c894-4161-ac82-de24695b29da' but no matching script tag was found.")
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
                    
                  var docs_json = '{"16fe6215-973d-478c-a70b-a9f82bc7c9bc":{"roots":{"references":[{"attributes":{"line_color":{"value":"#2a2eec"},"size":{"field":"sizes","units":"screen"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"100485","type":"Cross"},{"attributes":{"children":[{"id":"100503"},{"id":"100501"}]},"id":"100504","type":"Column"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"100497"},"selection_policy":{"id":"100496"}},"id":"100486","type":"ColumnDataSource"},{"attributes":{},"id":"100472","type":"SaveTool"},{"attributes":{},"id":"100494","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"100486"},"glyph":{"id":"100485"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"100488"}},"id":"100487","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"100458"}],"center":[{"id":"100461"},{"id":"100465"}],"left":[{"id":"100462"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"100487"}],"title":{"id":"100489"},"toolbar":{"id":"100476"},"toolbar_location":null,"x_range":{"id":"100450"},"x_scale":{"id":"100454"},"y_range":{"id":"100452"},"y_scale":{"id":"100456"}},"id":"100449","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"100475","type":"PolyAnnotation"},{"attributes":{},"id":"100463","type":"BasicTicker"},{"attributes":{},"id":"100471","type":"UndoTool"},{"attributes":{},"id":"100492","type":"BasicTickFormatter"},{"attributes":{},"id":"100497","type":"Selection"},{"attributes":{},"id":"100452","type":"DataRange1d"},{"attributes":{},"id":"100469","type":"WheelZoomTool"},{"attributes":{},"id":"100467","type":"PanTool"},{"attributes":{"axis":{"id":"100458"},"ticker":null},"id":"100461","type":"Grid"},{"attributes":{"overlay":{"id":"100475"}},"id":"100470","type":"LassoSelectTool"},{"attributes":{"text":"centered model - non centered model"},"id":"100489","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"100466"},{"id":"100467"},{"id":"100468"},{"id":"100469"},{"id":"100470"},{"id":"100471"},{"id":"100472"},{"id":"100473"}]},"id":"100476","type":"Toolbar"},{"attributes":{},"id":"100466","type":"ResetTool"},{"attributes":{"overlay":{"id":"100474"}},"id":"100468","type":"BoxZoomTool"},{"attributes":{"axis":{"id":"100462"},"dimension":1,"ticker":null},"id":"100465","type":"Grid"},{"attributes":{"children":[[{"id":"100449"},0,0]]},"id":"100501","type":"GridBox"},{"attributes":{"toolbar":{"id":"100502"},"toolbar_location":"above"},"id":"100503","type":"ToolbarBox"},{"attributes":{"callback":null},"id":"100473","type":"HoverTool"},{"attributes":{},"id":"100496","type":"UnionRenderers"},{"attributes":{},"id":"100459","type":"BasicTicker"},{"attributes":{},"id":"100456","type":"LinearScale"},{"attributes":{"toolbars":[{"id":"100476"}],"tools":[{"id":"100466"},{"id":"100467"},{"id":"100468"},{"id":"100469"},{"id":"100470"},{"id":"100471"},{"id":"100472"},{"id":"100473"}]},"id":"100502","type":"ProxyToolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"100474","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"100494"},"ticker":{"id":"100459"}},"id":"100458","type":"LinearAxis"},{"attributes":{"source":{"id":"100486"}},"id":"100488","type":"CDSView"},{"attributes":{},"id":"100454","type":"LinearScale"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"100492"},"ticker":{"id":"100463"}},"id":"100462","type":"LinearAxis"},{"attributes":{},"id":"100450","type":"DataRange1d"}],"root_ids":["100504"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"16fe6215-973d-478c-a70b-a9f82bc7c9bc","root_ids":["100504"],"roots":{"100504":"0aaab5d7-c894-4161-ac82-de24695b29da"}}];
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