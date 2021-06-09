(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['tutorProfile'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"profile\">\n  <div class=\"profile-head-content\">\n    <div class=\"profile-head-content-picture\">\n      <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"imageURL") || (depth0 != null ? lookupProperty(depth0,"imageURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imageURL","hash":{},"data":data,"loc":{"start":{"line":4,"column":16},"end":{"line":4,"column":28}}}) : helper)))
    + "\" alt=\"Picture of student\" id=\"profile-image\">\n    </div>\n    <div class=\"profile-head-content-text\">\n      <h4>"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":7,"column":10},"end":{"line":7,"column":18}}}) : helper)))
    + "</h4>\n      <p class=\"text-secondary mb-1\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"zoomURL") || (depth0 != null ? lookupProperty(depth0,"zoomURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"zoomURL","hash":{},"data":data,"loc":{"start":{"line":8,"column":37},"end":{"line":8,"column":48}}}) : helper)))
    + "</p>\n      <p class=\"text-muted font-size-sm\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"city") || (depth0 != null ? lookupProperty(depth0,"city") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"city","hash":{},"data":data,"loc":{"start":{"line":9,"column":41},"end":{"line":9,"column":49}}}) : helper)))
    + "</p>\n      <p class=\"\"\n      <i class=\"fas fa-envelope-open-text\"></i> <span class=\"email\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"email") || (depth0 != null ? lookupProperty(depth0,"email") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data,"loc":{"start":{"line":11,"column":68},"end":{"line":11,"column":77}}}) : helper)))
    + "</span>\n    </div>\n  </div>\n  <div class=\"profile-side-content\">\n  </i><h4>Education: </h4><span class=\"education\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"education") || (depth0 != null ? lookupProperty(depth0,"education") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"education","hash":{},"data":data,"loc":{"start":{"line":15,"column":50},"end":{"line":15,"column":63}}}) : helper)))
    + "</span>\n      <hr></hr>\n      <h4>Work Experience: </h4><span class=\"experience\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"experience") || (depth0 != null ? lookupProperty(depth0,"experience") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"experience","hash":{},"data":data,"loc":{"start":{"line":17,"column":57},"end":{"line":17,"column":71}}}) : helper)))
    + "</span>\n      <hr></hr>\n      <h4>Quality Rating: </h4><span class=\"rating\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"ratingAverage") || (depth0 != null ? lookupProperty(depth0,"ratingAverage") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ratingAverage","hash":{},"data":data,"loc":{"start":{"line":19,"column":52},"end":{"line":19,"column":69}}}) : helper)))
    + "/5 Stars</span>\n      <hr></hr>\n      <h4>Hourly Rate: </h4><span class=\"price\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"hourlyRate") || (depth0 != null ? lookupProperty(depth0,"hourlyRate") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hourlyRate","hash":{},"data":data,"loc":{"start":{"line":21,"column":48},"end":{"line":21,"column":62}}}) : helper)))
    + "</span>\n  </div>\n</div>\n";
},"useData":true});
})();