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
    
      
      
    
      var element = document.getElementById("b08501e7-33f3-4f3c-a2d0-e34b66a94342");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b08501e7-33f3-4f3c-a2d0-e34b66a94342' but no matching script tag was found.")
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
                    
                  var docs_json = '{"80ba6f12-763c-4a94-89a7-3759aa0410ed":{"roots":{"references":[{"attributes":{},"id":"67887","type":"UnionRenderers"},{"attributes":{},"id":"67888","type":"Selection"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBoscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"67890"},"selection_policy":{"id":"67889"}},"id":"67861","type":"ColumnDataSource"},{"attributes":{},"id":"67883","type":"BasicTickFormatter"},{"attributes":{},"id":"67889","type":"UnionRenderers"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"67846","type":"PolyAnnotation"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"67868","type":"Line"},{"attributes":{"axis_label":"ESS","formatter":{"id":"67883"},"ticker":{"id":"67834"}},"id":"67833","type":"LinearAxis"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"67863","type":"Line"},{"attributes":{"above":[{"id":"67877"}],"below":[{"id":"67829"}],"center":[{"id":"67832"},{"id":"67836"}],"left":[{"id":"67833"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"67859"},{"id":"67864"},{"id":"67869"},{"id":"67874"},{"id":"67876"}],"title":{"id":"67880"},"toolbar":{"id":"67847"},"toolbar_location":null,"x_range":{"id":"67821"},"x_scale":{"id":"67825"},"y_range":{"id":"67823"},"y_scale":{"id":"67827"}},"id":"67820","subtype":"Figure","type":"Plot"},{"attributes":{"toolbar":{"id":"67899"},"toolbar_location":"above"},"id":"67900","type":"ToolbarBox"},{"attributes":{},"id":"67823","type":"DataRange1d"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBoscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"67888"},"selection_policy":{"id":"67887"}},"id":"67856","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"67861"},"glyph":{"id":"67862"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"67863"},"selection_glyph":null,"view":{"id":"67865"}},"id":"67864","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkAD5BVCu9ZkQIkda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"67892"},"selection_policy":{"id":"67891"}},"id":"67866","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"67845","type":"BoxAnnotation"},{"attributes":{},"id":"67890","type":"Selection"},{"attributes":{},"id":"67893","type":"UnionRenderers"},{"attributes":{"source":{"id":"67861"}},"id":"67865","type":"CDSView"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"67872","type":"Circle"},{"attributes":{"click_policy":"hide","items":[{"id":"67878"},{"id":"67879"}],"location":"center_right","orientation":"horizontal"},"id":"67877","type":"Legend"},{"attributes":{},"id":"67830","type":"BasicTicker"},{"attributes":{"text":"b"},"id":"67880","type":"Title"},{"attributes":{},"id":"67842","type":"UndoTool"},{"attributes":{},"id":"67891","type":"UnionRenderers"},{"attributes":{"toolbars":[{"id":"67847"}],"tools":[{"id":"67837"},{"id":"67838"},{"id":"67839"},{"id":"67840"},{"id":"67841"},{"id":"67842"},{"id":"67843"},{"id":"67844"}]},"id":"67899","type":"ProxyToolbar"},{"attributes":{"children":[[{"id":"67820"},0,0]]},"id":"67898","type":"GridBox"},{"attributes":{"data_source":{"id":"67866"},"glyph":{"id":"67867"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"67868"},"selection_glyph":null,"view":{"id":"67870"}},"id":"67869","type":"GlyphRenderer"},{"attributes":{},"id":"67821","type":"DataRange1d"},{"attributes":{"axis_label":"Total number of draws","formatter":{"id":"67885"},"ticker":{"id":"67830"}},"id":"67829","type":"LinearAxis"},{"attributes":{"callback":null},"id":"67844","type":"HoverTool"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"67874"},{"id":"67869"}]},"id":"67879","type":"LegendItem"},{"attributes":{},"id":"67885","type":"BasicTickFormatter"},{"attributes":{},"id":"67827","type":"LinearScale"},{"attributes":{"axis":{"id":"67829"},"ticker":null},"id":"67832","type":"Grid"},{"attributes":{"data_source":{"id":"67856"},"glyph":{"id":"67857"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"67858"},"selection_glyph":null,"view":{"id":"67860"}},"id":"67859","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"67857","type":"Circle"},{"attributes":{},"id":"67894","type":"Selection"},{"attributes":{"source":{"id":"67856"}},"id":"67860","type":"CDSView"},{"attributes":{"axis":{"id":"67833"},"dimension":1,"ticker":null},"id":"67836","type":"Grid"},{"attributes":{"source":{"id":"67866"}},"id":"67870","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"67873","type":"Circle"},{"attributes":{"source":{"id":"67871"}},"id":"67875","type":"CDSView"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"67876","type":"Span"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"67858","type":"Circle"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"67859"},{"id":"67864"}]},"id":"67878","type":"LegendItem"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"67862","type":"Line"},{"attributes":{"overlay":{"id":"67846"}},"id":"67841","type":"LassoSelectTool"},{"attributes":{},"id":"67834","type":"BasicTicker"},{"attributes":{},"id":"67843","type":"SaveTool"},{"attributes":{"children":[{"id":"67900"},{"id":"67898"}]},"id":"67901","type":"Column"},{"attributes":{},"id":"67837","type":"ResetTool"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkAD5BVCu9ZkQIkda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"67894"},"selection_policy":{"id":"67893"}},"id":"67871","type":"ColumnDataSource"},{"attributes":{},"id":"67838","type":"PanTool"},{"attributes":{"data_source":{"id":"67871"},"glyph":{"id":"67872"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"67873"},"selection_glyph":null,"view":{"id":"67875"}},"id":"67874","type":"GlyphRenderer"},{"attributes":{},"id":"67840","type":"WheelZoomTool"},{"attributes":{},"id":"67892","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"67837"},{"id":"67838"},{"id":"67839"},{"id":"67840"},{"id":"67841"},{"id":"67842"},{"id":"67843"},{"id":"67844"}]},"id":"67847","type":"Toolbar"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"67867","type":"Line"},{"attributes":{"overlay":{"id":"67845"}},"id":"67839","type":"BoxZoomTool"},{"attributes":{},"id":"67825","type":"LinearScale"}],"root_ids":["67901"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"80ba6f12-763c-4a94-89a7-3759aa0410ed","root_ids":["67901"],"roots":{"67901":"b08501e7-33f3-4f3c-a2d0-e34b66a94342"}}];
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