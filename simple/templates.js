const THE_DRAMATIC_INTRO = `
<div style='position: fixed; top: 30%'>
    <h2>Insert a single generic object of your JSON</h2>
    <br>
    <div id="arrowAnim">
      <div class="arrowSliding">
        <div class="arrow"></div>
      </div>
      <div class="arrowSliding delay1">
        <div class="arrow"></div>
      </div>
      <div class="arrowSliding delay2">
        <div class="arrow"></div>
      </div>
      <div class="arrowSliding delay3">
        <div class="arrow"></div>
      </div>
    </div>
    <br><br>
    <h2>and press NEXT</h2>
</div>
`;

const ADD_ENTITY_TEMPLATE = `
<header class="dialogHeader">
    <h1>{{dialogTitle}}</h1>
</header>
<form>
    <div class="form-group">
        <label for="json_path">Json path</label>
        <input type="text" class="form-control" id="json_path" name="json_path"
               value="{{entities.json_path}}" required>
    </div>
    <div class="form-group">
        <label for="include">Include</label>
        <input type="text" class="form-control" id="include" name="include"
               value="{{entities.include}}" required>
    </div>
    <div class="form-group">
        <label for="type">Type</label>
        <input type="text" class="form-control" id="type" name="type"
               value="{{entities.type}}" required>
    </div>
    <div class="form-group">
        <label for="iri_template">IRI Template</label>
        <input type="text" class="form-control" id="iri_template" name="iri_template"
               value="{{entities.iri_template}}" required>
    </div>
    <input type="button" class="btn btn-primary" formnovalidate onclick="setEntityInput()" value="Add Entity">

    <input type="button" class="btn btn-primary" formnovalidate onclick="closeEntityDialog()" value="Cancel">
</form>
`;

const ENTITIES_HEADER_TEMPLATE = `
<tr>
    <div class="contentText paddingRL title" style="color: black">Entities:</div>
    <br>
</tr>
<div id="tableHolder"></div>
<a id="addEntity" class="btn btn-info" onclick="addEntity()">
    Add Entity
</a>
`;

const ENTITIES_TABLE_INCLUDE_ITEM_TEMPLATE = v => `
<li class="w3-display-container"><input class="contentText trStyle" type="text"
                                                    value="${v}"> <span
                    onclick="this.parentElement.style.display='none'"
                    class="w3-button w3-transparent w3-display-right">&times;</span></li>
`;

const ENTITIES_TABLE_TEMPLATE = `
<div class="contentText" style="color: black">
    {{#each this}}
    <div class="w3-container">
        <ul class="w3-ul w3-card-4 list-entities">
            <li class="w3-display-container"><div class="paddingRL title">Path: {{@key}}</div></li>
            <div class="paddingRL">IRI template:</div>
            <li class="w3-display-container"><input class="contentText trStyle" type="text"
                                                    value="{{iri_template}}"></li>
            <div class="paddingRL">Type:</div>
            <li class="w3-display-container"><input class="contentText trStyle" type="text"
                                                    value="{{type}}"></li>
            <div class="paddingRL">Inculde:</div>
            {{#each include}}
            ${ENTITIES_TABLE_INCLUDE_ITEM_TEMPLATE("{{this}}")}
            {{/each}}
            <div id="append_{{@key}}"></div>
            <a id="addAttribute" class="btn btn-info" onclick="appendEntityInclude('append_{{@key}}')">
                <i class="fa fa-plus"></i>+
                {{! TODO: btn for adding to the include }}
            </a>
        </ul><br>
    </div>
    {{/each}}
</div>
`;

const PROPERTIES_HEADER_TEMPLATE = `
<tr>
    <div class="contentText paddingRL title" style="color: black">Properties:</div>
    <br>
</tr>
<div id="tableHolder"></div>
`;

const PROPERTIES_TABLE_TEMPLATE = `
<div class="contentText" style="color: black">
    {{#each this}}
    <div class="w3-container">
        <ul class="w3-ul w3-card-4 list-entities">
            <li class="w3-display-container"><div class="paddingRL title">Path: {{@key}}</div></li>
            {{#if data_types}}
            <div class="paddingRL">Datatype:</div>
            <li class="w3-display-container">
            <select class="selectpicker" id="{{@key}}_data_types" onchange="onDataTypeChange('{{@key}}')">
            {{#each data_types}}
                <option value="{{@index}}">{{this}}</option>
            {{/each}}
            </select>
            </li>
            {{/if}}
            {{#if suggested_predicates}}
            <div class="paddingRL">RDF Predicate:</div>
            <li class="w3-display-container">
            <select class="selectpicker" id="{{@key}}_suggested_predicates" onchange="onPredChange('{{@key}}')">
            {{#each suggested_predicates}}
                <option value="{{@index}}">{{prefix_name}}:{{predicate}}</option>
            {{/each}}
            </select>
            </li>
            {{/if}}
        </ul><br>
    </div>
    {{/each}}
</div>
`;

const FINAL_HEADER_TEMPLATE = `
<tr>
    <div class="contentText paddingRL title" style="color: black">Descriptor and Output:</div>
    <br>
</tr>
<div id="tableHolder"></div>
`;

const FINAL_TEMPLATE = out => `
 <div class="w3-container" style="height:85%;width: 100%; position:absolute">
            <div id="desEditor" class="w3-card-4" style="height:50%"></div>
            <br>
        <div id="outEditor" class="w3-card-4 contentText" style="height:50%; overflow-y: scroll; color: black ">${out.split("\n").join("<br>")}</div>
        </div>

`;




