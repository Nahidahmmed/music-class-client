import React from 'react'

export default function AboutUs() {
  return (
    <div className="bg-black text-white py-16">
    <div className="container mx-auto text-white p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">About Us - Melody Master</h1>
      <p className="text-xl text-center mb-8">
        Welcome to Melody Master - Where Music Comes to Life!
      </p>

      <p className="text-xl">
        At Melody Master, we believe that music has the power to transform lives, and our mission is to make music education accessible, enjoyable, and enriching for everyone.
      </p>

      <h2 className="text-2xl font-bold mt-12">Our Story</h2>
      <p className="text-lg">
        Melody Master was founded with a simple yet powerful vision - to create a community of music enthusiasts, from beginners to advanced musicians, where they could learn, create, and master the art of music. Our journey began in [year of establishment] when [founder's name], a passionate musician and educator, embarked on a mission to share the joy of music with the world.
      </p>

      <h2 className="text-2xl font-bold mt-12">What Sets Us Apart</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-lg">
          <p className="mb-4">
            <strong>Expertise:</strong> Our team of dedicated music instructors is composed of experienced professionals with a deep love for teaching. They are committed to helping you develop your skills, whether you're just starting or looking to refine your craft.
          </p>
          <p className="mb-4">
            <strong>Tailored Learning:</strong> We understand that every student is unique, and that's why we offer a wide range of music classes, from classical to contemporary, personalized to your needs and goals.
          </p>
        </div>
        <div className="text-lg">
          <p className="mb-4">
            <strong>Cutting-Edge Technology:</strong> We leverage the latest technology to provide high-quality online music classes. With our user-friendly platform, you can learn from the comfort of your home.
          </p>
          <p>
            <strong>Community:</strong> Join a vibrant community of music lovers, share your experiences, and collaborate with fellow students and instructors. Music is not just about playing notes; it's about connecting with others through sound.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-12">Our Promise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-lg">
          <p className="mb-4">
            <strong>Quality Instruction:</strong> Our instructors are dedicated to helping you become the best musician you can be. You'll receive personalized attention and feedback to foster your growth.
          </p>
          <p className="mb-4">
            <strong>Flexibility:</strong> We understand that your schedule may be busy. That's why we offer flexible class timings to accommodate your lifestyle.
          </p>
        </div>
        <div className="text-lg">
          <p className="mb-4">
            <strong>Passion:</strong> We are passionate about music, and our enthusiasm is infectious. You'll find joy and motivation in your musical journey.
          </p>
          <p>
            <strong>Affordability:</strong> We believe that music education should be accessible to everyone. Our pricing is competitive, and we offer various payment options.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-12">Join Us Today</h2>
      <p className="text-xl">
        Whether you're a novice looking to discover the magic of music or an experienced musician seeking to refine your skills, Melody Master is your ultimate destination. Join us today and embark on a musical journey like no other.
      </p>

      <h2 className="text-2xl font-bold mt-12">Contact Us</h2>
      <p className="text-xl mb-8">
        If you have any questions or need more information, don't hesitate to reach out to our friendly team at [contact email or phone number].
      </p>

      <p className="text-xl text-center">
        Let's Create Music Together!
      </p>
    </div>
  </div>
  )
}
