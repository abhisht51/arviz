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
    
      
      
    
      var element = document.getElementById("a190a57f-2b2b-43b5-8dd8-a5ed8d6be833");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a190a57f-2b2b-43b5-8dd8-a5ed8d6be833' but no matching script tag was found.")
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
                    
                  var docs_json = '{"a12ddaf0-e334-4b28-9b1e-6b28fa41dd3e":{"roots":{"references":[{"attributes":{},"id":"68372","type":"Selection"},{"attributes":{},"id":"68328","type":"BasicTickFormatter"},{"attributes":{},"id":"68371","type":"UnionRenderers"},{"attributes":{},"id":"68342","type":"Selection"},{"attributes":{},"id":"68331","type":"UnionRenderers"},{"attributes":{},"id":"68354","type":"Selection"},{"attributes":{},"id":"68341","type":"UnionRenderers"},{"attributes":{},"id":"68343","type":"UnionRenderers"},{"attributes":{},"id":"68359","type":"UnionRenderers"},{"attributes":{},"id":"68344","type":"Selection"},{"attributes":{},"id":"68360","type":"Selection"},{"attributes":{},"id":"68329","type":"BasicTickFormatter"},{"attributes":{},"id":"68339","type":"UnionRenderers"},{"attributes":{},"id":"68340","type":"Selection"},{"attributes":{"data":{"x":[-1.9958943490877263,9.311550558002505],"y":[1.65,1.65]},"selected":{"id":"68356"},"selection_policy":{"id":"68355"}},"id":"68261","type":"ColumnDataSource"},{"attributes":{},"id":"68345","type":"UnionRenderers"},{"attributes":{},"id":"68352","type":"Selection"},{"attributes":{},"id":"68370","type":"Selection"},{"attributes":{},"id":"68378","type":"Selection"},{"attributes":{},"id":"68369","type":"UnionRenderers"},{"attributes":{},"id":"68377","type":"UnionRenderers"},{"attributes":{},"id":"68346","type":"Selection"},{"attributes":{},"id":"68332","type":"Selection"},{"attributes":{},"id":"68351","type":"UnionRenderers"},{"attributes":{},"id":"68353","type":"UnionRenderers"},{"attributes":{},"id":"68357","type":"UnionRenderers"},{"attributes":{},"id":"68364","type":"Selection"},{"attributes":{},"id":"68333","type":"UnionRenderers"},{"attributes":{},"id":"68376","type":"Selection"},{"attributes":{},"id":"68334","type":"Selection"},{"attributes":{},"id":"68355","type":"UnionRenderers"},{"attributes":{},"id":"68375","type":"UnionRenderers"},{"attributes":{},"id":"68361","type":"UnionRenderers"},{"attributes":{},"id":"68362","type":"Selection"},{"attributes":{},"id":"68347","type":"UnionRenderers"},{"attributes":{"below":[{"id":"68174"}],"center":[{"id":"68177"},{"id":"68181"}],"left":[{"id":"68178"}],"outline_line_color":null,"output_backend":"webgl","plot_height":435,"plot_width":360,"renderers":[{"id":"68204"},{"id":"68209"},{"id":"68214"},{"id":"68219"},{"id":"68224"},{"id":"68229"},{"id":"68234"},{"id":"68239"},{"id":"68244"},{"id":"68249"},{"id":"68254"},{"id":"68259"},{"id":"68264"},{"id":"68269"},{"id":"68274"},{"id":"68279"},{"id":"68284"},{"id":"68289"},{"id":"68294"},{"id":"68299"},{"id":"68304"},{"id":"68309"},{"id":"68314"},{"id":"68319"}],"title":{"id":"68321"},"toolbar":{"id":"68192"},"toolbar_location":null,"x_range":{"id":"68323"},"x_scale":{"id":"68170"},"y_range":{"id":"68324"},"y_scale":{"id":"68172"}},"id":"68165","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"68335","type":"UnionRenderers"},{"attributes":{},"id":"68336","type":"Selection"},{"attributes":{},"id":"68348","type":"Selection"},{"attributes":{"bounds":"auto","end":3.4499999999999997,"min_interval":2,"start":-0.8999999999999999},"id":"68324","type":"DataRange1d"},{"attributes":{},"id":"68356","type":"Selection"},{"attributes":{},"id":"68368","type":"Selection"},{"attributes":{},"id":"68358","type":"Selection"},{"attributes":{},"id":"68367","type":"UnionRenderers"},{"attributes":{"data":{"x":[-2.13476994033137,10.008689721107494],"y":[0.3,0.3]},"selected":{"id":"68338"},"selection_policy":{"id":"68337"}},"id":"68216","type":"ColumnDataSource"},{"attributes":{},"id":"68365","type":"UnionRenderers"},{"attributes":{},"id":"68366","type":"Selection"},{"attributes":{},"id":"68374","type":"Selection"},{"attributes":{},"id":"68373","type":"UnionRenderers"},{"attributes":{"data":{"x":[2.393576367885318,6.880909766712211],"y":[1.95,1.95]},"selected":{"id":"68364"},"selection_policy":{"id":"68363"}},"id":"68281","type":"ColumnDataSource"},{"attributes":{},"id":"68350","type":"Selection"},{"attributes":{},"id":"68337","type":"UnionRenderers"},{"attributes":{},"id":"68349","type":"UnionRenderers"},{"attributes":{},"id":"68363","type":"UnionRenderers"},{"attributes":{},"id":"68338","type":"Selection"},{"attributes":{"source":{"id":"68281"}},"id":"68285","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68233","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"68318","type":"Circle"},{"attributes":{"overlay":{"id":"68190"}},"id":"68184","type":"BoxZoomTool"},{"attributes":{"source":{"id":"68231"}},"id":"68235","type":"CDSView"},{"attributes":{"source":{"id":"68261"}},"id":"68265","type":"CDSView"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68247","type":"Line"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"68317","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68298","type":"Line"},{"attributes":{"data_source":{"id":"68236"},"glyph":{"id":"68237"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68238"},"selection_glyph":null,"view":{"id":"68240"}},"id":"68239","type":"GlyphRenderer"},{"attributes":{"source":{"id":"68241"}},"id":"68245","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68283","type":"Line"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"68242","type":"Circle"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68297","type":"Line"},{"attributes":{"ticks":[0.44999999999999996,2.0999999999999996]},"id":"68325","type":"FixedTicker"},{"attributes":{"data_source":{"id":"68241"},"glyph":{"id":"68242"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68243"},"selection_glyph":null,"view":{"id":"68245"}},"id":"68244","type":"GlyphRenderer"},{"attributes":{"source":{"id":"68291"}},"id":"68295","type":"CDSView"},{"attributes":{"source":{"id":"68226"}},"id":"68230","type":"CDSView"},{"attributes":{"data":{},"selected":{"id":"68372"},"selection_policy":{"id":"68371"}},"id":"68301","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68263","type":"Line"},{"attributes":{"toolbar":{"id":"68383"},"toolbar_location":"above"},"id":"68384","type":"ToolbarBox"},{"attributes":{"data":{},"selected":{"id":"68378"},"selection_policy":{"id":"68377"}},"id":"68316","type":"ColumnDataSource"},{"attributes":{},"id":"68188","type":"SaveTool"},{"attributes":{"data_source":{"id":"68226"},"glyph":{"id":"68227"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68228"},"selection_glyph":null,"view":{"id":"68230"}},"id":"68229","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"68328"},"major_label_overrides":{"0.44999999999999996":"Non Centered: mu","2.0999999999999996":"Centered: mu"},"ticker":{"id":"68325"}},"id":"68178","type":"LinearAxis"},{"attributes":{"data":{},"selected":{"id":"68342"},"selection_policy":{"id":"68341"}},"id":"68226","type":"ColumnDataSource"},{"attributes":{},"id":"68170","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68248","type":"Line"},{"attributes":{"data":{"x":[1.9790083397469873,5.455951625836456],"y":[2.55,2.55]},"selected":{"id":"68376"},"selection_policy":{"id":"68375"}},"id":"68311","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"68182"},{"id":"68183"},{"id":"68184"},{"id":"68185"},{"id":"68186"},{"id":"68187"},{"id":"68188"},{"id":"68189"}]},"id":"68192","type":"Toolbar"},{"attributes":{"data":{"x":[-2.2641273152868076,10.475301593619335],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"68350"},"selection_policy":{"id":"68349"}},"id":"68246","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"68273","type":"Circle"},{"attributes":{"data":{"x":[-2.061896746944455,11.515205993744095],"y":[2.25,2.25]},"selected":{"id":"68368"},"selection_policy":{"id":"68367"}},"id":"68291","type":"ColumnDataSource"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68232","type":"Line"},{"attributes":{"source":{"id":"68306"}},"id":"68310","type":"CDSView"},{"attributes":{"text":"94.0% HDI"},"id":"68321","type":"Title"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68253","type":"Line"},{"attributes":{"formatter":{"id":"68329"},"ticker":{"id":"68175"}},"id":"68174","type":"LinearAxis"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68237","type":"Line"},{"attributes":{"data":{},"selected":{"id":"68354"},"selection_policy":{"id":"68353"}},"id":"68256","type":"ColumnDataSource"},{"attributes":{"data":{"x":[2.2808674873161356,6.6262125124574265],"y":[0.3,0.3]},"selected":{"id":"68340"},"selection_policy":{"id":"68339"}},"id":"68221","type":"ColumnDataSource"},{"attributes":{"data":{"x":[-2.358040118461496,10.910290467635015],"y":[1.95,1.95]},"selected":{"id":"68362"},"selection_policy":{"id":"68361"}},"id":"68276","type":"ColumnDataSource"},{"attributes":{"source":{"id":"68221"}},"id":"68225","type":"CDSView"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68262","type":"Line"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68267","type":"Line"},{"attributes":{"source":{"id":"68201"}},"id":"68205","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"68243","type":"Circle"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"68227","type":"Circle"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68277","type":"Line"},{"attributes":{},"id":"68185","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"68257","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"68228","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68268","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68218","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68293","type":"Line"},{"attributes":{"source":{"id":"68216"}},"id":"68220","type":"CDSView"},{"attributes":{"source":{"id":"68236"}},"id":"68240","type":"CDSView"},{"attributes":{"data":{"x":[0.9649316231388204,5.949680273009057],"y":[1.65,1.65]},"selected":{"id":"68358"},"selection_policy":{"id":"68357"}},"id":"68266","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"68246"},"glyph":{"id":"68247"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68248"},"selection_glyph":null,"view":{"id":"68250"}},"id":"68249","type":"GlyphRenderer"},{"attributes":{"data":{"x":[-0.7842313478998125,9.985046696913068],"y":[2.55,2.55]},"selected":{"id":"68374"},"selection_policy":{"id":"68373"}},"id":"68306","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"68231"},"glyph":{"id":"68232"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68233"},"selection_glyph":null,"view":{"id":"68235"}},"id":"68234","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68313","type":"Line"},{"attributes":{"data_source":{"id":"68276"},"glyph":{"id":"68277"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68278"},"selection_glyph":null,"view":{"id":"68280"}},"id":"68279","type":"GlyphRenderer"},{"attributes":{"data":{"x":[-1.4753067334040253,11.208804111875878],"y":[0.6,0.6]},"selected":{"id":"68344"},"selection_policy":{"id":"68343"}},"id":"68231","type":"ColumnDataSource"},{"attributes":{"source":{"id":"68256"}},"id":"68260","type":"CDSView"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68202","type":"Line"},{"attributes":{"axis":{"id":"68174"},"ticker":null},"id":"68177","type":"Grid"},{"attributes":{"data_source":{"id":"68216"},"glyph":{"id":"68217"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68218"},"selection_glyph":null,"view":{"id":"68220"}},"id":"68219","type":"GlyphRenderer"},{"attributes":{"source":{"id":"68211"}},"id":"68215","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68238","type":"Line"},{"attributes":{"data_source":{"id":"68281"},"glyph":{"id":"68282"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68283"},"selection_glyph":null,"view":{"id":"68285"}},"id":"68284","type":"GlyphRenderer"},{"attributes":{"data":{"x":[2.2921199846409115,6.479187946875487],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"68352"},"selection_policy":{"id":"68351"}},"id":"68251","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"68201"},"glyph":{"id":"68202"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68203"},"selection_glyph":null,"view":{"id":"68205"}},"id":"68204","type":"GlyphRenderer"},{"attributes":{"data":{"x":[2.1521098502407368,6.9643589964055215],"y":[0.6,0.6]},"selected":{"id":"68346"},"selection_policy":{"id":"68345"}},"id":"68236","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68278","type":"Line"},{"attributes":{},"id":"68183","type":"PanTool"},{"attributes":{"data_source":{"id":"68266"},"glyph":{"id":"68267"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68268"},"selection_glyph":null,"view":{"id":"68270"}},"id":"68269","type":"GlyphRenderer"},{"attributes":{"source":{"id":"68246"}},"id":"68250","type":"CDSView"},{"attributes":{"data_source":{"id":"68311"},"glyph":{"id":"68312"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68313"},"selection_glyph":null,"view":{"id":"68315"}},"id":"68314","type":"GlyphRenderer"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68282","type":"Line"},{"attributes":{"data_source":{"id":"68316"},"glyph":{"id":"68317"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68318"},"selection_glyph":null,"view":{"id":"68320"}},"id":"68319","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68203","type":"Line"},{"attributes":{},"id":"68187","type":"UndoTool"},{"attributes":{"source":{"id":"68271"}},"id":"68275","type":"CDSView"},{"attributes":{"data_source":{"id":"68286"},"glyph":{"id":"68287"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68288"},"selection_glyph":null,"view":{"id":"68290"}},"id":"68289","type":"GlyphRenderer"},{"attributes":{"toolbars":[{"id":"68192"}],"tools":[{"id":"68182"},{"id":"68183"},{"id":"68184"},{"id":"68185"},{"id":"68186"},{"id":"68187"},{"id":"68188"},{"id":"68189"}]},"id":"68383","type":"ProxyToolbar"},{"attributes":{"overlay":{"id":"68191"}},"id":"68186","type":"LassoSelectTool"},{"attributes":{"data_source":{"id":"68271"},"glyph":{"id":"68272"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68273"},"selection_glyph":null,"view":{"id":"68275"}},"id":"68274","type":"GlyphRenderer"},{"attributes":{"data":{},"selected":{"id":"68336"},"selection_policy":{"id":"68335"}},"id":"68211","type":"ColumnDataSource"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68217","type":"Line"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68292","type":"Line"},{"attributes":{"source":{"id":"68301"}},"id":"68305","type":"CDSView"},{"attributes":{"data_source":{"id":"68211"},"glyph":{"id":"68212"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68213"},"selection_glyph":null,"view":{"id":"68215"}},"id":"68214","type":"GlyphRenderer"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68222","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68308","type":"Line"},{"attributes":{"data":{"x":[-1.0798320889339172,10.200853218312133],"y":[0,0]},"selected":{"id":"68332"},"selection_policy":{"id":"68331"}},"id":"68201","type":"ColumnDataSource"},{"attributes":{"source":{"id":"68276"}},"id":"68280","type":"CDSView"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68252","type":"Line"},{"attributes":{"data":{},"selected":{"id":"68360"},"selection_policy":{"id":"68359"}},"id":"68271","type":"ColumnDataSource"},{"attributes":{"source":{"id":"68266"}},"id":"68270","type":"CDSView"},{"attributes":{"data_source":{"id":"68306"},"glyph":{"id":"68307"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68308"},"selection_glyph":null,"view":{"id":"68310"}},"id":"68309","type":"GlyphRenderer"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"68191","type":"PolyAnnotation"},{"attributes":{"data":{},"selected":{"id":"68348"},"selection_policy":{"id":"68347"}},"id":"68241","type":"ColumnDataSource"},{"attributes":{"source":{"id":"68206"}},"id":"68210","type":"CDSView"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"68272","type":"Circle"},{"attributes":{"source":{"id":"68316"}},"id":"68320","type":"CDSView"},{"attributes":{"source":{"id":"68296"}},"id":"68300","type":"CDSView"},{"attributes":{"data_source":{"id":"68301"},"glyph":{"id":"68302"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68303"},"selection_glyph":null,"view":{"id":"68305"}},"id":"68304","type":"GlyphRenderer"},{"attributes":{"bounds":"auto","min_interval":1},"id":"68323","type":"DataRange1d"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68207","type":"Line"},{"attributes":{"data_source":{"id":"68221"},"glyph":{"id":"68222"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68223"},"selection_glyph":null,"view":{"id":"68225"}},"id":"68224","type":"GlyphRenderer"},{"attributes":{},"id":"68175","type":"BasicTicker"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68312","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68223","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"68258","type":"Circle"},{"attributes":{"data_source":{"id":"68291"},"glyph":{"id":"68292"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68293"},"selection_glyph":null,"view":{"id":"68295"}},"id":"68294","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"68261"},"glyph":{"id":"68262"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68263"},"selection_glyph":null,"view":{"id":"68265"}},"id":"68264","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"68303","type":"Circle"},{"attributes":{"data_source":{"id":"68251"},"glyph":{"id":"68252"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68253"},"selection_glyph":null,"view":{"id":"68255"}},"id":"68254","type":"GlyphRenderer"},{"attributes":{"source":{"id":"68311"}},"id":"68315","type":"CDSView"},{"attributes":{},"id":"68182","type":"ResetTool"},{"attributes":{"data":{"x":[1.9127415870254314,7.0411499662839026],"y":[2.25,2.25]},"selected":{"id":"68370"},"selection_policy":{"id":"68369"}},"id":"68296","type":"ColumnDataSource"},{"attributes":{"data":{"x":[2.454317217804662,6.859709821773684],"y":[0,0]},"selected":{"id":"68334"},"selection_policy":{"id":"68333"}},"id":"68206","type":"ColumnDataSource"},{"attributes":{"source":{"id":"68251"}},"id":"68255","type":"CDSView"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"68302","type":"Circle"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68307","type":"Line"},{"attributes":{"callback":null},"id":"68189","type":"HoverTool"},{"attributes":{"children":[{"id":"68384"},{"id":"68382"}]},"id":"68385","type":"Column"},{"attributes":{"data_source":{"id":"68296"},"glyph":{"id":"68297"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68298"},"selection_glyph":null,"view":{"id":"68300"}},"id":"68299","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"68212","type":"Circle"},{"attributes":{"source":{"id":"68286"}},"id":"68290","type":"CDSView"},{"attributes":{"data":{},"selected":{"id":"68366"},"selection_policy":{"id":"68365"}},"id":"68286","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"68256"},"glyph":{"id":"68257"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68258"},"selection_glyph":null,"view":{"id":"68260"}},"id":"68259","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68208","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"68288","type":"Circle"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"68287","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"68213","type":"Circle"},{"attributes":{"axis":{"id":"68178"},"dimension":1,"grid_line_color":null,"ticker":null},"id":"68181","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"68190","type":"BoxAnnotation"},{"attributes":{},"id":"68172","type":"LinearScale"},{"attributes":{"children":[[{"id":"68165"},0,0]]},"id":"68382","type":"GridBox"},{"attributes":{"data_source":{"id":"68206"},"glyph":{"id":"68207"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68208"},"selection_glyph":null,"view":{"id":"68210"}},"id":"68209","type":"GlyphRenderer"}],"root_ids":["68385"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"a12ddaf0-e334-4b28-9b1e-6b28fa41dd3e","root_ids":["68385"],"roots":{"68385":"a190a57f-2b2b-43b5-8dd8-a5ed8d6be833"}}];
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