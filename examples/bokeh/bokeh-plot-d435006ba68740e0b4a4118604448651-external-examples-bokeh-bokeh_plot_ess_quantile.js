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
    
      
      
    
      var element = document.getElementById("11e0385d-ad29-4d9c-af74-66eb50284f2a");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '11e0385d-ad29-4d9c-af74-66eb50284f2a' but no matching script tag was found.")
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
                    
                  var docs_json = '{"9309b74b-f1dd-443d-9214-e95a13bbd130":{"roots":{"references":[{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"68108","type":"Circle"},{"attributes":{},"id":"68085","type":"BasicTicker"},{"attributes":{},"id":"68118","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"68127"},{"id":"68125"}]},"id":"68128","type":"Column"},{"attributes":{"callback":null},"id":"68095","type":"HoverTool"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"R2riOHxslUDJrxt4rb2XQDIUfR7VtJlAMRHUGWndmUBKO3TVSyObQNp1b/0mJp1AQsbCePPwnkB7Du/cq5qgQH8ihBoHoKBAh58qLZB5oECYlOwhLnyfQFgCvMP22p1AysGm42rqnEA6InuU09KdQLKWYY7d25xA+A/0ZSlsnEBpLBEly1mdQPcF40OedZlAEC7heDC7m0AxB8tcKnmYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"68121"},"selection_policy":{"id":"68120"}},"id":"68107","type":"ColumnDataSource"},{"attributes":{},"id":"68121","type":"Selection"},{"attributes":{},"id":"68074","type":"DataRange1d"},{"attributes":{"axis_label":"ESS for quantiles","formatter":{"id":"68116"},"ticker":{"id":"68085"}},"id":"68084","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"68096","type":"BoxAnnotation"},{"attributes":{},"id":"68120","type":"UnionRenderers"},{"attributes":{"children":[[{"id":"68071"},0,0]]},"id":"68125","type":"GridBox"},{"attributes":{},"id":"68081","type":"BasicTicker"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"68118"},"ticker":{"id":"68081"}},"id":"68080","type":"LinearAxis"},{"attributes":{},"id":"68091","type":"WheelZoomTool"},{"attributes":{"text":"sigma"},"id":"68113","type":"Title"},{"attributes":{},"id":"68094","type":"SaveTool"},{"attributes":{},"id":"68116","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"68097","type":"PolyAnnotation"},{"attributes":{},"id":"68072","type":"DataRange1d"},{"attributes":{},"id":"68078","type":"LinearScale"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"68112","type":"Span"},{"attributes":{},"id":"68089","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"68088"},{"id":"68089"},{"id":"68090"},{"id":"68091"},{"id":"68092"},{"id":"68093"},{"id":"68094"},{"id":"68095"}]},"id":"68098","type":"Toolbar"},{"attributes":{"below":[{"id":"68080"}],"center":[{"id":"68083"},{"id":"68087"}],"left":[{"id":"68084"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"68110"},{"id":"68112"}],"title":{"id":"68113"},"toolbar":{"id":"68098"},"toolbar_location":null,"x_range":{"id":"68072"},"x_scale":{"id":"68076"},"y_range":{"id":"68074"},"y_scale":{"id":"68078"}},"id":"68071","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"68093","type":"UndoTool"},{"attributes":{"data_source":{"id":"68107"},"glyph":{"id":"68108"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68109"},"selection_glyph":null,"view":{"id":"68111"}},"id":"68110","type":"GlyphRenderer"},{"attributes":{"source":{"id":"68107"}},"id":"68111","type":"CDSView"},{"attributes":{},"id":"68088","type":"ResetTool"},{"attributes":{"toolbar":{"id":"68126"},"toolbar_location":"above"},"id":"68127","type":"ToolbarBox"},{"attributes":{"toolbars":[{"id":"68098"}],"tools":[{"id":"68088"},{"id":"68089"},{"id":"68090"},{"id":"68091"},{"id":"68092"},{"id":"68093"},{"id":"68094"},{"id":"68095"}]},"id":"68126","type":"ProxyToolbar"},{"attributes":{"overlay":{"id":"68097"}},"id":"68092","type":"LassoSelectTool"},{"attributes":{"axis":{"id":"68084"},"dimension":1,"ticker":null},"id":"68087","type":"Grid"},{"attributes":{"overlay":{"id":"68096"}},"id":"68090","type":"BoxZoomTool"},{"attributes":{},"id":"68076","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"68109","type":"Circle"},{"attributes":{"axis":{"id":"68080"},"ticker":null},"id":"68083","type":"Grid"}],"root_ids":["68128"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"9309b74b-f1dd-443d-9214-e95a13bbd130","root_ids":["68128"],"roots":{"68128":"11e0385d-ad29-4d9c-af74-66eb50284f2a"}}];
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