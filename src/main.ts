import "./style.css"

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `

<header class="navbar">

<div class="logo">
CODENAME BENTO
<span>Authorised Channel Partner</span>
</div>

<nav class="nav-links">
<a href="#home">Home</a>
<a href="#about">About</a>
<a href="#price">Price</a>
<a href="#highlights">Highlights</a>
<a href="#amenities">Amenities</a>
<a href="#floor">Floor Plan</a>
<a href="#gallery">Gallery</a>
</nav>

<button class="call-btn">
📞 +91-8929008045
</button>

</header>



<!-- HERO -->

<section id="home" class="hero">

<div class="hero-content">

<p class="location">
Codename: Bento <br>
<span>Gaur Yamuna City, Yamuna Expressway</span>
</p>

<h1>
Luxury Studio <br> Apartments
</h1>

<div class="price">
Starting Price ₹ 85 Lac*
</div>

<div class="features">
<div class="feature">✔ Fully Furnished Studio Apartments</div>
<div class="feature">✔ Floor Height : 40 Storeys</div>
<div class="feature">✔ Total Towers : 2</div>
<div class="feature">✔ Sizes : 650–675 Sq.Ft</div>
</div>

</div>

</section>



<!-- ABOUT -->

<section id="about" class="about">

<div class="about-wrapper">

<div class="about-image">
<img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00">
</div>

<div class="about-content">

<a href="#" class="brochure-btn">
⬇ Download Brochure
</a>

<h2>Gaur Runway Suites Yamuna Expressway</h2>

<p>
Gaur offers premium luxury studio apartments in Gaur Yamuna City designed
for modern homebuyers and smart investors.
</p>

<p>
These fully furnished studio apartments feature contemporary interiors
and premium finishes creating a perfect blend of functionality and elegance.
</p>

</div>

</div>

</section>



<!-- PRICE -->

<section id="price" class="price-section">

<h2>Price List</h2>
<p class="price-sub">Proposed Area & Pricing</p>

<div class="price-card">

<h3>Studio Apartments</h3>

<div class="divider"></div>

<p class="price-value">₹ 85 Lac*</p>

<p class="size">Size : 650 – 675 Sq.ft.</p>

<a 
href="https://wa.me/919718592809?text=Hi I am interested in Codename Bento Studio Apartment"
target="_blank"
class="enquire-btn"
>
Enquire Now
</a>

</div>

</section>



<!-- HIGHLIGHTS -->

<section id="highlights" class="highlights">

<div class="highlights-wrapper">

<div class="highlight-left">

<div class="highlight-item">Fully Furnished Studio Apartments</div>
<div class="highlight-item">Modern Glass Building</div>
<div class="highlight-item">Podium Level Landscape</div>
<div class="highlight-item">Rolling Lawns & Pathways</div>
<div class="highlight-item">45000 Sq.Ft Luxury Clubhouse</div>
<div class="highlight-item">Outdoor Dining Space</div>

</div>

<div class="highlight-right">
<img src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6">
</div>

</div>

</section>



<!-- AMENITIES -->

<section id="amenities" class="amenities">

<h2 class="amenities-title">Amenities</h2>

<div class="amenities-scroll">

<div class="amenity-card">
<div class="amenity-number">01</div>
<img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f">
<h3>Fitness Center</h3>
</div>

<div class="amenity-card">
<div class="amenity-number">02</div>
<img src="https://images.unsplash.com/photo-1554995207-c18c203602cb">
<h3>Office Lounge</h3>
</div>

<div class="amenity-card">
<div class="amenity-number">03</div>
<img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb">
<h3>Swimming Pool</h3>
</div>

<div class="amenity-card">
<div class="amenity-number">04</div>
<img src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba">
<h3>Theatre</h3>
</div>

<div class="amenity-card">
<div class="amenity-number">05</div>
<img src="https://images.unsplash.com/photo-1552566626-52f8b828add9">
<h3>Outdoor Dining</h3>
</div>

<div class="amenity-card">
<div class="amenity-number">06</div>
<img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9">
<h3>Salon</h3>
</div>

</div>

</section>



<!-- FLOOR PLAN -->

<section id="floor" class="floor-plan">

<h2>Floor Plans</h2>

<div class="floor-card">

<div class="floor-image">

<img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c">

<a 
href="https://wa.me/919718592809?text=Hi I want to see the floor plan of Codename Bento"
target="_blank"
class="view-plan-btn"
>
View Plan
</a>

</div>

<div class="floor-text">
Studio – 650 – 675 Sqft.
</div>

</div>

</section>



<!-- GALLERY -->

<section id="gallery" class="gallery">

<h2 class="gallery-title">Gallery</h2>

<div class="gallery-wrapper">

<button class="gallery-btn left">&#10094;</button>

<div class="gallery-track">

<img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" class="gallery-img">
<img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85" class="gallery-img">
<img src="https://images.unsplash.com/photo-1613977257363-707ba9348227" class="gallery-img">
<img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c" class="gallery-img">
<img src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde" class="gallery-img">

</div>

<button class="gallery-btn right">&#10095;</button>

</div>

</section>

`



const track = document.querySelector(".gallery-track")

document.querySelector(".gallery-btn.right")?.addEventListener("click",()=>{
track?.scrollBy({left:400,behavior:"smooth"})
})

document.querySelector(".gallery-btn.left")?.addEventListener("click",()=>{
track?.scrollBy({left:-400,behavior:"smooth"})
})