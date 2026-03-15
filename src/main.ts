import "./style.css"

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `

<header class="navbar">

<div class="logo">
CODENAME BENTO
<span>Authorised Channel Partner</span>
</div>

<div class="hamburger">
☰
</div>

<nav class="nav-links">
<a href="#home">Home</a>
<a href="#about">About</a>
<a href="#price">Price</a>
<a href="#highlights">Highlights</a>
<a href="#amenities">Amenities</a>
<a href="#floor">Floor Plan</a>
<a href="#gallery">Gallery</a>
<a href="#location">Location</a>
</nav>

<button class="call-btn">
📞 Call Now
</button>

</header>



<section id="home" class="hero">

<div class="hero-content">

<p class="location">
Codename: Bento <br>
<span>Gaur Yamuna City, Yamuna Expressway</span>
</p>

<h1>
Luxury Studio Apartments
</h1>

<div class="price">
Starting Price ₹ 85 Lac*
</div>

<div class="features">
<div class="feature">✔ Fully Furnished Studio Apartments</div>
<div class="feature">✔ 40 Storey Towers</div>
<div class="feature">✔ Premium Amenities</div>
<div class="feature">✔ 650–675 Sq.Ft</div>
</div>

</div>

</section>



<section id="about" class="about">

<div class="about-wrapper">

<div class="about-image">
<img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00">
</div>

<div class="about-content">

<a href="#" class="brochure-btn">
Download Brochure
</a>

<h2>Gaur Runway Suites Yamuna Expressway</h2>

<p>
Premium studio apartments designed for modern investors and homebuyers.
Located inside the rapidly growing Gaur Yamuna City township.
</p>

</div>

</div>

</section>



<section id="price" class="price-section">

<h2>Price List</h2>

<div class="price-card">

<h3>Studio Apartments</h3>

<div class="divider"></div>

<p class="price-value">₹ 85 Lac*</p>

<p class="size">650 – 675 Sqft</p>

<a 
href="https://wa.me/919718592809?text=Hi I am interested in Codename Bento"
target="_blank"
class="enquire-btn"
>
Enquire Now
</a>

</div>

</section>



<section id="highlights" class="highlights">

<div class="highlights-wrapper">

<div class="highlight-left">

<div class="highlight-item">Fully Furnished Studio Apartments</div>
<div class="highlight-item">Modern Glass Towers</div>
<div class="highlight-item">Luxury Clubhouse</div>
<div class="highlight-item">Outdoor Dining</div>

</div>

<div class="highlight-right">
<img src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6">
</div>

</div>

</section>



<section id="amenities" class="amenities">

<h2 class="amenities-title">Amenities</h2>

<div class="amenities-scroll">

<div class="amenity-card">
<img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f">
<h3>Fitness Center</h3>
</div>

<div class="amenity-card">
<img src="https://images.unsplash.com/photo-1554995207-c18c203602cb">
<h3>Office Lounge</h3>
</div>

<div class="amenity-card">
<img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb">
<h3>Swimming Pool</h3>
</div>

</div>

</section>



<section id="floor" class="floor-plan">

<h2>Floor Plans</h2>

<div class="floor-card">

<div class="floor-image">

<img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c">

<a 
href="https://wa.me/919718592809"
target="_blank"
class="view-plan-btn"
>
View Plan
</a>

</div>

<div class="floor-text">
Studio – 650 – 675 Sqft
</div>

</div>

</section>



<section id="gallery" class="gallery">

<h2 class="gallery-title">Gallery</h2>

<div class="gallery-track">

<img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" class="gallery-img">
<img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85" class="gallery-img">
<img src="https://images.unsplash.com/photo-1613977257363-707ba9348227" class="gallery-img">

</div>

</section>



<section id="location" class="location-section">

<div class="location-container">

<div class="location-left">

<h2>Location Advantages</h2>

<ul class="location-list">
<li>Yamuna Expressway</li>
<li>Noida International Airport</li>
<li>Industrial Hubs Nearby</li>
<li>F1 Track Nearby</li>
</ul>

<a href="https://maps.google.com" target="_blank" class="location-btn">
View Location
</a>

</div>

<div class="location-right">
<img src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83">
</div>

</div>

</section>



<section class="developer-section">

<div class="developer-container">

<div class="developer-left">

<h2>About Developer</h2>

<p>
Over 31 years of real estate experience delivering quality residential and commercial developments.
</p>

<p>📞 +91 95409 32700</p>

</div>

<div class="developer-right">

<form id="siteForm">

<input id="name" placeholder="Name" required>
<input id="phone" placeholder="Phone" required>
<input id="email" placeholder="Email" required>

<button type="submit">Get Details</button>

</form>

</div>

</div>

</section>



<footer class="footer">

<p>
This is not the official website of the developer.
</p>

<a 
href="https://wa.me/919718592809"
target="_blank"
class="footer-btn"
>
GET DETAILS
</a>

</footer>

`



/* MOBILE NAVIGATION */

const hamburger = document.querySelector(".hamburger")
const nav = document.querySelector(".nav-links")

hamburger?.addEventListener("click",()=>{
nav?.classList.toggle("show-nav")
})



/* FORM MAIL */

document.addEventListener("submit",(e)=>{

const target = e.target as HTMLFormElement

if(target.id === "siteForm"){

e.preventDefault()

const name = (document.getElementById("name") as HTMLInputElement).value
const phone = (document.getElementById("phone") as HTMLInputElement).value
const email = (document.getElementById("email") as HTMLInputElement).value

const subject = "Site Visit Request"

const body =
"Name: " + name +
"%0APhone: " + phone +
"%0AEmail: " + email

window.location.href =
"mailto:uuday5757@gmail.com?subject=" + subject + "&body=" + body

}

})