<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Tangram & Magic online Demos</title>
        <link rel="stylesheet" type="text/css" href="./assets/css/app.css" />
        <link rel="stylesheet" type="text/css" href="./assets/css/codemirror.css" />
        <script type="text/javascript" src="./assets/lib/sea.js"></script>
        <script type="text/javascript" src="http://fe.bdimg.com/tangram/2.0.1.2.js"></script>
    </head>
    <body>
        <div class="hd">
            <div class="logo">Tangram & Magic Demos</div>
            <div class="toolbar">
                <ul class="actions">
                    <li><a title="Run (Control + Return)" id="J_run"  class="action-item action-run"><span>Run</span></a></li>
                    <li><a title="Reset all fields" id="J_reset"  class="action-item action-reset"><span>Reset</span></a></li>
                    <li><a title="Re-indent messy code" id="J_tidyup"  class="action-item action-tidyup"><span>TidyUp</span></a></li>
                    <li><a title="Run jsLint on the code" id="J_jslint"  class="action-item action-jslint"><span>JSLint</span></a></li>
                </ul>
            </div>
        </div>
        <div class="content">
            <div class="col-sub">
                <!-- Choose Framework -->
                <h3 class="toggler active">Choose Framework</h3>
                <div class="sidebar-item">
                    <select id="J_tangramSelect">
                        <option value="2.0.0.0">Tangram 2.0.0.0</option>
                        <option value="2.0.0.1">Tangram 2.0.0.1</option>
                        <option value="2.0.0.2">Tangram 2.0.0.2</option>
                    </select>
                    <select id="J_magicSelect">
                        <option value="1.0.0.0">Magic 1.0.0.0</option>
                        <option value="1.0.0.1">Magic 1.0.0.1</option>
                        <option value="1.0.0.2" disabled="disabled">Magic 1.0.0.2</option>
                    </select>
                </div>
                <!-- Choose Demo -->
                <h3 class="toggler">Choose Demo</h3>
                <div class="sidebar-item">
                    <select id="J_apiSelect">
                        <option value="calendar">Calendar</option>
                        <option value="dialog">Dialog</option>
                        <option value="suggestion">Suggestion</option>
                    </select>
                    <select id="J_demoSelect">
                        <option value="quickstart.html">quickStart</option>
                        <option value="timer.html">timer</option>
                        <option value="buttons.html">buttons</option>
                    </select>
                </div>
                <!-- Add Resources -->
                <h3 class="toggler">Add Resources</h3>
                <div class="sidebar-item">
                    <div id="J_externalResourcesForm">
                        <input id="J_externalResource" type="text" value="" placeholder="Javascript/CSS URL">
                        <a id="J_addExternalResource" title="Add resource"></a>
                    </div>
                    <ul class="external_resources_list" id="J_externalResourcesList"></ul>
                </div>
                <!-- Choose Language -->
                <h3 class="toggler active">Choose Language</h3>
                <div class="sidebar-item language-item">
                    <p><input type="checkbox" id="J_languageZH" /><label for="J_languageZH" title="中文语言包">zh-CN</label></p>
                    <p><input type="checkbox" id="J_languageEN" /><label for="J_languageEN" title="中文语言包">en-US</label></p>
                </div>
                <!-- Develop Options -->
                <h3 class="toggler">Develop Options</h3>
                <div class="sidebar-item develope-item">
                    <p><input type="checkbox" id="J_check" /><label for="J_check">参数检查</label></p>
                    <p><input type="checkbox" id="J_compatible" /><label for="J_compatible">兼容1.x</label></p>
                    <p><input type="checkbox" id="J_sizzle" /><label>完整版Sizzle</label></p>
                </div>
            </div>
            <div class="col-main">
                <div class="main-wrap">
                    <div id="J_demo">
                        <iframe name="demo" id="J_demoIframe" src="./demo.php" frameborder="no" scrolling="auto" ></iframe>
                    </div>
                    <div id="J_editor">
                        <ul class="tab clearfix"><li class="current" target="html">HTML</li><li target="css">CSS</li><li target="javascript">Javascript</li></ul>
                        <form method="POST" action="./demo.php" target="demo" id="J_demoForm">
                            <div class="editor-item" id="J_htmlEditor"></div>
                            <div class="editor-item" id="J_cssEditor"></div>
                            <div class="editor-item" id="J_javascriptEditor"></div>
                            <textarea id="J_externalResources" name="resource"><script type="text/javascript" src="http://fe.bdimg.com/tangram/2.0.1.2.js"></script></textarea>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <script type="text/javascript">
            (function(){
                seajs.config({
                    alias: {
                        'Tangram': '../lib/tangram_2.0.1.2.js',
                        'CodeMirror': '../lib/codemirror/codemirror.js',
                        'javascript': '../lib/codemirror/javascript.js',
                        'css': '../lib/codemirror/css.js',
                        'xml': '../lib/codemirror/xml.js'
                    },
                    base: './assets/js',
                    charset: 'utf-8'
                });

                seajs.use('App', function(app){
                    app.run();
                });
            })();
        </script>
    </body>
</html>