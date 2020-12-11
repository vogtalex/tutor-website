(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['tutorPreview'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"tutor\" data-name=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":1,"column":30},"end":{"line":1,"column":38}}}) : helper)))
    + "\" data-year=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"year") || (depth0 != null ? lookupProperty(depth0,"year") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"year","hash":{},"data":data,"loc":{"start":{"line":1,"column":51},"end":{"line":1,"column":59}}}) : helper)))
    + "\" data-price=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"hourlyRate") || (depth0 != null ? lookupProperty(depth0,"hourlyRate") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hourlyRate","hash":{},"data":data,"loc":{"start":{"line":1,"column":73},"end":{"line":1,"column":87}}}) : helper)))
    + "\" data-city=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"city") || (depth0 != null ? lookupProperty(depth0,"city") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"city","hash":{},"data":data,"loc":{"start":{"line":1,"column":100},"end":{"line":1,"column":108}}}) : helper)))
    + "\" data-subject=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"subject") || (depth0 != null ? lookupProperty(depth0,"subject") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"subject","hash":{},"data":data,"loc":{"start":{"line":1,"column":124},"end":{"line":1,"column":135}}}) : helper)))
    + "\">\n  <div class=\"tutor-contents\">\n    <div class=\"tutor-img-container\">\n      <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"imageURL") || (depth0 != null ? lookupProperty(depth0,"imageURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imageURL","hash":{},"data":data,"loc":{"start":{"line":4,"column":16},"end":{"line":4,"column":28}}}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":4,"column":35},"end":{"line":4,"column":43}}}) : helper)))
    + "\">\n    </div>\n    <div class=\"tutor-info-container\">\n      <span>Name: <a href=\"/tutors/"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":7,"column":35},"end":{"line":7,"column":43}}}) : helper)))
    + "\" class=\"tutor-title\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":7,"column":65},"end":{"line":7,"column":73}}}) : helper)))
    + "</a> </span>\n      <hr class=\"line\"> </hr>\n      <span>Year: <span class=\"tutor-year\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"year") || (depth0 != null ? lookupProperty(depth0,"year") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"year","hash":{},"data":data,"loc":{"start":{"line":9,"column":43},"end":{"line":9,"column":51}}}) : helper)))
    + "</span></span>\n      <hr class=\"line\"> </hr>\n      <span>Price: <span class=\"tutor-price\">$"
    + alias4(((helper = (helper = lookupProperty(helpers,"hourlyRate") || (depth0 != null ? lookupProperty(depth0,"hourlyRate") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hourlyRate","hash":{},"data":data,"loc":{"start":{"line":11,"column":46},"end":{"line":11,"column":60}}}) : helper)))
    + "</span></span>\n      <hr class=\"line\"> </hr>\n      <span>City: <span class=\"tutor-city\"> "
    + alias4(((helper = (helper = lookupProperty(helpers,"city") || (depth0 != null ? lookupProperty(depth0,"city") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"city","hash":{},"data":data,"loc":{"start":{"line":13,"column":44},"end":{"line":13,"column":52}}}) : helper)))
    + " </span></span>\n      <hr class=\"line\"> </hr>\n      <span>Subject: <span class=\"tutor-subject\"> "
    + alias4(((helper = (helper = lookupProperty(helpers,"subject") || (depth0 != null ? lookupProperty(depth0,"subject") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"subject","hash":{},"data":data,"loc":{"start":{"line":15,"column":50},"end":{"line":15,"column":61}}}) : helper)))
    + " </span></span>\n    </div>\n  </div>\n</div>\n";
},"useData":true});
})();