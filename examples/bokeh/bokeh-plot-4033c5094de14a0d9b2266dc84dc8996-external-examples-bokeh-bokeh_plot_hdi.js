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
    
      
      
    
      var element = document.getElementById("2a137c36-346a-4d83-8c7d-de73243eafe7");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '2a137c36-346a-4d83-8c7d-de73243eafe7' but no matching script tag was found.")
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
                    
                  var docs_json = '{"6a6a7a80-93be-4d7a-a9a6-bd4c91131f95":{"roots":{"references":[{"attributes":{"text":""},"id":"68998","type":"Title"},{"attributes":{},"id":"68970","type":"PanTool"},{"attributes":{},"id":"68959","type":"LinearScale"},{"attributes":{},"id":"68969","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"68969"},{"id":"68970"},{"id":"68971"},{"id":"68972"},{"id":"68973"},{"id":"68974"},{"id":"68975"},{"id":"68976"}]},"id":"68979","type":"Toolbar"},{"attributes":{"axis":{"id":"68961"},"ticker":null},"id":"68964","type":"Grid"},{"attributes":{},"id":"69004","type":"UnionRenderers"},{"attributes":{},"id":"69005","type":"Selection"},{"attributes":{},"id":"68953","type":"DataRange1d"},{"attributes":{"source":{"id":"68993"}},"id":"68997","type":"CDSView"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"68978","type":"PolyAnnotation"},{"attributes":{},"id":"68962","type":"BasicTicker"},{"attributes":{"overlay":{"id":"68977"}},"id":"68971","type":"BoxZoomTool"},{"attributes":{},"id":"68957","type":"LinearScale"},{"attributes":{},"id":"68955","type":"DataRange1d"},{"attributes":{},"id":"68974","type":"UndoTool"},{"attributes":{"axis":{"id":"68965"},"dimension":1,"ticker":null},"id":"68968","type":"Grid"},{"attributes":{},"id":"68966","type":"BasicTicker"},{"attributes":{"callback":null},"id":"68976","type":"HoverTool"},{"attributes":{"formatter":{"id":"69000"},"ticker":{"id":"68966"}},"id":"68965","type":"LinearAxis"},{"attributes":{"fill_alpha":0.5,"fill_color":"#ff0000","line_alpha":0,"line_color":"#ff0000","x":{"field":"x"},"y":{"field":"y"}},"id":"68989","type":"Patch"},{"attributes":{},"id":"69000","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"68993"},"glyph":{"id":"68994"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68995"},"selection_glyph":null,"view":{"id":"68997"}},"id":"68996","type":"GlyphRenderer"},{"attributes":{},"id":"68972","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"69002"},"ticker":{"id":"68962"}},"id":"68961","type":"LinearAxis"},{"attributes":{"data":{"x":{"__ndarray__":"n26oErSiAsAmAPtt/3gCwBXI/Rd8if+//DW4foqy/r//GJ//r3L7vy7xrjfcJPq/03rsjKFG+b8q0JueROz4vwK/EFQYi/i/mhqkYGAm+L9Q6SEOPi/3v9MFoCIGp/S/+UG209eR8r/Nl62vxk/yv2GjYpsNqO2/POatslTT7L//+2Dww73sv8P7wSCPNOy/8pqGvy3t6b9Ki8fwpXnpv3pQQlhmEOm/rRlMX2aa6L/6oSax1X3ov8eE4yRDxOe/RqW3qPHI47+JtsJlOXnjv7PhKBIhmeK/XX+AV1pq4r+dICqSOsTgvxVsH3W4n+C/Z8DpoK2P3b8nxPIFVpjcv063u3adD9i/tEyJisfi179x2i6xRoPWv4XqljzFrNS/OTe0hzqZ0b/tG/xFKEDGvz1ScI0hirq/y4JcJpPItL9JezxKDImxv/Opyxu4pLC/5LoiQIglor+4bm7rE7CFvyVM1e7IJmk/+kyMOg7Jkj8MIpj+5GihP69wKhPHfqI/FM4pXOXtoj8jw4s3YVqjPx1ANmg9Y6M/r0TSP9TMsj8h7f42eJe2P+BP3PT8YLc/wjhCP0QMvT8NHxC27QHGP+8EINOxhsY/vQ8sUj6DyD8MTFaWOybNP3ZV5tKaVtA/eBHKi7Pg0j9zGbAMk1LYP/w86uq889g/TwOxpXsI2j/xYI9AqiTdP3QbIChTct0/UzVYlNd63j+jPD6eS6reP2brUiZNp+A/9X2QGG3l4D92pu2LatbhP/0BW7bZgeM/rgJmRbU75D9UyJa5U2PkP7HJDThXp+Q/y3/ZEtu35T8YUmINj+rlP3aL0yaR0+c/Op3LB7Xc6z9WK9l0SAjsP9lNR65aVuw/BYBc2gkL7z+0+ZcKTgTwPwAOLlemJvA/Cv+MTt0u8D//aSJpm7TwP49i/kzj5fA/6cmb7sNA8z/lPiZpAcrzP1wdS1eI6fM/PVutFn129D/8R8KNCnH1PzeinxW2yPU/i1gCRxpR9z8h9B5B0/j3P1Szu6pynfs/o5xng7qm+z8hFcrj/tb9P29p3voqgP4/g87SAs+MAUA=","dtype":"float64","order":"little","shape":[100]},"y":{"__ndarray__":"wiKv2pe66j+0/wkkAQ7rP/YbAfRBO/A/AuWjwLqm8D+AczAAqEbyP2mHKOSR7fI/lsKJOa9c8z/rF7Kw3YnzP3+g99VzuvM/s/Ktz8/s8z9YC+/4YGj0Pxb9r+58rPU/BN8kFhS39j8aNCmoHNj2PyhXJ5n8lfg/cYZU0yrL+D8AwecDj9D4Pw+Bzzfc8vg/RFkekLSE+T8uHc6DlqH5P+Jr72nmu/k/lfksaGbZ+T+CV7aTiuD5P84exzbvDvo/rhbSlcMN+z9eUo+msSH7P5PHdbu3Wfs/KeAfamll+z/Zd3Vb8c77P/skuOIR2Ps/88fiSwpO/D97p0E/9Wz8PxaJKFEM/vw/atauDqcD/T+yJNoply/9P68ibVhnav0/GXkJr9jM/T9BPqB7/Zv+P259lPOuK/8/6hvNZrtZ/z8mHK6dt3P/P7CiIT/aev8/FHX/3mm3/z+RkRTsT+r/P6raHdkkAwBATYw6DskSAEBEMP3J0SIAQOFUJo79JABAnFO4ytslAECGF2/CtCYAQIBs0HrGJgBAE0n/UDNLAEC1+9vgXVoAQEBx0/ODXQBA4wj9EDF0AED4gLBtD7AAQCcAmY41tABAfmCR8hnEAEBgsrLcMekAQFdlLq1pBQFAGKG8OAsuAUCXAcswKYUBQNCjrs47jwFANRBbuoegAUAP9gikStIBQLcBgjIl1wFAVYNFea3nAUDK4+O5pOoBQG1dyqTpFAJAvw8So60cAkDPtH1RzToCQEBgyzY7cAJAVsCsqHaHAkAK2TJ3aowCQDa5AefqlAJA+S9bYvu2AkBDSqzhUb0CQG9x2iRy+gJAp3P5oJZ7A0BrJZsOCYEDQLvpyFXLigNAAZBLO2HhA0Bt/qWCEwEEQICDy5WpCQRAwj+jU7cLBECAmkjaJi0EQKSYP9N4OQRAevKm+zDQBEC5j0lagPIEQFfH0hVi+gRAz1arRZ8dBUD/kXCjQlwFQI7oZ4UtcgVAI5bAkUbUBUAIvUfQNP4FQNXsrqpc5wZAKefZoK7pBkBIhfK4v3UHQFyat74KoAdAQmdpgWfGCEA=","dtype":"float64","order":"little","shape":[100]}},"selected":{"id":"69007"},"selection_policy":{"id":"69006"}},"id":"68993","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"68988"},"glyph":{"id":"68989"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68990"},"selection_glyph":null,"view":{"id":"68992"}},"id":"68991","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"68978"}},"id":"68973","type":"LassoSelectTool"},{"attributes":{"line_alpha":0.1,"line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"68995","type":"Line"},{"attributes":{},"id":"68975","type":"SaveTool"},{"attributes":{},"id":"69002","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"68961"}],"center":[{"id":"68964"},{"id":"68968"}],"left":[{"id":"68965"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"68991"},{"id":"68996"}],"title":{"id":"68998"},"toolbar":{"id":"68979"},"toolbar_location":"above","x_range":{"id":"68953"},"x_scale":{"id":"68957"},"y_range":{"id":"68955"},"y_scale":{"id":"68959"}},"id":"68952","subtype":"Figure","type":"Plot"},{"attributes":{"line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"68994","type":"Line"},{"attributes":{},"id":"69006","type":"UnionRenderers"},{"attributes":{},"id":"69007","type":"Selection"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[400]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[400]}},"selected":{"id":"69005"},"selection_policy":{"id":"69004"}},"id":"68988","type":"ColumnDataSource"},{"attributes":{"source":{"id":"68988"}},"id":"68992","type":"CDSView"},{"attributes":{"fill_alpha":0.1,"fill_color":"#ff0000","line_alpha":0.1,"line_color":"#ff0000","x":{"field":"x"},"y":{"field":"y"}},"id":"68990","type":"Patch"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"68977","type":"BoxAnnotation"}],"root_ids":["68952"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"6a6a7a80-93be-4d7a-a9a6-bd4c91131f95","root_ids":["68952"],"roots":{"68952":"2a137c36-346a-4d83-8c7d-de73243eafe7"}}];
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