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
    
      
      
    
      var element = document.getElementById("b81f242a-c223-4151-b2ce-3e9cc188b151");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b81f242a-c223-4151-b2ce-3e9cc188b151' but no matching script tag was found.")
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
                    
                  var docs_json = '{"242c4bcd-938a-4d6b-b2ef-e1186b64ac78":{"roots":{"references":[{"attributes":{"callback":null},"id":"85504","type":"HoverTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"85505","type":"BoxAnnotation"},{"attributes":{},"id":"85583","type":"BasicTickFormatter"},{"attributes":{},"id":"85517","type":"DataRange1d"},{"attributes":{},"id":"85600","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"85533"},{"id":"85534"},{"id":"85535"},{"id":"85536"},{"id":"85537"},{"id":"85538"},{"id":"85539"},{"id":"85540"}]},"id":"85543","type":"Toolbar"},{"attributes":{},"id":"85599","type":"UnionRenderers"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"85588"},"selection_policy":{"id":"85587"}},"id":"85561","type":"ColumnDataSource"},{"attributes":{},"id":"85585","type":"UnionRenderers"},{"attributes":{"source":{"id":"85561"}},"id":"85563","type":"CDSView"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"85506","type":"PolyAnnotation"},{"attributes":{},"id":"85586","type":"Selection"},{"attributes":{"source":{"id":"85552"}},"id":"85556","type":"CDSView"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"85560","type":"Dash"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238711},"id":"85557","type":"Span"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"85581"},"ticker":{"id":"85494"}},"id":"85493","type":"LinearAxis"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.17824444314769777},"id":"85558","type":"Span"},{"attributes":{"data_source":{"id":"85561"},"glyph":{"id":"85560"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"85563"}},"id":"85562","type":"GlyphRenderer"},{"attributes":{"text":"tau"},"id":"85564","type":"Title"},{"attributes":{},"id":"85587","type":"UnionRenderers"},{"attributes":{"toolbars":[{"id":"85507"},{"id":"85543"}],"tools":[{"id":"85497"},{"id":"85498"},{"id":"85499"},{"id":"85500"},{"id":"85501"},{"id":"85502"},{"id":"85503"},{"id":"85504"},{"id":"85533"},{"id":"85534"},{"id":"85535"},{"id":"85536"},{"id":"85537"},{"id":"85538"},{"id":"85539"},{"id":"85540"}]},"id":"85605","type":"ProxyToolbar"},{"attributes":{},"id":"85588","type":"Selection"},{"attributes":{},"id":"85490","type":"BasicTicker"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"85559","type":"Span"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"85600"},"selection_policy":{"id":"85599"}},"id":"85575","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"85489"}],"center":[{"id":"85492"},{"id":"85496"}],"left":[{"id":"85493"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"85555"},{"id":"85557"},{"id":"85558"},{"id":"85559"},{"id":"85562"}],"title":{"id":"85564"},"toolbar":{"id":"85507"},"toolbar_location":null,"x_range":{"id":"85481"},"x_scale":{"id":"85485"},"y_range":{"id":"85483"},"y_scale":{"id":"85487"}},"id":"85480","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"85568","type":"Circle"},{"attributes":{"axis":{"id":"85493"},"dimension":1,"ticker":null},"id":"85496","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"85567","type":"Circle"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"bcJe+Pxh3D88Eu5SUq3NPyL+eQAns8s/mzeOVbYJ1z+YvNPsmzTWP87j+UyletE/sIr1s8Bnzz8YN/msnr7PP8gPs0h4ec8/RNGUEkZ90z8g12riYrDUP+AlTxYjYc4/UBTOvdhAzD+AFwpyJ0DOPxDSzcUXbc4/kDNyJsikyj9AY0p3Si3PP8AWdsF70MQ/4I8dAXxLyD+grhW5nZrSPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"85598"},"selection_policy":{"id":"85597"}},"id":"85566","type":"ColumnDataSource"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD/upazjteTNP/DqXfy8Lcs/HHCIRHVOzT9orzckCyTOP6y8CkfbP8w/iNx/9NF5yz+IfM+LFJ/NPygi8KloJ8w/oK0q3zNVzD/YcLH58jHPP6hWLqhoMNQ/IGaMl5nu0j8AebTCVJLRP+D0hUiIM80/uNpKBpu90z/A00Fq0J3TP2iCFjW8ldY/kLBgWUSo1j8QCPgZgPnXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"85586"},"selection_policy":{"id":"85585"}},"id":"85552","type":"ColumnDataSource"},{"attributes":{"source":{"id":"85575"}},"id":"85577","type":"CDSView"},{"attributes":{"children":[[{"id":"85480"},0,0],[{"id":"85516"},0,1]]},"id":"85604","type":"GridBox"},{"attributes":{"overlay":{"id":"85506"}},"id":"85501","type":"LassoSelectTool"},{"attributes":{"data_source":{"id":"85566"},"glyph":{"id":"85567"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"85568"},"selection_glyph":null,"view":{"id":"85570"}},"id":"85569","type":"GlyphRenderer"},{"attributes":{"source":{"id":"85566"}},"id":"85570","type":"CDSView"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"85574","type":"Dash"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.21484300137312468},"id":"85571","type":"Span"},{"attributes":{"data_source":{"id":"85552"},"glyph":{"id":"85553"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"85554"},"selection_glyph":null,"view":{"id":"85556"}},"id":"85555","type":"GlyphRenderer"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"85583"},"ticker":{"id":"85490"}},"id":"85489","type":"LinearAxis"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.15209716425007633},"id":"85572","type":"Span"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"85595"},"ticker":{"id":"85526"}},"id":"85525","type":"LinearAxis"},{"attributes":{"below":[{"id":"85525"}],"center":[{"id":"85528"},{"id":"85532"}],"left":[{"id":"85529"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"85569"},{"id":"85571"},{"id":"85572"},{"id":"85573"},{"id":"85576"}],"title":{"id":"85578"},"toolbar":{"id":"85543"},"toolbar_location":null,"x_range":{"id":"85517"},"x_scale":{"id":"85521"},"y_range":{"id":"85519"},"y_scale":{"id":"85523"}},"id":"85516","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"85575"},"glyph":{"id":"85574"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"85577"}},"id":"85576","type":"GlyphRenderer"},{"attributes":{"end":1,"start":-0.05},"id":"85519","type":"DataRange1d"},{"attributes":{"text":"mu"},"id":"85578","type":"Title"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"85593"},"ticker":{"id":"85530"}},"id":"85529","type":"LinearAxis"},{"attributes":{},"id":"85598","type":"Selection"},{"attributes":{},"id":"85521","type":"LinearScale"},{"attributes":{},"id":"85597","type":"UnionRenderers"},{"attributes":{},"id":"85481","type":"DataRange1d"},{"attributes":{},"id":"85523","type":"LinearScale"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"85573","type":"Span"},{"attributes":{"axis":{"id":"85489"},"ticker":null},"id":"85492","type":"Grid"},{"attributes":{},"id":"85526","type":"BasicTicker"},{"attributes":{"axis":{"id":"85525"},"ticker":null},"id":"85528","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"85554","type":"Circle"},{"attributes":{"toolbar":{"id":"85605"},"toolbar_location":"above"},"id":"85606","type":"ToolbarBox"},{"attributes":{},"id":"85502","type":"UndoTool"},{"attributes":{"axis":{"id":"85529"},"dimension":1,"ticker":null},"id":"85532","type":"Grid"},{"attributes":{},"id":"85530","type":"BasicTicker"},{"attributes":{"overlay":{"id":"85541"}},"id":"85535","type":"BoxZoomTool"},{"attributes":{},"id":"85595","type":"BasicTickFormatter"},{"attributes":{},"id":"85534","type":"PanTool"},{"attributes":{},"id":"85533","type":"ResetTool"},{"attributes":{},"id":"85536","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"85542"}},"id":"85537","type":"LassoSelectTool"},{"attributes":{},"id":"85538","type":"UndoTool"},{"attributes":{},"id":"85485","type":"LinearScale"},{"attributes":{},"id":"85487","type":"LinearScale"},{"attributes":{"overlay":{"id":"85505"}},"id":"85499","type":"BoxZoomTool"},{"attributes":{},"id":"85498","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"85541","type":"BoxAnnotation"},{"attributes":{},"id":"85497","type":"ResetTool"},{"attributes":{},"id":"85503","type":"SaveTool"},{"attributes":{},"id":"85500","type":"WheelZoomTool"},{"attributes":{},"id":"85494","type":"BasicTicker"},{"attributes":{"end":1,"start":-0.05},"id":"85483","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"85497"},{"id":"85498"},{"id":"85499"},{"id":"85500"},{"id":"85501"},{"id":"85502"},{"id":"85503"},{"id":"85504"}]},"id":"85507","type":"Toolbar"},{"attributes":{},"id":"85593","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"85606"},{"id":"85604"}]},"id":"85607","type":"Column"},{"attributes":{},"id":"85581","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"85542","type":"PolyAnnotation"},{"attributes":{},"id":"85539","type":"SaveTool"},{"attributes":{"callback":null},"id":"85540","type":"HoverTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"85553","type":"Circle"}],"root_ids":["85607"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"242c4bcd-938a-4d6b-b2ef-e1186b64ac78","root_ids":["85607"],"roots":{"85607":"b81f242a-c223-4151-b2ce-3e9cc188b151"}}];
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