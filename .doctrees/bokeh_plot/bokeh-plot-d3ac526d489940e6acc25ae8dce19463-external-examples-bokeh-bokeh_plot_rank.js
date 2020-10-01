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
    
      
      
    
      var element = document.getElementById("c979cbbb-f8c9-401b-bdbc-dc099fe24c70");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c979cbbb-f8c9-401b-bdbc-dc099fe24c70' but no matching script tag was found.")
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
                    
                  var docs_json = '{"5b166a77-6816-4e5e-a05e-f7beb810c4f5":{"roots":{"references":[{"attributes":{},"id":"90473","type":"Selection"},{"attributes":{},"id":"90463","type":"UnionRenderers"},{"attributes":{},"id":"90464","type":"Selection"},{"attributes":{},"id":"90472","type":"UnionRenderers"},{"attributes":{"axis":{"id":"90340"},"dimension":1,"ticker":null},"id":"90343","type":"Grid"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"90353","type":"PolyAnnotation"},{"attributes":{},"id":"90474","type":"UnionRenderers"},{"attributes":{},"id":"90368","type":"LinearScale"},{"attributes":{},"id":"90475","type":"Selection"},{"attributes":{},"id":"90337","type":"BasicTicker"},{"attributes":{"overlay":{"id":"90353"}},"id":"90348","type":"LassoSelectTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"90344"},{"id":"90345"},{"id":"90346"},{"id":"90347"},{"id":"90348"},{"id":"90349"},{"id":"90350"},{"id":"90351"}]},"id":"90354","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90399","type":"VBar"},{"attributes":{"line_dash":[6],"location":0.41666666666666663},"id":"90402","type":"Span"},{"attributes":{},"id":"90454","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"90397"}},"id":"90401","type":"CDSView"},{"attributes":{},"id":"90476","type":"UnionRenderers"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90405","type":"VBar"},{"attributes":{},"id":"90477","type":"Selection"},{"attributes":{"data_source":{"id":"90397"},"glyph":{"id":"90398"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90399"},"selection_glyph":null,"view":{"id":"90401"}},"id":"90400","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"90352","type":"BoxAnnotation"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90410","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90460"},"selection_policy":{"id":"90459"}},"id":"90403","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90404","type":"VBar"},{"attributes":{"source":{"id":"90403"}},"id":"90407","type":"CDSView"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90411","type":"VBar"},{"attributes":{},"id":"90455","type":"BasicTickFormatter"},{"attributes":{},"id":"90332","type":"LinearScale"},{"attributes":{"axis":{"id":"90370"},"ticker":null},"id":"90373","type":"Grid"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90416","type":"VBar"},{"attributes":{"callback":null},"id":"90385","type":"HoverTool"},{"attributes":{"data_source":{"id":"90403"},"glyph":{"id":"90404"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90405"},"selection_glyph":null,"view":{"id":"90407"}},"id":"90406","type":"GlyphRenderer"},{"attributes":{"axis_label":"Chain","formatter":{"id":"90469"},"ticker":{"id":"90449"}},"id":"90374","type":"LinearAxis"},{"attributes":{},"id":"90350","type":"SaveTool"},{"attributes":{"line_dash":[6],"location":1.4166666666666665},"id":"90408","type":"Span"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"90470"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"90371"}},"id":"90370","type":"LinearAxis"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90462"},"selection_policy":{"id":"90461"}},"id":"90409","type":"ColumnDataSource"},{"attributes":{},"id":"90371","type":"BasicTicker"},{"attributes":{},"id":"90478","type":"UnionRenderers"},{"attributes":{"source":{"id":"90409"}},"id":"90413","type":"CDSView"},{"attributes":{},"id":"90479","type":"Selection"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90417","type":"VBar"},{"attributes":{"line_dash":[6],"location":0.48076923076923067},"id":"90430","type":"Span"},{"attributes":{"data_source":{"id":"90409"},"glyph":{"id":"90410"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90411"},"selection_glyph":null,"view":{"id":"90413"}},"id":"90412","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"90374"},"dimension":1,"ticker":null},"id":"90377","type":"Grid"},{"attributes":{"line_dash":[6],"location":2.4166666666666665},"id":"90414","type":"Span"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90458"},"selection_policy":{"id":"90457"}},"id":"90397","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"90386"}},"id":"90380","type":"BoxZoomTool"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90464"},"selection_policy":{"id":"90463"}},"id":"90415","type":"ColumnDataSource"},{"attributes":{},"id":"90379","type":"PanTool"},{"attributes":{"source":{"id":"90415"}},"id":"90419","type":"CDSView"},{"attributes":{},"id":"90378","type":"ResetTool"},{"attributes":{},"id":"90457","type":"UnionRenderers"},{"attributes":{},"id":"90384","type":"SaveTool"},{"attributes":{},"id":"90458","type":"Selection"},{"attributes":{},"id":"90381","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"90415"},"glyph":{"id":"90416"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90417"},"selection_glyph":null,"view":{"id":"90419"}},"id":"90418","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"90387"}},"id":"90382","type":"LassoSelectTool"},{"attributes":{},"id":"90349","type":"UndoTool"},{"attributes":{},"id":"90383","type":"UndoTool"},{"attributes":{"line_dash":[6],"location":3.4166666666666665},"id":"90420","type":"Span"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"90378"},{"id":"90379"},{"id":"90380"},{"id":"90381"},{"id":"90382"},{"id":"90383"},{"id":"90384"},{"id":"90385"}]},"id":"90388","type":"Toolbar"},{"attributes":{"source":{"id":"90425"}},"id":"90429","type":"CDSView"},{"attributes":{"children":[[{"id":"90327"},0,0],[{"id":"90363"},0,1]]},"id":"90483","type":"GridBox"},{"attributes":{"toolbars":[{"id":"90354"},{"id":"90388"}],"tools":[{"id":"90344"},{"id":"90345"},{"id":"90346"},{"id":"90347"},{"id":"90348"},{"id":"90349"},{"id":"90350"},{"id":"90351"},{"id":"90378"},{"id":"90379"},{"id":"90380"},{"id":"90381"},{"id":"90382"},{"id":"90383"},{"id":"90384"},{"id":"90385"}]},"id":"90484","type":"ProxyToolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90427","type":"VBar"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90426","type":"VBar"},{"attributes":{"axis":{"id":"90336"},"ticker":null},"id":"90339","type":"Grid"},{"attributes":{"line_dash":[6],"location":3.480769230769231},"id":"90448","type":"Span"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90398","type":"VBar"},{"attributes":{"axis_label":"Chain","formatter":{"id":"90454"},"ticker":{"id":"90421"}},"id":"90340","type":"LinearAxis"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90473"},"selection_policy":{"id":"90472"}},"id":"90425","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90433","type":"VBar"},{"attributes":{"data_source":{"id":"90425"},"glyph":{"id":"90426"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90427"},"selection_glyph":null,"view":{"id":"90429"}},"id":"90428","type":"GlyphRenderer"},{"attributes":{"ticks":[0,1,2,3]},"id":"90421","type":"FixedTicker"},{"attributes":{},"id":"90459","type":"UnionRenderers"},{"attributes":{"below":[{"id":"90336"}],"center":[{"id":"90339"},{"id":"90343"},{"id":"90402"},{"id":"90408"},{"id":"90414"},{"id":"90420"}],"left":[{"id":"90340"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"90400"},{"id":"90406"},{"id":"90412"},{"id":"90418"}],"title":{"id":"90423"},"toolbar":{"id":"90354"},"toolbar_location":null,"x_range":{"id":"90328"},"x_scale":{"id":"90332"},"y_range":{"id":"90330"},"y_scale":{"id":"90334"}},"id":"90327","subtype":"Figure","type":"Plot"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90438","type":"VBar"},{"attributes":{},"id":"90460","type":"Selection"},{"attributes":{"below":[{"id":"90370"}],"center":[{"id":"90373"},{"id":"90377"},{"id":"90430"},{"id":"90436"},{"id":"90442"},{"id":"90448"}],"left":[{"id":"90374"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"90428"},{"id":"90434"},{"id":"90440"},{"id":"90446"}],"title":{"id":"90451"},"toolbar":{"id":"90388"},"toolbar_location":null,"x_range":{"id":"90328"},"x_scale":{"id":"90366"},"y_range":{"id":"90330"},"y_scale":{"id":"90368"}},"id":"90363","subtype":"Figure","type":"Plot"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90475"},"selection_policy":{"id":"90474"}},"id":"90431","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"90351","type":"HoverTool"},{"attributes":{},"id":"90334","type":"LinearScale"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90432","type":"VBar"},{"attributes":{},"id":"90366","type":"LinearScale"},{"attributes":{"source":{"id":"90443"}},"id":"90447","type":"CDSView"},{"attributes":{"ticks":[0,1,2,3]},"id":"90449","type":"FixedTicker"},{"attributes":{"text":"mu"},"id":"90451","type":"Title"},{"attributes":{"source":{"id":"90431"}},"id":"90435","type":"CDSView"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"90455"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"90337"}},"id":"90336","type":"LinearAxis"},{"attributes":{"data_source":{"id":"90443"},"glyph":{"id":"90444"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90445"},"selection_glyph":null,"view":{"id":"90447"}},"id":"90446","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90439","type":"VBar"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90444","type":"VBar"},{"attributes":{},"id":"90469","type":"BasicTickFormatter"},{"attributes":{"toolbar":{"id":"90484"},"toolbar_location":"above"},"id":"90485","type":"ToolbarBox"},{"attributes":{"data_source":{"id":"90431"},"glyph":{"id":"90432"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90433"},"selection_glyph":null,"view":{"id":"90435"}},"id":"90434","type":"GlyphRenderer"},{"attributes":{},"id":"90470","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"90485"},{"id":"90483"}]},"id":"90486","type":"Column"},{"attributes":{},"id":"90345","type":"PanTool"},{"attributes":{"line_dash":[6],"location":1.4807692307692308},"id":"90436","type":"Span"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"90386","type":"BoxAnnotation"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90477"},"selection_policy":{"id":"90476"}},"id":"90437","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"90352"}},"id":"90346","type":"BoxZoomTool"},{"attributes":{"source":{"id":"90437"}},"id":"90441","type":"CDSView"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90445","type":"VBar"},{"attributes":{},"id":"90461","type":"UnionRenderers"},{"attributes":{},"id":"90347","type":"WheelZoomTool"},{"attributes":{},"id":"90462","type":"Selection"},{"attributes":{},"id":"90344","type":"ResetTool"},{"attributes":{},"id":"90328","type":"DataRange1d"},{"attributes":{"data_source":{"id":"90437"},"glyph":{"id":"90438"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90439"},"selection_glyph":null,"view":{"id":"90441"}},"id":"90440","type":"GlyphRenderer"},{"attributes":{"line_dash":[6],"location":2.480769230769231},"id":"90442","type":"Span"},{"attributes":{},"id":"90330","type":"DataRange1d"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90479"},"selection_policy":{"id":"90478"}},"id":"90443","type":"ColumnDataSource"},{"attributes":{"text":"tau"},"id":"90423","type":"Title"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"90387","type":"PolyAnnotation"}],"root_ids":["90486"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"5b166a77-6816-4e5e-a05e-f7beb810c4f5","root_ids":["90486"],"roots":{"90486":"c979cbbb-f8c9-401b-bdbc-dc099fe24c70"}}];
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