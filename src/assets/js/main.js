/**
* Template Name: Nandi - v4.7.0
* Template URL: https://bootstrapmade.com/Nandi-free-education-bootstrap-theme/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

export default function main_func() {
  "use strict";
  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
      console.log("Hello1")
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
      console.log("Hello2")

    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()

      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  let preloader = select('#preloader');
    if (preloader) {
        if (document.readyState == "complete") {
            preloader.remove()
        } else {
            document.onreadystatechange = function () {
            if (document.readyState == "complete") {
                preloader.remove()
            }}
        }

    }
}
main_func();
