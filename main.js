// BOOTSTRAP COLOR THEME CHANGE (trouvé sur la documentation)
(() => {
  'use strict'

  const getStoredTheme = () => localStorage.getItem('theme')
  const setStoredTheme = theme => localStorage.setItem('theme', theme)

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme()
    if (storedTheme) {
      return storedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const setTheme = theme => {
    if (theme === 'auto') {
      document.documentElement.setAttribute('data-bs-theme', (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme)
    }
  }

  setTheme(getPreferredTheme())

  const showActiveTheme = (theme, focus = false) => {
    const themeSwitcher = document.querySelector('#bd-theme')

    if (!themeSwitcher) {
      return
    }

    const themeSwitcherText = document.querySelector('#bd-theme-text')
    const activeThemeIcon = document.querySelector('.theme-icon-active use')
    const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
    const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('href')

    document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
      element.classList.remove('active')
      element.setAttribute('aria-pressed', 'false')
    })

    btnToActive.classList.add('active')
    btnToActive.setAttribute('aria-pressed', 'true')
    activeThemeIcon.setAttribute('href', svgOfActiveBtn)
    const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`
    themeSwitcher.setAttribute('aria-label', themeSwitcherLabel)

    if (focus) {
      themeSwitcher.focus()
    }
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const storedTheme = getStoredTheme()
    if (storedTheme !== 'light' && storedTheme !== 'dark') {
      setTheme(getPreferredTheme())
    }
  })

  window.addEventListener('DOMContentLoaded', () => {
    showActiveTheme(getPreferredTheme())

    document.querySelectorAll('[data-bs-theme-value]')
      .forEach(toggle => {
        toggle.addEventListener('click', () => {
          const theme = toggle.getAttribute('data-bs-theme-value')
          setStoredTheme(theme)
          setTheme(theme)
          showActiveTheme(theme, true)
        })
      })
  })
})()

//Réalisé par l'élève :

let act_theme = localStorage.getItem('theme') ;
const dark_theme_icon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16">
  <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
</svg>`
const light_theme_icon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brightness-high-fill" viewBox="0 0 16 16">
  <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
</svg>`


window.onload = function (){
const header_nav = document.querySelector("header")
    header_nav.innerHTML+=`<nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">

          <a class="navbar-brand" href="/">
            <h1>Hôtel Parimis</h1><hr>
          </a>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">

                <!-- l'Hôtel -->

              <li class="nav-item dropdown"> 
                <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Notre Hôtel</a>

                <ul class="dropdown-menu" class="nav-f-s">
                  <li><a class="dropdown-item" href="/#accueil">Accueil</a></li>
                  <li><a class="dropdown-item" href="/#presentation">Qui sommes nous ?</a></li>
                  <li><a class="dropdown-item" href="/#access">Accéder au bâtiment</a></li>
                  <li><a class="dropdown-item" href="#contact">Contact</a></li>
                </ul>
              </li>

                <!-- Page réservations -->

              <li class="nav-item">
                <a class="nav-link" href="/reservation">Réservation</a>
              </li>
                <!-- Formules chambres -->

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Nos chambres
                </a>
                <ul class="dropdown-menu nav-f-s">
                  <li><a class="dropdown-item" href="/reservation/formules">Les gammes</a></li>
                  <li><a class="dropdown-item" href="/reservation/formules/access">Formule Access</a></li>
                  <li><a class="dropdown-item" href="/reservation/formules/confort/">Formule Confort</a></li>
                  <li><a class="dropdown-item" href="/reservation/formules/deluxe/">Formule Deluxe</a></li>
                  <li><a class="dropdown-item" href="/reservation/formules/prestige/">Formule Prestige</a></li>
                </ul>
              </li>

                <!-- Autres -->

              <li class="nav-item">
                <a class="nav-link" href="/reservation/restaurant/">Notre restaurant</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/reservation/spa/">Notre SPA</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/#avis">Avis</a>
              </li>

              <!-- Changement de thème (voir st_changeTheme() ) -->

              <li>
                <button id="btn_theme_switch" data-bs-theme-value="dark"></button>
              </li>

            </ul>
          </div>
        </div>
      </nav>`
    //Thème switch

    const theme_btn = document.querySelector("#btn_theme_switch")
    if (act_theme==="dark"){
        theme_btn.innerHTML=dark_theme_icon
    } else if (act_theme==="light"){
        theme_btn.innerHTML=light_theme_icon
    }
    theme_btn.addEventListener("click",function(){
        st_changeTheme(act_theme)
    })

    function st_changeTheme(t){
        let theme=""
        let theme_icon=""
        if (t==="dark"){
            theme="light"
            theme_btn.innerHTML=light_theme_icon
        } else if (t==="light"){
            theme="dark"
            theme_btn.innerHTML=dark_theme_icon
            
        }
        act_theme = theme
        theme_btn.setAttribute("data-bs-theme-value",theme)
        
        localStorage.setItem('theme',theme) ;
        document.documentElement.setAttribute('data-bs-theme', theme)
    }

    

    const footer = document.querySelector("footer")
    footer.innerHTML+=`<hr>
      <div class="footer-infos">
        <ul>
          <li>
            <a href="/legal/#cgu">Conditions Générales d'Utilisation</a>
          </li>
          <li>
            <a href="/legal/#cgv">Conditions Générales de Vente</a>
          </li>
          <li id="contact">
            Nous contacter
            <ul>
              <li><a href="tel:+33102030405">01 02 03 04 05</a></li>
              <li><a href="mailto:contact@parimis.fr">contact@parimis.fr</a></li>
            </ul>
          </li>
        </ul>
        <ul>
          <li>
            Site réalisé par Liam L.B.
        </li>
        <li>Contact :
            <ul>
                <li>
                    <a href="https://github.com/St4lV/" target="_blank">Github</a>
                </li>
                <li>
                    <a href="https://discord.gg/mCY6mPP7Gw" target="_blank">Discord</a>
                </li>
            </ul>
          </li>
        </ul>
      </div>`


}