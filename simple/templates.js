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
    <div class="contentText" style="color: black">Entities:</div>
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
    {{#each entity as |value key|}}
    <div class="w3-container">
        <ul class="w3-ul w3-card-4 list-entities">
            <br> Path: {{key}} <br>
            <br>IRI template:
            <li class="w3-display-container"><input class="contentText trStyle" type="text"
                                                    value="{{iri_template}}"></li>
            Type:
            <li class="w3-display-container"><input class="contentText trStyle" type="text"
                                                    value="{{type}}"></li>
            Inculde:{{#each include}}
            ${ENTITIES_TABLE_INCLUDE_ITEM_TEMPLATE("{{this}}")}
            {{/each}}
            <div id="append_{{key}}"></div>
            <a id="addAttribute" class="btn btn-info" onclick="appendInclude('append_{{key}}')">
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
    <div class="contentText" style="color: black">Properties:</div>
    <br>
</tr>
<div id="tableHolder"></div>
`;

const PROPERTIES_TABLE_TEMPLATE = `
<div class="contentText" style="color: black">
    {{#each entity as |value key|}}
    <div class="w3-container">
        <ul class="w3-ul w3-card-4 list-entities">
            <br> Path: {{key}} <br>
            <br>IRI template:
            <li class="w3-display-container"><input class="contentText trStyle" type="text"
                                                    value="{{iri_template}}"></li>
            Type:
            <li class="w3-display-container"><input class="contentText trStyle" type="text"
                                                    value="{{type}}"></li>
            Inculde:{{#each include}}
            <li class="w3-display-container"><input class="contentText trStyle" type="text"
                                                    value="{{this}}"> <span
                    onclick="this.parentElement.style.display='none'"
                    class="w3-button w3-transparent w3-display-right">&times;</span></li>
            {{/each}}
            <div id="append_{{key}}"></div>
            <a id="addAttribute" class="btn btn-info" onclick="appendInclude('append_{{key}}')">
                <i class="fa fa-plus"></i>+
                {{! TODO: btn for adding to the include }}
            </a>
        </ul><br>
    </div>
    {{/each}}
</div>
`;