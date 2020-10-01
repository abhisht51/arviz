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
    
      
      
    
      var element = document.getElementById("1b0c9b29-2ff0-438d-84d8-525c39a23839");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '1b0c9b29-2ff0-438d-84d8-525c39a23839' but no matching script tag was found.")
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
                    
                  var docs_json = '{"b441267a-6b32-41bb-ada6-951c018f00cf":{"roots":{"references":[{"attributes":{},"id":"65401","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"65411"},{"id":"65412"},{"id":"65413"},{"id":"65414"},{"id":"65415"},{"id":"65416"},{"id":"65417"},{"id":"65418"}]},"id":"65421","type":"Toolbar"},{"attributes":{"axis":{"id":"65407"},"dimension":1,"ticker":null},"id":"65410","type":"Grid"},{"attributes":{},"id":"65414","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"65444","type":"Circle"},{"attributes":{"toolbar":{"id":"65477"},"toolbar_location":"above"},"id":"65478","type":"ToolbarBox"},{"attributes":{"source":{"id":"65447"}},"id":"65451","type":"CDSView"},{"attributes":{"data":{"x":[-30.81037417660005],"y":[-0.75]},"selected":{"id":"65464"},"selection_policy":{"id":"65463"}},"id":"65432","type":"ColumnDataSource"},{"attributes":{},"id":"65461","type":"BasicTickFormatter"},{"attributes":{},"id":"65412","type":"PanTool"},{"attributes":{},"id":"65411","type":"ResetTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"65439","type":"MultiLine"},{"attributes":{},"id":"65470","type":"Selection"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"65420","type":"PolyAnnotation"},{"attributes":{"data":{"x":[-30.687290318389813,-30.81037417660005],"y":[0.0,-1.0]},"selected":{"id":"65468"},"selection_policy":{"id":"65467"}},"id":"65442","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"65452"},"glyph":{"id":"65453"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"65454"},"selection_glyph":null,"view":{"id":"65456"}},"id":"65455","type":"GlyphRenderer"},{"attributes":{"data":{"x":[-32.37106695144684,-32.71848009989285],"y":[0.0,-1.0]},"selected":{"id":"65472"},"selection_policy":{"id":"65471"}},"id":"65452","type":"ColumnDataSource"},{"attributes":{"source":{"id":"65442"}},"id":"65446","type":"CDSView"},{"attributes":{"toolbars":[{"id":"65421"}],"tools":[{"id":"65411"},{"id":"65412"},{"id":"65413"},{"id":"65414"},{"id":"65415"},{"id":"65416"},{"id":"65417"},{"id":"65418"}]},"id":"65477","type":"ProxyToolbar"},{"attributes":{"children":[{"id":"65478"},{"id":"65476"}]},"id":"65479","type":"Column"},{"attributes":{"data_source":{"id":"65432"},"glyph":{"id":"65433"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"65434"},"selection_glyph":null,"view":{"id":"65436"}},"id":"65435","type":"GlyphRenderer"},{"attributes":{"source":{"id":"65452"}},"id":"65456","type":"CDSView"},{"attributes":{},"id":"65467","type":"UnionRenderers"},{"attributes":{},"id":"65469","type":"UnionRenderers"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"65438","type":"MultiLine"},{"attributes":{"children":[[{"id":"65394"},0,0]]},"id":"65476","type":"GridBox"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"65419","type":"BoxAnnotation"},{"attributes":{"axis_label":"Log","formatter":{"id":"65461"},"ticker":{"id":"65404"}},"id":"65403","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"65434","type":"Triangle"},{"attributes":{"end":0.5,"start":-1.5},"id":"65397","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"65453","type":"Circle"},{"attributes":{},"id":"65395","type":"DataRange1d"},{"attributes":{},"id":"65399","type":"LinearScale"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"65443","type":"Circle"},{"attributes":{},"id":"65404","type":"BasicTicker"},{"attributes":{},"id":"65417","type":"SaveTool"},{"attributes":{"data_source":{"id":"65447"},"glyph":{"id":"65448"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"65449"},"selection_glyph":null,"view":{"id":"65451"}},"id":"65450","type":"GlyphRenderer"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"65448","type":"MultiLine"},{"attributes":{"formatter":{"id":"65460"},"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"ticker":{"id":"65430"}},"id":"65407","type":"LinearAxis"},{"attributes":{"data_source":{"id":"65442"},"glyph":{"id":"65443"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"65444"},"selection_glyph":null,"view":{"id":"65446"}},"id":"65445","type":"GlyphRenderer"},{"attributes":{},"id":"65464","type":"Selection"},{"attributes":{"below":[{"id":"65403"}],"center":[{"id":"65406"},{"id":"65410"}],"left":[{"id":"65407"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"65435"},{"id":"65440"},{"id":"65445"},{"id":"65450"},{"id":"65455"},{"id":"65457"}],"title":{"id":"65458"},"toolbar":{"id":"65421"},"toolbar_location":null,"x_range":{"id":"65395"},"x_scale":{"id":"65399"},"y_range":{"id":"65397"},"y_scale":{"id":"65401"}},"id":"65394","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":"height","line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.687290318389813},"id":"65457","type":"Span"},{"attributes":{"callback":null},"id":"65418","type":"HoverTool"},{"attributes":{},"id":"65465","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"65419"}},"id":"65413","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"65433","type":"Triangle"},{"attributes":{},"id":"65468","type":"Selection"},{"attributes":{"source":{"id":"65437"}},"id":"65441","type":"CDSView"},{"attributes":{},"id":"65471","type":"UnionRenderers"},{"attributes":{"text":""},"id":"65458","type":"Title"},{"attributes":{"axis":{"id":"65403"},"ticker":null},"id":"65406","type":"Grid"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"65449","type":"MultiLine"},{"attributes":{},"id":"65472","type":"Selection"},{"attributes":{},"id":"65416","type":"UndoTool"},{"attributes":{"data":{"xs":[[-30.896420573800537,-30.724327779399562]],"ys":[[-0.75,-0.75]]},"selected":{"id":"65466"},"selection_policy":{"id":"65465"}},"id":"65437","type":"ColumnDataSource"},{"attributes":{"data":{"xs":[[-32.07075777944174,-29.303822857337884],[-32.13654915217471,-29.48419920102539]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"65470"},"selection_policy":{"id":"65469"}},"id":"65447","type":"ColumnDataSource"},{"attributes":{},"id":"65463","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"65437"},"glyph":{"id":"65438"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"65439"},"selection_glyph":null,"view":{"id":"65441"}},"id":"65440","type":"GlyphRenderer"},{"attributes":{"source":{"id":"65432"}},"id":"65436","type":"CDSView"},{"attributes":{},"id":"65466","type":"Selection"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"65430","type":"FixedTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"black"},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"65454","type":"Circle"},{"attributes":{"overlay":{"id":"65420"}},"id":"65415","type":"LassoSelectTool"},{"attributes":{},"id":"65460","type":"BasicTickFormatter"}],"root_ids":["65479"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"b441267a-6b32-41bb-ada6-951c018f00cf","root_ids":["65479"],"roots":{"65479":"1b0c9b29-2ff0-438d-84d8-525c39a23839"}}];
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