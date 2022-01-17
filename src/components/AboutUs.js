import React from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase.js";
import AOS from 'aos';
import main_func from "../assets/js/main.js";

import "../assets/vendor/aos/aos.css";
import "../assets/vendor/animate.css/animate.min.css";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/boxicons/css/boxicons.min.css";
import "../assets/vendor/remixicon/remixicon.css";
import "../assets/vendor/swiper/swiper-bundle.min.css";
import "../assets/css/style.css";
import "../assets/css/about_us.css";

class SlideDOM extends React.Component {
  render() {
    return (
      <div className="mySlides-n fade-n">
          <img src={ this.props.image_url } style={{
                  width: '100%'
              }}/>
          </div>
    )
  }
}

class AboutUs extends React.Component {
    constructor(props) {
        super(props);
        AOS.init();
        this.state = {
            slideIndex: 0,
            slides: [],
        }
        this.slideInterval = setInterval(()=>{});
    }
    componentDidMount() {
        this.getSlideImages();
        this.slideInterval = setInterval(() => this.showSlides(), 6000); // Change image every 6 seconds
        main_func();
    }

    getSlideImages(){
      const slides = []
      const imageListRef = ref(storage, '/images/about_us_slides');
      listAll(imageListRef)
        .then((res) => {
          let promises = []
          res.items.forEach((itemRef) => {
            // All the items under listRef.
            let promise = getDownloadURL(itemRef)
              .then((url) => {
                slides.push(url);
              })
            promises.push(promise)
          });
          Promise.all(promises).then((val)=>{
            this.setState({slides : slides});
          })
        }).catch((error) => {
          console.log(error);
          // Uh-oh, an error occurred!
        });
        this.setState({slideIndex : 0, slides : slides});
        // this.renderSlides();
    }

    showSlides() {
        let slides = document.getElementsByClassName("mySlides-n");
        if(slides.length < 1){
          setTimeout(() => this.showSlides(), 4000);
          return;
        }
        let slideIndex = this.state.slideIndex;
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1
        }
        slides[slideIndex - 1].style.display = "block";
        this.setState({slideIndex:slideIndex})
        // Arrow function to preserve this
    }

    plusSlides(position) {
        clearInterval(this.slideInterval)
        let slideIndex = this.state.slideIndex;
        slideIndex += position;
        let slides = document.getElementsByClassName("mySlides-n");
        if (slideIndex > slides.length) {
            slideIndex = 1
        } else if (slideIndex < 1) {
            slideIndex = slides.length
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
        this.setState({slideIndex:slideIndex})
        this.slideInterval = setInterval(() => this.showSlides(), 6000); // Change image every 6 seconds

    }

    renderSlides(){
      const slides = this.state.slides.map(function(image_url, ind) {
        return ( <SlideDOM image_url={image_url} key={ ind }/>);
      });
      return (
        <>
        { slides }
        </>
      );
    }
    renderSlideShow(){
      return (
        <div id="slide-n">
            <div className="slideshow-container-n">
              {
                this.renderSlides()
              }
                <a className="prev-n" onClick={ () => this.plusSlides(-1) }>❮</a>
                <a className="next-n" onClick={ () => this.plusSlides(1) }>❯</a>
            </div>
            <br/>
        </div>
      );
    }
    currentSlide(index) {
        let slides = document.getElementsByClassName("mySlides-n");
        if (index > slides.length) {
            index = 1
        } else if (index < 1) {
            index = slides.length
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[index - 1].style.display = "block";

    }

    render() {
        return (<main id="main">
            <div className="breadcrumbs" data-aos="fade-in">
                <div className="container">
                    <h2>
                        Nandi Vishwavidyalaya
                    </h2>
                    <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis.
                    </p>
                </div>
            </div>
            <section id="about" className="about">
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        <div className="col-lg-6 order-1 order-lg-2 text-center" data-aos="fade-left" data-aos-delay={100}>
                          {
                            this.state.slides ?
                            this.renderSlideShow() : <div></div>
                          }
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                            <h3>
                                Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.
                            </h3>
                            <p className="fst-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <ul>
                                <li>
                                    <i className="bi bi-check-circle"/>
                                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </li>
                                <li>
                                    <i className="bi bi-check-circle"/>
                                    Duis aute irure dolor in reprehenderit in voluptate velit.
                                </li>
                                <li>
                                    <i className="bi bi-check-circle"/>
                                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.
                                </li>
                            </ul>
                            <p>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>);
    }
}
export default AboutUs;
