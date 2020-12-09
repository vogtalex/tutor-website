(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['tutorPreview'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"tutor\" data-name="
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":1,"column":29},"end":{"line":1,"column":37}}}) : helper)))
    + " data-year="
    + alias4(((helper = (helper = lookupProperty(helpers,"year") || (depth0 != null ? lookupProperty(depth0,"year") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"year","hash":{},"data":data,"loc":{"start":{"line":1,"column":48},"end":{"line":1,"column":56}}}) : helper)))
    + " data-price="
    + alias4(((helper = (helper = lookupProperty(helpers,"hourlyRate") || (depth0 != null ? lookupProperty(depth0,"hourlyRate") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hourlyRate","hash":{},"data":data,"loc":{"start":{"line":1,"column":68},"end":{"line":1,"column":82}}}) : helper)))
    + " data-city="
    + alias4(((helper = (helper = lookupProperty(helpers,"city") || (depth0 != null ? lookupProperty(depth0,"city") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"city","hash":{},"data":data,"loc":{"start":{"line":1,"column":93},"end":{"line":1,"column":101}}}) : helper)))
    + " data-subject="
    + alias4(((helper = (helper = lookupProperty(helpers,"subject") || (depth0 != null ? lookupProperty(depth0,"subject") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"subject","hash":{},"data":data,"loc":{"start":{"line":1,"column":115},"end":{"line":1,"column":126}}}) : helper)))
    + ">\n  <div class=\"tutor-contents\">\n    <div class=\"tutor-img-container\">\n      <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"imageURL") || (depth0 != null ? lookupProperty(depth0,"imageURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imageURL","hash":{},"data":data,"loc":{"start":{"line":4,"column":16},"end":{"line":4,"column":28}}}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":4,"column":35},"end":{"line":4,"column":43}}}) : helper)))
    + "\">\n    </div>\n    <div class=\"tutor-info-container\">\n      <a href=\"/tutors/"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":7,"column":23},"end":{"line":7,"column":31}}}) : helper)))
    + "\" class=\"tutor-title\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":7,"column":53},"end":{"line":7,"column":61}}}) : helper)))
    + "</a> <span class=\"tutor-year\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"year") || (depth0 != null ? lookupProperty(depth0,"year") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"year","hash":{},"data":data,"loc":{"start":{"line":7,"column":91},"end":{"line":7,"column":99}}}) : helper)))
    + "</span> <span class=\"tutor-price\">$"
    + alias4(((helper = (helper = lookupProperty(helpers,"hourlyRate") || (depth0 != null ? lookupProperty(depth0,"hourlyRate") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hourlyRate","hash":{},"data":data,"loc":{"start":{"line":7,"column":134},"end":{"line":7,"column":148}}}) : helper)))
    + "</span>\n      <span class=\"tutor-city\"> "
    + alias4(((helper = (helper = lookupProperty(helpers,"city") || (depth0 != null ? lookupProperty(depth0,"city") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"city","hash":{},"data":data,"loc":{"start":{"line":8,"column":32},"end":{"line":8,"column":40}}}) : helper)))
    + " </span> <span class=\"tutor-subject\"> "
    + alias4(((helper = (helper = lookupProperty(helpers,"subject") || (depth0 != null ? lookupProperty(depth0,"subject") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"subject","hash":{},"data":data,"loc":{"start":{"line":8,"column":78},"end":{"line":8,"column":89}}}) : helper)))
    + " </span>\n    </div>\n  </div>\n";
},"useData":true});
})();