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
    
      
      
    
      var element = document.getElementById("93234b32-c354-43bf-91f7-4316b3bf72bb");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '93234b32-c354-43bf-91f7-4316b3bf72bb' but no matching script tag was found.")
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
                    
                  var docs_json = '{"e5953145-8428-4877-a6a2-20f87fe74f9d":{"roots":{"references":[{"attributes":{"line_color":"#ff0000","x":{"field":"x"},"y":{"field":"y"}},"id":"67503","type":"Line"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"67472"},{"id":"67473"},{"id":"67474"},{"id":"67475"},{"id":"67476"},{"id":"67477"}]},"id":"67479","type":"Toolbar"},{"attributes":{},"id":"67524","type":"Selection"},{"attributes":{},"id":"67473","type":"WheelZoomTool"},{"attributes":{"source":{"id":"67486"}},"id":"67490","type":"CDSView"},{"attributes":{},"id":"67431","type":"LinearScale"},{"attributes":{"data":{"left":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],"right":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],"top":{"__ndarray__":"exSuR+F6lD8zMzMzMzOzP99PjZduEsM/SgwCK4cWyT/2KFyPwvXIP8uhRbbz/cQ/arx0kxgEtj/Jdr6fGi+tP7gehetRuJ4/nMQgsHJokT/6fmq8dJN4P/p+arx0k2g//Knx0k1iUD8AAAAAAAAAAAAAAAAAAAAA/Knx0k1iUD8=","dtype":"float64","order":"little","shape":[16]}},"selected":{"id":"67498"},"selection_policy":{"id":"67497"}},"id":"67486","type":"ColumnDataSource"},{"attributes":{},"id":"67495","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"67433"}],"center":[{"id":"67436"},{"id":"67440"},{"id":"67500"}],"left":[{"id":"67437"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"67489"}],"title":{"id":"67491"},"toolbar":{"id":"67448"},"x_range":{"id":"67425"},"x_scale":{"id":"67429"},"y_range":{"id":"67427"},"y_scale":{"id":"67431"}},"id":"67424","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"67442","type":"WheelZoomTool"},{"attributes":{},"id":"67427","type":"DataRange1d"},{"attributes":{"below":[{"id":"67464"}],"center":[{"id":"67467"},{"id":"67471"}],"left":[{"id":"67468"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"67505"}],"title":{"id":"67510"},"toolbar":{"id":"67479"},"x_range":{"id":"67456"},"x_scale":{"id":"67460"},"y_range":{"id":"67458"},"y_scale":{"id":"67462"}},"id":"67455","subtype":"Figure","type":"Plot"},{"attributes":{"axis":{"id":"67464"},"ticker":null},"id":"67467","type":"Grid"},{"attributes":{},"id":"67462","type":"LinearScale"},{"attributes":{},"id":"67441","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"67441"},{"id":"67442"},{"id":"67443"},{"id":"67444"},{"id":"67445"},{"id":"67446"}]},"id":"67448","type":"Toolbar"},{"attributes":{"formatter":{"id":"67516"},"ticker":{"id":"67469"}},"id":"67468","type":"LinearAxis"},{"attributes":{"bottom":{"value":0},"fill_color":{"value":"#000000"},"left":{"field":"left"},"line_alpha":{"value":0},"line_color":{"value":"#000000"},"right":{"field":"right"},"top":{"field":"top"}},"id":"67487","type":"Quad"},{"attributes":{"axis":{"id":"67433"},"ticker":null},"id":"67436","type":"Grid"},{"attributes":{"source":{"id":"67502"}},"id":"67506","type":"CDSView"},{"attributes":{},"id":"67458","type":"DataRange1d"},{"attributes":{},"id":"67444","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"67447","type":"BoxAnnotation"},{"attributes":{"text":""},"id":"67491","type":"Title"},{"attributes":{"formatter":{"id":"67518"},"ticker":{"id":"67465"}},"id":"67464","type":"LinearAxis"},{"attributes":{},"id":"67434","type":"BasicTicker"},{"attributes":{},"id":"67460","type":"LinearScale"},{"attributes":{"label":{"value":"Poisson"},"renderers":[{"id":"67489"}]},"id":"67501","type":"LegendItem"},{"attributes":{"text":""},"id":"67510","type":"Title"},{"attributes":{"data_source":{"id":"67486"},"glyph":{"id":"67487"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"67488"},"selection_glyph":null,"view":{"id":"67490"}},"id":"67489","type":"GlyphRenderer"},{"attributes":{},"id":"67472","type":"PanTool"},{"attributes":{"bottom":{"value":0},"fill_alpha":{"value":0.1},"fill_color":{"value":"#000000"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#000000"},"right":{"field":"right"},"top":{"field":"top"}},"id":"67488","type":"Quad"},{"attributes":{},"id":"67438","type":"BasicTicker"},{"attributes":{},"id":"67475","type":"SaveTool"},{"attributes":{},"id":"67446","type":"HelpTool"},{"attributes":{},"id":"67445","type":"ResetTool"},{"attributes":{"overlay":{"id":"67478"}},"id":"67474","type":"BoxZoomTool"},{"attributes":{},"id":"67523","type":"UnionRenderers"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[512]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[512]}},"selected":{"id":"67524"},"selection_policy":{"id":"67523"}},"id":"67502","type":"ColumnDataSource"},{"attributes":{},"id":"67469","type":"BasicTicker"},{"attributes":{},"id":"67493","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"67468"},"dimension":1,"ticker":null},"id":"67471","type":"Grid"},{"attributes":{},"id":"67477","type":"HelpTool"},{"attributes":{},"id":"67476","type":"ResetTool"},{"attributes":{},"id":"67429","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"#ff0000","x":{"field":"x"},"y":{"field":"y"}},"id":"67504","type":"Line"},{"attributes":{},"id":"67518","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"67447"}},"id":"67443","type":"BoxZoomTool"},{"attributes":{},"id":"67498","type":"Selection"},{"attributes":{"formatter":{"id":"67495"},"ticker":{"id":"67434"}},"id":"67433","type":"LinearAxis"},{"attributes":{"formatter":{"id":"67493"},"ticker":{"id":"67438"}},"id":"67437","type":"LinearAxis"},{"attributes":{},"id":"67516","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"67424"},{"id":"67455"}]},"id":"67507","type":"Row"},{"attributes":{},"id":"67497","type":"UnionRenderers"},{"attributes":{},"id":"67465","type":"BasicTicker"},{"attributes":{"data_source":{"id":"67502"},"glyph":{"id":"67503"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"67504"},"selection_glyph":null,"view":{"id":"67506"}},"id":"67505","type":"GlyphRenderer"},{"attributes":{},"id":"67425","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"67478","type":"BoxAnnotation"},{"attributes":{"axis":{"id":"67437"},"dimension":1,"ticker":null},"id":"67440","type":"Grid"},{"attributes":{},"id":"67456","type":"DataRange1d"},{"attributes":{"items":[{"id":"67501"}]},"id":"67500","type":"Legend"}],"root_ids":["67507"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"e5953145-8428-4877-a6a2-20f87fe74f9d","root_ids":["67507"],"roots":{"67507":"93234b32-c354-43bf-91f7-4316b3bf72bb"}}];
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