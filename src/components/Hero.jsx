import { FaPhoneAlt, FaCheck } from "react-icons/fa";

export default function Hero() {

const features = [
"New Launch Commercial Project",
"Fully Furnished Studio Apartments",
"Floor Height : 40 Storeys",
"Total Towers : 2",
"Sizes : 650 – 675 Sq. Ft. Onwards"
];

return (

<section
className="relative h-screen bg-cover bg-center flex items-center"
style={{
backgroundImage:
"url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c')"
}}
>

<div className="absolute inset-0 bg-black/40"></div>

<div className="relative max-w-7xl mx-auto px-10 text-white">

<h3 className="text-lg mb-2">
Codename: Bento
</h3>

<p className="text-sm mb-4">
Gaur Yamuna City, Yamuna Expressway
</p>

<h1 className="text-5xl font-bold mb-6">
Luxury Studio Apartments
</h1>

<div className="bg-[#6b4b2c] inline-block px-6 py-3 rounded-lg text-lg font-semibold mb-6">
Starting Price: ₹ 85 Lac*
</div>

<div className="space-y-4 max-w-md">

{features.map((item, index) => (

<div
key={index}
className="flex items-center bg-white text-black p-4 rounded-lg shadow"
>

<div className="bg-[#6b4b2c] text-white p-2 rounded mr-4">
<FaCheck />
</div>

<span className="font-medium">{item}</span>

</div>

))}

</div>

</div>

</section>

);

}