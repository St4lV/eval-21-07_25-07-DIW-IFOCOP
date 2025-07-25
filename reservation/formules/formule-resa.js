const btn_resa = document.getElementById("btn-resa")
const form_div = document.querySelector("#form-div-h")

let to_step_2_btn;
let to_step_3_btn;
let to_step_4_btn;

let act_formule = document.getElementById("act-formule").innerText

let close_button

//Formulaire 1

let client_infos={
    prénom:"",
    nom:"",
    formule:"",
    nb_personnes:1,
    options:{
        p_dej:false,
        dej:false,
        diner:false,
        piscine:false,
        spa:false,
    },
    date:{
        from:"",
        to:"",
    }
}

let f1_nom_input
let f1_prenom_input
let f1_nb_p_input
let f1_formule_input
let f1_date_from_input
let f1_date_to_input

let f1_o_p_dej
let f1_o_dej
let f1_o_diner
let f1_o_piscine
let f1_o_spa

const form_1_step=`
<div id="form-div">
<button id="close-form">X</button>
    <div id="form-holder">
    
        <form>
            <hr>
            <label for="nom">Nom<span class="required">*</span></label> 
            <input id="nom"type="text"> 
            <label for="nom">Prénom<span class="required">*</span></label>
            <input id="prenom"type="text">
            <hr>
            <label for="nb-personnes">Nombre de personnes<span class="required">*</span></label>
            <input id="num-input" type="number" id="nb-personnes" min="1" max="5" value="1" />
            <hr>
            <label for="formule-select">Séléctionnez une formule</label> 
            <select id="formule-select">
                <option value="access">Access</option>
                <option value="confort">Confort</option>
                <option value="deluxe">Deluxe</option>
                <option value="prestige">Prestige</option>
            </select> 
            <hr>
            <label for="form-date-from">Date de la réservation<span class="required">*</span></label> 
            <div><span>Du </span>
            <input id="form-date-from" type="date">
            <span>au</span>
            <input id="form-date-to" type="date"></div>
            <hr>

            <label for="formule-select">Options supplémentaires</label> 
            <div class="checkbox-form"><input type="checkbox" id="include-petit-dej" name="additional-options"><span class="additional-option">Petit déjeuner</span></div>

            <div class="checkbox-form"><input type="checkbox" id="include-dejeuner" name="additional-options"><span class="additional-option">Déjeuner</span></div>

            <div class="checkbox-form"><input type="checkbox" id="include-diner" name="additional-options"><span class="additional-option">Dîner</span></div>

            <div class="checkbox-form"><input type="checkbox" id="include-piscine" name="additional-options"><span class="additional-option">Accès à la Piscine</span></div>

            <div class="checkbox-form"><input type="checkbox" id="include-spa" name="additional-options"><span class="additional-option">Scéance de Spa</span></div>
            <hr>
            <div>
                <button id="step_2_btn" type="button" class="btn btn-primary btn-lg">Confirmer</button>
                <input id="reset-f1"type="reset"class="btn btn-secondary btn-lg">
            </div>
        </form>
    <div/>
<div/>`


const form_3_step=`
    <div id="form-div">
<button id="close-form">X</button>
    <div id="form-holder">    
    <form id="form-3">
        <h3>Paiement</h3>
        <input name="credit-number" id="cc-number" type="text" pattern="[0-9]*" inputmode="numeric" maxlength="12" placeholder="Card Number">

        <div>
        <input name="credit-expires" id="cc-expires-m" type="number" pattern="[0-9]*" inputmode="numeric" placeholder="MM" min="1" max="12" maxlength="2">
        <span>/</span>
        <input name="credit-expires" id="cc-expires-y" type="number" pattern="[0-9]*" inputmode="numeric" placeholder="YY" min="25" max="35" maxlength="2">
        <input name="credit-cvc" id="cc-cvc" type="number" pattern="[0-9]*" inputmode="numeric" min="000" max="999" placeholder="CVC" maxlength="3">
        <div>
        <input type="text" id="cc-proprio" placeholder="Propriétaire de la carte">


        <div><button id="step_4_btn" type="button" class="btn-lg btn-primary btn">Paiement</button><input type="reset"class="btn-lg btn-secondary btn"></div>
    </form>
    </div></div>`
const form_4_step=`<div id="form-div">
<button id="close-form">X</button>
    <div id="form-holder">
    <div id="form-4">
    <img id="paiment-val"src="/assets/check-mark-3280.svg">
    <h3>Paiement validé</h3>
    <p>Votre chambre ${client_infos.formule} pour ${client_infos.nb_personnes} est réservée du ${client_infos.date.from} au ${client_infos.date.to} </p>
    <p id="wait-text">Vous pouvez fermer cette fenêtre ou attendre quelques secondes <p>
    </div></div></div>
`
btn_resa.addEventListener("click",function(){
    form1Show()
    
})
function form1Show(){
    form_div.innerHTML=form_1_step

    close_button=document.getElementById("close-form")
    close_button.addEventListener("click",function(){
        closeForm()
    })

    f1_formule_input = document.getElementById("formule-select")
    f1_formule_input.value = act_formule
    client_infos.formule=act_formule
    const reset_f1 = document.getElementById("reset-f1")
    reset_f1.addEventListener("click",function(){
        setTimeout(resetForm1,1)
    })
    //Validation

    f1_nom_input=document.getElementById("nom")
    f1_nom_input.addEventListener("input", function(){
        validateF1Nom(); 
    })
    
    f1_prenom_input=document.getElementById("prenom")
    f1_prenom_input.addEventListener("input", function(){
        validateF1Prenom(); 
    })

    f1_nb_p_input=document.getElementById("num-input")
    f1_nb_p_input.addEventListener("input", function(){
        validateF1NumbPers(); 
    })
    
    f1_formule_input.addEventListener("change", function(){
        client_infos.formule=f1_formule_input.value
    })
    
    f1_date_from_input=document.getElementById("form-date-from")
    f1_date_from_input.addEventListener("input", function(){
        validateF1DateFrom();
    })

    f1_date_to_input=document.getElementById("form-date-to")
    f1_date_to_input.addEventListener("input", function(){
        validateF1DateTo();
    })

    //Options

    f1_o_p_dej = document.getElementById("include-petit-dej")
    f1_o_p_dej.addEventListener("change",function(){
        client_infos.options.p_dej = f1_o_p_dej.checked
    })
    f1_o_dej = document.getElementById("include-dejeuner")
    f1_o_dej.addEventListener("change",function(){
        client_infos.options.dej = f1_o_dej.checked
    })
    f1_o_diner = document.getElementById("include-diner")
    f1_o_diner.addEventListener("change",function(){
        client_infos.options.diner = f1_o_diner.checked
    })
    f1_o_piscine = document.getElementById("include-piscine")
    f1_o_piscine.addEventListener("change",function(){
        client_infos.options.piscine = f1_o_piscine.checked
    })
    f1_o_spa = document.getElementById("include-spa")
    f1_o_spa.addEventListener("change",function(){
        client_infos.options.spa= f1_o_spa.checked
    })
    
    //Prochaine étape

    to_step_2_btn=document.querySelector("#step_2_btn")
    to_step_2_btn.addEventListener("click",function(){
        form2show()
    })
}

function resetForm1(){
    f1_formule_input.value = act_formule

}

function validateF1Nom(){
    const a = f1_nom_input
    if (a.value.length<2){
        a.style["border-color"]="red"
        client_infos.nom = ""

    } else {
        a.style["border-color"]="green"
        client_infos.nom = a.value
    }
}
function validateF1Prenom(){
    const a = f1_prenom_input
    if (a.value.length<2){
        a.style["border-color"]="red"
        client_infos.prénom = ""

    } else {
        a.style["border-color"]="green"
        client_infos.prénom = a.value
    }
}
function validateF1NumbPers(){
    const a = f1_nb_p_input
    if (a.value>5 || a.value<1 ){
        a.style["border-color"]="red"
        client_infos.nb_personnes = ""

    } else {
        a.style["border-color"]="green"
        client_infos.nb_personnes = a.value
    }
}
function validateF1DateFrom(){
    const a = f1_date_from_input
    if (a.valueAsDate.getTime()<Date.now()){
        a.style["border-color"]="red"
        client_infos.date.from = ""

    } else {
        a.style["border-color"]="green"
        client_infos.date.from = a.valueAsDate
    }
}
function validateF1DateTo(){
    const a = f1_date_to_input
    if (a.valueAsDate.getTime()<Date.now()||a.valueAsDate.getTime()<client_infos.date.from.getTime()+(24 * 60 * 60 *1000)/* Une journée */){
        a.style["border-color"]="red"
        client_infos.date.to = ""

    } else {
        a.style["border-color"]="green"
        client_infos.date.to = a.valueAsDate
    }
}

//Permet de convertir le format valueAsDate vers une date lisible pour un humain
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

function form2show(){

    if(client_infos.nom && client_infos.prénom && client_infos.nb_personnes && client_infos.date.from  && client_infos.date.to){

        const options = ["Petit déjeuner inclus","Déjeuner inclus","Dîner inclus","Accès à la piscine","Séances de spa"]
        const opt_vals = Object.values(client_infos.options)
        let opt_balises=""
        for (let i=0; i < opt_vals.length; i++){
            
            if (opt_vals[i]){
                opt_balises+=`<li>${options[i]}</li>`
            }
        }
        const form_2_step=`
        <div id="form-div">
<button id="close-form">X</button>
            <div id="form-holder">
            <div id="form-2">
            <h3>Confirmation de la Réservation</h3>
            <p>Veuillez vérifier les informations ci dessous avant de valider la réservation</p>
            <hr>
            <p>Commande au nom de ${client_infos.prénom} ${client_infos.nom}</p>
            <p>Chambre ${client_infos.formule} pour ${client_infos.nb_personnes} personnes du ${client_infos.date.from.toLocaleDateString('fr-FR', options)} au ${client_infos.date.to.toLocaleDateString('fr-FR', options)} </p>
            <p>Options supplémentaires :
                <ul id="add-options">
                    ${opt_balises}
                </ul>
            </p>
            <hr>
            <div>
            <button id="step_3_btn" type="button" class="btn btn-primary btn-lg">Paiement</button>
            <button id="back_to_step1" type="button" class="btn btn-secondary btn-lg">Annuler</button>
            </div>
        </div></div></div>`

        form_div.innerHTML=form_2_step

        close_button=document.getElementById("close-form")
        close_button.addEventListener("click",function(){
            closeForm()
        })

        let back_to_step1=document.querySelector("#back_to_step1")
        back_to_step1.addEventListener("click",function(){
            form1Show()
        })

        to_step_3_btn=document.querySelector("#step_3_btn")
        to_step_3_btn.addEventListener("click",function(){
            form3show()
    })}

}

let cc_number
let cc_expires_m
let cc_expires_y
let cc_cvc
let cc_proprio


function form3show(){
    form_div.innerHTML=form_3_step;

    close_button=document.getElementById("close-form")
    close_button.addEventListener("click",function(){
        closeForm()
    })

    to_step_4_btn=document.querySelector("#step_4_btn")
    to_step_4_btn.addEventListener("click",function(){
        form4show()
    })

    cc_number=document.getElementById("cc-number")
    cc_number.addEventListener("input",function(){
        this.value = this.value.replace(/\D/g, '');
        validateF3CCNum()
    })

    cc_expires_m=document.getElementById("cc-expires-m")
    cc_expires_m.addEventListener("input",function(){
        validateF3CCExpiresM()
    })

    cc_expires_y=document.getElementById("cc-expires-y")
    cc_expires_y.addEventListener("input",function(){
        validateF3CCExpiresY()
    })

    cc_cvc=document.getElementById("cc-cvc")
    cc_cvc.addEventListener("input",function(){
        validateF3CCCvc()
    })

    cc_proprio=document.getElementById("cc-proprio")
    cc_proprio.addEventListener("input",function(){
        validateF3CCProprio()
    })

}
let cc_number_ok=false
function validateF3CCNum(){
    const a = cc_number
    console
    if (a.value.length<12){
        a.style["border-color"]="red"
        cc_number_ok=false
    } else {
        a.style["border-color"]="green"
        cc_number_ok=true
    }
}

let cc_cvc_ok=false
function validateF3CCCvc(){
    const a = cc_cvc
    if (a.value.length!=3){
        a.style["border-color"]="red"
        cc_cvc_ok=false
    } else {
        a.style["border-color"]="green"
        cc_cvc_ok=true
    }
}
let cc_expires_m_ok=false
function validateF3CCExpiresM(){
    const a = cc_expires_m
    if (a.value>12||a.value<1){
        a.style["border-color"]="red"
        cc_expires_m_ok=false
    } else {
        a.style["border-color"]="green"
        cc_expires_m_ok=true
    }
}
let cc_expires_y_ok=false
function validateF3CCExpiresY(){
    const a = cc_expires_y
    if (a.value>35||a.value<25||a.value.length!=2){
        a.style["border-color"]="red"
        cc_expires_y_ok=false
    } else {
        a.style["border-color"]="green"
        cc_expires_y_ok=true
    }
}
let cc_proprio_ok=false
function validateF3CCProprio(){
    const a = cc_proprio
    if (a.value.length<2){
        a.style["border-color"]="red"
        cc_proprio_ok=false
    } else {
        a.style["border-color"]="green"
        cc_proprio_ok=true
    }
}

function form4show(){
    if (cc_cvc_ok && cc_number_ok && cc_expires_m_ok && cc_expires_y_ok && cc_proprio_ok){
        form_div.innerHTML=form_4_step

        close_button=document.getElementById("close-form")
        close_button.addEventListener("click",function(){
            closeForm()
        })


        for (let i=1;i<=6;i++){
            setTimeout(addPoint, i *500)
        }
        setTimeout(closeForm, 3000)
    }
}
function closeForm(){
    form_div.innerHTML=""
}
function addPoint(){
    const wait_text=document.getElementById('wait-text')
    wait_text.innerText+="."
}