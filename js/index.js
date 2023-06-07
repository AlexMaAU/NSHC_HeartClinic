//page load
window.onload = function() {
    let bodyNode = document.querySelector('.page_container')
    makeAppoinment_btn_onload()
    navbarOnLoad()
    pageScrollOnLoad()
    docProfileOnLoad()
    serviceListOnLoad()
    sendContactForm()
    setTimeout(function(){
        bodyNode.classList.remove('noshow')
        bodyNode.style.transition = 'opacity 1s'
    }, 200)
}

//header Make appointment button
function makeAppoinment_btn_onload() {
    document.querySelector('.button_makeAppointment').addEventListener('click', function(){
        let element = document.querySelector('.main_section--contact');
        let topOffset = element.offsetTop;
        window.scrollTo({ left: 0, top: `${topOffset-50}`, behavior: "smooth" })
    })
}

// Nav
function navbarOnLoad() {
    let nav_div_box = document.querySelectorAll('.header_nav--list a')
    nav_div_box.forEach(item=>{
        item.addEventListener('click', function() {
            //kill all
            //nav_div_box.children
            nav_div_box.forEach(item=>{
                item.className = ''
            })
            //recover self
            this.className = 'active'
        })
    })
}

// Nav - scroll to chosen position
function pageScrollOnLoad() {
    document.querySelector('#home').addEventListener('click', function(){
        window.scrollTo({ left: 0, top: 0, behavior: "smooth" })
    })
    
    document.querySelector('#aboutUs').addEventListener('click', function(){
        let element = document.querySelector('.main_section--intro');
        let topOffset = element.offsetTop;
        window.scrollTo({ left: 0, top: `${topOffset-50}`, behavior: "smooth" })
    })
    
    document.querySelector('#ourDoctors').addEventListener('click', function(){
        let element = document.querySelector('.main_section--doctor');
        let topOffset = element.offsetTop;
        window.scrollTo({ left: 0, top: `${topOffset-50}`, behavior: "smooth" })
    })
    
    document.querySelector('#ourServices').addEventListener('click', function(){
        let element = document.querySelector('.main_section--service');
        let topOffset = element.offsetTop;
        window.scrollTo({ left: 0, top: `${topOffset-50}`, behavior: "smooth" })
    })
    
    document.querySelector('#fq').addEventListener('click', function(){
        let element = document.querySelector('.main_section--fq');
        let topOffset = element.offsetTop;
        window.scrollTo({ left: 0, top: `${topOffset-50}`, behavior: "smooth" })
    })
    
    document.querySelector('#contactUs').addEventListener('click', function(){
        let element = document.querySelector('.main_section--contact');
        let topOffset = element.offsetTop;
        window.scrollTo({ left: 0, top: `${topOffset-50}`, behavior: "smooth" })
    })
}

// Doctor Profiles
function docProfileOnLoad() {
    let docList = [
        {
            name: 'Dr. David Robinson',
            photo: '../img/DrDavidRobinson.jpg',
            profile: `
                <h3>Dr. David Robinson</h3>
                <p>Vascular surgeon and phlebologist</p>
                <P>Fellow Australian College of Phlebology</P>
                <p>NSVC interests:</p>
                <ul>
                    <li>Endovenous ablation - radiofrequency and laser</li>
                    <li>Thrombectomy/phlebectomy/ligation/stripping</li>
                    <li>Ultrasound-guided sclerotherapy</li>
                </ul>
                <p class="docRights">Hospital rights: Royal Prince Alfred Hospital</p>
            `
        },
        {
            name: 'Dr. Krishna Kathir',
            photo: '../img/DrKrishnaKathir.jpg',
            profile: `
                <h3>Dr. Krishna Kathir</h3>
                <p>Cardiologist and cardiovascular interventionalist</p>
                <P>Fellow Australasian College of Physicians</P>
                <p>NSHC interests:</p>
                <ul>
                    <li>Chest pain/arrhythmias/HT</li>
                    <li>Interventional cardiac angiography</li>
                    <li>Non-invasive cardiac laboratory investigations</li>
                </ul>
                <p class="docRights">Hospital rights: St Vincent's Public and Private Hospitals, Mater Private Hospital</p>
            `
        },
        {
            name: 'Prof. Lourens Bester',
            photo: '../img/ProfessorLourensBester.png',
            profile: `
                <h3>Prof. Lourens Bester</h3>
                <p>Interventional radiologist and phlebologist</p>
                <P>Fellow Australasian College of Phlebology</P>
                <p>NSVC interests:</p>
                <ul>
                    <li>Endovenous ablation - radiofrequency and laser</li>
                    <li>Thrombolytic therapy/inferior vena cava filter - deployment and retrieval/ovarian vein coiling/ovarian vein reflux</li>
                    <li>IV access/PICC line insertion/port (central) insertion</li>
                </ul>
                <p class="docRights">Hospital rights: St Vincent's Public and Private Hospitals, Mater Private Hospital</p>
            `
        }
    ]
    
    let ind = 0
    let btnLeft = document.querySelector('.left_arrow')
    btnLeft.addEventListener('click', function() {
        ind--
        if( ind == -1) {
            ind = 2
        } 
        let {name, photo, profile} = docList[ind]
        document.querySelector('.doc_photo--img').src = photo
        document.querySelector('#doc_profile').innerHTML = profile
        let docContainer = document.querySelector('.doc_profile--container')
        docContainer.classList.add('blur')
        docContainer.style.transition = '0s'
        setTimeout(function(){
            docContainer.classList.remove('blur')
            docContainer.style.transition = 'filter 0.5s'
        }, 0)
    })
    let btnRight = document.querySelector('.right_arrow')
    btnRight.addEventListener('click', function() {
        ind++
        if( ind == 3) {
            ind = 0
        } 
        let {name, photo, profile} = docList[ind]
        document.querySelector('.doc_photo--img').src = photo
        document.querySelector('#doc_profile').innerHTML = profile
        let docContainer = document.querySelector('.doc_profile--container')
        docContainer.classList.add('blur')
        docContainer.style.transition = '0s'
        setTimeout(function(){
            docContainer.classList.remove('blur')
            docContainer.style.transition = 'filter 0.5s'
        }, 0)
    })
}

//service detail box
function serviceListOnLoad() {
    let serviceList = [
        {
            name: 'consulting',
            photo: '../img/consulting.jpg',
            detail: `
                <h3>Consulting</h3>
                <p>Our patients are referred to NSHC by their GPs in order to take advantage of the specialist knowledge our cardiac consultants can bring to bear on a suspected or existing heart condition. In consultation, our doctors will go over your medical history, family history, lifestyle, and any symptoms you might be experiencing. The purpose of a primary consultation is to establish a comprehensive background against which accurate diagnoses can be made. It is usually the case that several consultations are required as diagnostic information accumulates or your treatment progresses.</p>
            `
        },
        {
            name: 'diagnosis',
            photo: '../img/diagnosis.jpg',
            detail: `
                <h3>Diagnosis</h3>
                <p>North Shore Heart Clinic's sophisticated cardiological facilities come into their own during the diagnostic phase. Patients are sometimes referred to the our cardiologists in Sydney solely to take advantage of the latest diagnostic technology that North Shore Heart Clinic has to offer, bypassing consultation altogether. In this case, North Shore Heart Clinic acts as a diagnostic laboratory outsourcing its resources to affiliated clinicians. Most usually, however, our specialist heart doctors will recommend a battery of specific diagnostic tests following an in-depth consultation.</p>
            `
        },
        {
            name: 'intervention',
            photo: '../img/intervention.jpg',
            detail: `
                <h3>Intervention</h3>
                <p>Intervention is the term used by the medical community to refer to treatment - we are literally intervening between a patient and their disease in order to halt or, ideally, reverse the disease's progress.</p>
                <p>NSHC specialises in cardiac non-invasive interventional services and preventative medicine. If necessary we partner with the best clinicians to facilitate for surgical intervention. What NSHC focuses on is either pharmacotherapeutic treatment, using a specific programme of drug therapies to tackle disease, and lifestyle management.</P>
                <p>Lifestyle management tackles the big four risk factors for heart and cardiac disorder, getting you healthy and on track with:</P>
                <ul>
                    <li>Stress management</li>
                    <li>Weight managment</li>
                    <li>Smoking cessation</li>
                    <li>Alcohol management</li>
                </ul>
            `
        },
        {
            name: 'heartstresstest',
            photo: '../img/heartstresstest.jpg',
            detail: `
                <h3>Heart Stress Test</h3>
                <p>The North Shore Heart Clinic (NSHC) is part of the North Shore Medical Group, based in St Leonards, North Sydney. We host a number of specialist cardiologists in state-of-the-art consulting and diagnosis rooms and amongst the services we offer are comprehensive heart checkups.</p>
                <p>Cardiovascular disease is the leading cause of death in Australia. It is important to regularly check your heart's health, especially if you are particularly vulnerable. At-risk patients include those suffering from high blood pressure (hypertension), high cholesterol, those who are overweight or obese, smokers, those with poor diet or low levels of physical activity.</p>
                <p>Here at the North Shore Heart Clinic our diagnostic tests include heart stress tests (in which we monitor your cardiovascular performance during a treadmill session – add picture ‘NSHC Cardiovascular Testing Facility’), diagnostic imaging including cardiograms and blood pressure testing.</p>
                <p>If you are interested in checking up on the health of your heart, don't hesitate to give us a call on (02) 9439 2899 to arrange a consultation at our comfortable clinic. And, while you're here, please take a look around our website to see what kind of services we offer.</p>
            `
        }
    ]
    
    document.querySelectorAll('#service_content--box img').forEach(ele=>{
        ele.addEventListener('click', function(e){
            //console.log(e.target)
            document.querySelector('.section_service--detail').classList.add('show')
            document.querySelector('.section_service--detail').style.transition = 'opacity 0.5s'
            if(e.target.id == 'consulting') {
                document.querySelector('.service_detail--photo img').src = serviceList[0].photo
                document.querySelector('.service_detail--content').innerHTML = serviceList[0].detail
            } else if(e.target.id == 'diagnosis') {
                document.querySelector('.service_detail--photo img').src = serviceList[1].photo
                document.querySelector('.service_detail--content').innerHTML = serviceList[1].detail
            } else if(e.target.id == 'intervention') {
                document.querySelector('.service_detail--photo img').src = serviceList[2].photo
                document.querySelector('.service_detail--content').innerHTML = serviceList[2].detail
            }else if(e.target.id == 'heartstresstest') {
                document.querySelector('.service_detail--photo img').src = serviceList[3].photo
                document.querySelector('.service_detail--content').innerHTML = serviceList[3].detail
            }
        })
    })
    
    document.querySelector('.section_service--detail button').addEventListener('click', function(){
        //console.log('click close')
        document.querySelector('.section_service--detail').classList.remove('show')
    })
}

//EmailJS package - send form data to email
function sendContactForm() {
    document.querySelector('#contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_0o4la1f', 'template_xl25dal', this, '5zSMVKGCq4GF5Vn-p')
            .then(function() {
                console.log('Email Send SUCCESS!');
            }, function(error) {
                console.log('Email FAILED TO SEND', error);
            });
    });
}
