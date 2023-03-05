import React from 'react'
import '../componentsCSS/dbproject.css'
import de from "../iconsAndImages/free-delivery-icon-13.jpg"
import log from "../iconsAndImages/dentallogo.jpg"
// import '../componentsJS/db project' // scr
import pay from "../iconsAndImages/IMG-20221226-WA0006.jpg"
import epay from "../iconsAndImages/payment-400x400.jpg"
export default function PublicPage() {
  return (    
    <body> 
<header className="header">

    <a href="#home" className=" logo">
        <img src={log} width="200" height="80"/>
    </a>

    <nav className="navbar">
        <a href="#home">home</a>
        <a href="#features">features</a>
        <a href="#products">products</a>
        <a href="#review">review</a>
    </nav>

    <div className="icons">
        <div className="fas fa-bars" id="menu-btn"></div>
        <div className="fas fa-shopping-cart" id="cart-btn"></div>
        <div className="fas fa-user" id="login-btn"></div>
        
    </div>

    <div className="shopping-cart">
        <div className="box">
            <i className="fas fa-trash"></i>
            <img src="#" alt=""/>
            <div className="content">
                <h3>watermelon</h3>
                <span className="price">$4.99/-</span>
                <span className="quantity">qty : 1</span>
            </div>
        </div>
        <div className="box">
            <i className="fas fa-trash"></i>
            <img src="#" alt=""/>
            <div className="content">
                <h3>onion</h3>
                <span className="price">$4.99/-</span>
                <span className="quantity">qty : 1</span>
            </div>
        </div>
        <div className="box">
            <i className="fas fa-trash"></i>
            <img src="#" alt=""/>
            <div className="content">
                <h3>chicken</h3>
                <span className="price">$4.99/-</span>
                <span className="quantity">qty : 1</span>
            </div>
        </div>
        <div className="total"> total : $19.69/- </div>
        <a href="#" className="btn">checkout</a>
    </div>

    <form action="" className="login-form">
        <h3>login now</h3>
        <input type="email" placeholder="your email" className="box"/>
        <input type="password" placeholder="your password" className="box"/>
        <p>forget your password <a href="#">click here</a></p>
        <p>don't have an account <a href="#">create now</a></p>
        <input type="submit" value="login now" className="btn"/>
    </form>

</header>

<section className="home" id="home">
        <div className="content">
        <h3>Where Your smile means more.<br/>
            <span>Better life through better dentistry.</span></h3>
        <a href="#products" className="btn">shop now</a>
    </div>

</section>

<section className="features" id="features">

    <h1 className="heading"> our <span>features</span> </h1>

    <div className="box-container">

        <div className="box">
            <img src={de} alt=""/>
            <h3>free delivery</h3>
            <p>We provide free delivery nation wide</p>
            <a href="#" className="btn">read more</a>
        </div>

        <div className="box">
            <img src={epay} alt=""/>
            <h3>easy payments</h3>
            <p>Cash on delivery available. Easy payment through your debit card.</p>
            <a href="#" className="btn">read more</a>
        </div>

    </div>

</section>


<section className="products" id="products">

    <h1 className="heading"> our <span>products</span> </h1>

    <div className="swiper product-slider">

        <div className="swiper-wrapper">

            <div className="swiper-slide box">
                <img src="#" alt=""/>
                <h3>Product #1</h3>
                <div className="price"> $4.99/- - 10.99/- </div>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <a href="#" className="btn">add to cart</a>
            </div>

            <div className="swiper-slide box">
                <img src="#" alt=""/>
                <h3>Product #2</h3>
                <div className="price"> $4.99/- - 10.99/- </div>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <a href="#" className="btn">add to cart</a>
            </div>

        </div>

    </div>

</section>

<section className="review" id="review">

    <h1 className="heading"> customer's <span>review</span> </h1>

    <div className="swiper review-slider">

        <div className="swiper-wrapper">

            <div className="swiper-slide box">
                <img src="#" alt=""/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde sunt fugiat dolore ipsum id est maxime ad tempore quasi tenetur.</p>
                <h3>Cutomer name</h3>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
            </div>

            <div className="swiper-slide box">
                <img src="#" alt=""/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde sunt fugiat dolore ipsum id est maxime ad tempore quasi tenetur.</p>
                <h3>Customer name</h3>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
            </div>

            <div className="swiper-slide box">
                <img src="#" alt=""/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde sunt fugiat dolore ipsum id est maxime ad tempore quasi tenetur.</p>
                <h3>Customer name</h3>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
            </div>

            <div className="swiper-slide box">
                <img src="#" alt=""/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde sunt fugiat dolore ipsum id est maxime ad tempore quasi tenetur.</p>
                <h3>Customer name</h3>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
            </div>

        </div>

    </div>

</section>

<section className="footer">

    <div className="box-container">

        <div className="box">
            <a href="#home" className="logo">
                <img src={log} width="140" height="60"/>
            </a>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, saepe.</p>
            <div className="share">
                <a href="https://www.facebook.com/" className="fab fa-facebook-f"></a>
                <a href="https://twitter.com/?lang=en" className="fab fa-twitter"></a>
                <a href="https://www.instagram.com/" className="fab fa-instagram"></a>
                <a href="https://pk.linkedin.com/" className="fab fa-linkedin"></a>
            </div>
        </div>

        <div className="box">
            <h3>contact info</h3>
            <a href="#" className="links"> <i className="fas fa-phone"></i> +123-456-7890 </a>
            <a href="#" className="links"> <i className="fas fa-phone"></i> +111-222-3333 </a>
            <a href="#" className="links"> <i className="fas fa-envelope"></i> abc_111@gmail.com </a>
            <a href="#" className="links"> <i className="fas fa-map-marker-alt"></i> karachi, Pakistan - 75950 </a>
        </div>

        <div className="box">
            <h3>quick links</h3>
            <a href="#home" className="links"> <i className="fas fa-arrow-right"></i> home </a>
            <a href="#features" className="links"> <i className="fas fa-arrow-right"></i> features </a>
            <a href="#products" className="links"> <i className="fas fa-arrow-right"></i> products </a>
            <a href="#review" className="links"> <i className="fas fa-arrow-right"></i> review </a>
        </div>

        <div className="box">
            <h3>newsletter</h3>
            <p>subscribe for latest updates</p>
            <input type="email" placeholder="your email" className="email"/>
            <input type="submit" value="subscribe" className="btn"/>
            <img src={pay} className="payment-img" alt=""/>
        </div>

    </div>

    <div className="credit"> Copy rights ©2022 onwards all right reserved |  <span> Designed by H.N Dental </span> </div>

</section>

</body>
    
  )
}
