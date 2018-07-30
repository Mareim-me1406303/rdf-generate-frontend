let temp = `
<div class="contentText" style="color: black">
                        <div class="w3-container">
                            <ul class="w3-ul w3-card-4 list-entities">
                                <br>IRI template:
                                <li class="w3-display-container"><input class="contentText tr_style" type="text"
                                                                        value="{{iri_template}}"></li>
                                Type:
                                <li class="w3-display-container"><input class="contentText tr_style" type="text"
                                                                        value="{{type}}"></li>
                                Inculde:{{#each include}}
                                <li class="w3-display-container"><input class="contentText tr_style" type="text"
                                                                        value="{{this}}"> <span
                                        onclick="this.parentElement.style.display='none'"
                                        class="w3-button w3-transparent w3-display-right">&times;</span></li>
                            {{/each}}
                                <a id="addAttribute" class="btn btn-info" onclick="addAttribute('{{json_path}}')">
                                    <i class="fa fa-plus"></i>+
                                </a>

                            </ul><br>
                        </div>
                    </div>
`;

function addTable() {
    let cont = document.getElementById("tableHolder");
    /*try {
        const formTemplate = Handlebars.compile(temp);
        cont.innerHTML = formTemplate(data.entities);
    } catch (err) {
        console.log(err);
    }*/
    var source   = document.getElementById("entry-template").innerHTML;
    var template = Handlebars.compile(source);
    let aaa = data[0].entities;
    console.log(data[0].entities);
    cont.innerHTML = template(aaa);
}

addTable();
