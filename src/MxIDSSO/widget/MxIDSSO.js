/*
    MxIDSSO
    ========================

    @file      : MxIDSSO.js
    @version   : 1.0
    @author    : Mendix
    @date      : Mon, 06 Apr 2015 14:24:43 GMT
    @copyright : 
    @license   : 

    Documentation
    ========================
    This widget will log the user in under his or her MxID
*/

// Required module list. Remove unnecessary modules, you can always get them back from the boilerplate.
require({}, [
    'dojo/_base/declare', 'mxui/widget/_WidgetBase', 'dijit/_TemplatedMixin',
    'mxui/dom', 'dojo/dom', 'dojo/query', 'dojo/dom-prop', 'dojo/dom-geometry', 'dojo/dom-class', 'dojo/dom-style', 'dojo/dom-construct', 'dojo/_base/array', 'dojo/_base/lang', 'dojo/text',
    'dojo/text!MxIDSSO/widget/template/MxIDSSO.html'
], function (declare, _WidgetBase, _TemplatedMixin, dom, dojoDom, domQuery, domProp, domGeom, domClass, domStyle, domConstruct, dojoArray, lang, text, widgetTemplate) {
    'use strict';
    
    // Declare widget's prototype.
    return declare('MxIDSSO.widget.MxIDSSO', [ _WidgetBase, _TemplatedMixin ], {
        // _TemplatedMixin will create our dom node using this HTML template.
        templateString: widgetTemplate,

        // Parameters configured in the Modeler.
        logintext: "",

        // dojo.declare.constructor is called to construct the widget instance. Implement to initialize non-primitive properties.
        constructor: function () { },

        // dijit._WidgetBase.postCreate is called after constructing the widget. Implement to do extra setup work.
        postCreate: function () {
            console.log(this.id + '.postCreate');
            this.loginButton.innerHTML = this.logintext;
        },

        // mxui.widget._WidgetBase.update is called when context is changed or initialized. Implement to re-render and / or fetch data.
        update: function (obj, callback) {
            console.log(this.id + '.update');
            callback();
        },

        uninitialize: function () { }
        
    });
});
