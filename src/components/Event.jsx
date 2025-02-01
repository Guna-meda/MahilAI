import React from 'react'


const Event = () => {

  const eventData = [
    {
      title: "SAFE-A-THON",
      description: "A 12-hour offline hackathon with a prize pool of over ₹20,000!",
      date: "1st April 2023",
      time: "9 AM - 9 PM",
      venue: "PES52",
      prizePool: "₹20,000+",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Cyod0xB3OAM4dPHA3bkY6eqoYzN3ad.png",
    },
    {
      title: "Web Dev Workshop",
      description: "Learn the latest web development technologies and best practices.",
      date: "15th April 2023",
      time: "2 PM - 5 PM",
      venue: "Online",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Cyod0xB3OAM4dPHA3bkY6eqoYzN3ad.png",
    },
    {
      title: "AI/ML Symposium",
      description: "Explore the cutting-edge advancements in AI and Machine Learning.",
      date: "5th May 2023",
      time: "10 AM - 4 PM",
      venue: "Tech Hub Auditorium",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Cyod0xB3OAM4dPHA3bkY6eqoYzN3ad.png",
    }
  ];

  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#130726] to-[#1a0933]  text-white">
   

    <main className="container mx-auto px-4 py-8">
      <section id="hero" className="mb-16 text-center">
        <h2 className="mb-4 text-5xl font-bold">Welcome to Mahilai Events</h2>
        <p className="mb-8 text-2xl">Join us for exciting tech events and hackathons!</p>
        <button className="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded">Join Our Community</button>
      </section>

      <section id="upcoming" className="mb-16">
        <h2 className="mb-8 text-4xl text-pink-300 pb-10 font-bold">Upcoming Events</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {eventData.map((event, index) => (
            <div key={index} className="rounded-lg bg-white bg-opacity-10 p-6 backdrop-blur-lg shadow-inner ring-1 ring-white/10">
              <img src={event.imageUrl} alt={event.title} className="mb-4 h-48 w-full rounded-md object-cover" />
              <h3 className="mb-2 text-xl font-bold">{event.title}</h3>
              <p className="mb-4 text-[#130726]">{event.description}</p>
              <p className="text-sm text-pink-600">{event.date} | {event.time} | {event.venue}</p>
              <button className="mt-4 w-full bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded">Register Now</button>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="text-center">
        <h2 className="mb-8 text-3xl font-bold">Get in Touch</h2>
        <p className="mb-4">Have questions about our events? Reach out to us!</p>
      </section>
    </main>

   
  </div>
  )
}

export default Event