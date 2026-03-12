import { FaPhoneAlt } from "react-icons/fa";

export default function Navbar(){

return(

<header className="fixed top-0 w-full bg-white shadow z-50">

<div className="max-w-7xl mx-auto flex justify-between items-center px-10 py-4">

<div>

<h1 className="font-bold text-xl text-[#6b4b2c]">
CODENAME BENTO
</h1>

<p className="text-xs text-gray-500">
AUTHORISED CHANNEL PARTNER
</p>

</div>

<nav className="hidden md:flex gap-8 text-gray-700">

<a href="#">Home</a>
<a href="#">About</a>
<a href="#">Price</a>
<a href="#">Amenities</a>
<a href="#">Floor Plan</a>
<a href="#">Gallery</a>
<a href="#">Location</a>

</nav>

<button className="bg-[#6b4b2c] text-white px-5 py-2 rounded-full flex items-center gap-2">

<FaPhoneAlt/>

+91-8929008045

</button>

</div>

</header>

)

}