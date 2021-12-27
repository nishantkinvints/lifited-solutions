import React, {useEffect} from 'react'
import Image from 'next/image'

import styleSvg from '../../assets/image/home/Style.svg'
import sliderImg1 from '../../assets/image/home/slider-img-1.svg'
import sliderImg2 from '../../assets/image/home/slider-img-2.svg'
import mountain from '../../assets/image/home/mountain.svg'

import $ from "jquery";


const Homebanner = () => {
    
    useEffect(() => {
         /*--------- Mountain Js ----------*/
         const bg = document.querySelector('.background-image');
         const main_bg = document.querySelector('.home_banner_section');
         const windowWidth = window.innerWidth / 2.5;
         const windowHeight = window.innerHeight / 2.5 ;
         
         main_bg.addEventListener('mousemove', (e) => {
             const mouseX = e.clientX / windowWidth;
             const mouseY = e.clientY / windowHeight;
             
             bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
         });

         $(window).on('load resize', function() {
            if(($(window).width() <= 1800) && $(window).width() >= 768){
                top_circle_img();	
                mountain_img();
            }
        });
         
        function top_circle_img(){
            var windows_windth = $(window).width();
            var windows_height = $(window).height();
            
            $('.background_circle').css("width", windows_windth / 1.5);
            $('.background_circle').css("height", windows_height / 1);
        }
        function mountain_img(){
            var windows_windth = $(window).width();
            var windows_height = $(window).height();
            
            $('.background-image').css("width", windows_windth / 0.9);
            $('.background-image').css("height", windows_height / 1.2);
        }
        //  $(window).on('load resize', function() {
        //      Left_Pad();
        //  });
     
        //  function Left_Pad(){
        //      var left_pad = $('.our_clients_say_section .container').offset().left;
        //      var checkWidth = $(window).width();
             
        //      if( ((checkWidth <= 1215) && (checkWidth >= 1200)) || ((checkWidth >= 0) && (checkWidth <= 575)) ) {
        //          $('.our_clients_say_section .cm_pad').css({"padding-left" : "12px"})
        //      }
        //      else{
        //          $('.our_clients_say_section .cm_pad').css({"padding-left" : left_pad})
        //      }
        //  }
     
     
         window.addEventListener('wheel', function(event){
             // new_One();
             setTimeout(() => {
                 var scroll = $(window).scrollTop();
                 $('body').attr('scroll-data', scroll);
                 
                 if((scroll > 70) && scroll <= 90){
                     $(".main-header").addClass("second_header");
                 }
                 else if(scroll > 100){
                     $(".main-header").removeClass("second_header");
                     $(".main-header").addClass("header_not_show");
                     
                     if (event.deltaY < 0) {
                         $(".main-header").addClass("second_header");
                         $(".main-header").removeClass("header_not_show");
                     }
                     else if (event.deltaY > 0) {
                         $(".main-header").removeClass("second_header");
                         $(".main-header").addClass("header_not_show");
                     }
                 }
                 else if (scroll < 100){
                     $(".main-header").removeClass("second_header header_show header_not_show");
                 }
             }, 50);
         });
    }, [])


    return (
        <div className="home_banner_section_pad">
            <div className="home_banner_section">
                <div className="container">
                    <div className="home_banner_inner_section">
                        <span className="wow fadeInUp" data-wow-delay="2.4s">TIME TO SCALE</span>
                        <h1 className="wow fadeInUp" data-wow-delay="2.4s">Elevate Your Business <br />
                            To The Next Level.</h1>
                        <p className="wow fadeInUp" data-wow-delay="2.4s">Mobile Apps, Website Design, Shopify Stores, Digital Marketing, Growth Strategy. Accelerate your business growth with our proven, results focused approach.</p>
                        <a className="grtin-btn" href="#0" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <span className="get-in-btn">Let’s Grow
                                <i className="fa fa-long-arrow-right"></i>
                            </span>
                        </a>
                    </div>
                </div>

                <div className="background_circle animation">
                    <Image src={styleSvg} alt="mountain"/>
                </div>
                <div className="background_circle_2 animation">
                    <Image src={sliderImg1} alt="mountain"/>
                </div>
                <div className="background_circle_3 animation">
                    <Image src={sliderImg2} alt="mountain"/>
                </div>
                <div className="background-image">
                    <Image src={mountain} alt="mountain"/>
                </div>
            </div>
        </div>
    )
}

export default Homebanner
