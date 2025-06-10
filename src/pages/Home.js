import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/GlobalStyles.css";
import heroImage from "../assets/images/bilo38_orig_EVS.jpg";
import ImageSlider from "../components/ImageSlider";

const Home = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [showMissionDetails, setShowMissionDetails] = useState(false);
  const [showImpactDetails, setShowImpactDetails] = useState(false);
  const [showOverviewDetails, setShowOverviewDetails] = useState(false);
  return (
    <div className="home-container">
      
      {/* Hero Section */}
      <div className="hero-section">
        <img loading="lazy" src={heroImage} alt="Ethiopian Village Schools" className="hero-image" />

        <div className="overlay" />

        {/* Animated Centered Text */}
        <motion.div 
          className="text-container"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="hero-title">Ethiopian Village Schools</h1>
          <p className="hero-subtext">
            Providing access to quality education for underserved communities in Ethiopia.
          </p>
          <div className="button-group">
            <motion.button 
              className="cta-button"
              whileHover={{ scale: 1.1 }}
              onClick={() => window.location.href = "/donate"}
            >
              Donate Now
            </motion.button>
           
          </div>
        </motion.div>
      </div>

      {/* Content Section - Toggles When "Learn More" is Clicked */}
      {showInfo && (
<motion.div 
  className="info-container"
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
>
  
  {/* Learn More Button - Now ONLY Under Overview */}
  

  
</motion.div>
      )}

      {/* Bottom Image & Mission Statement */}
     <div className="bottom-section">

       {/* Overview Section */}
      <motion.div 
        className="gallery-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Overview</h2>
        <p>
          Ethiopia is one of the world's oldest civilizations. With a population of almost 110 million people,  
          it’s also one of the world's poorest. Studies show that education is the key to ending poverty.  
        </p>
        {/* Learn More Button */}
        <button 
          className="learn-more-button" 
          onClick={() => setShowOverviewDetails(!showOverviewDetails)}
        >
          {showOverviewDetails ? "Hide Details" : "Learn More"}
        </button>

        {/* Expanded Content - Only Visible When Button Is Clicked */}
        {showOverviewDetails && (
          <motion.div 
            className="mission-details"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p>
              Education has been proven to be the most effective tool in breaking the cycle of poverty.  
              By providing access to quality schooling, Ethiopian Village Schools is working to create sustainable change  
              for generations to come.
            </p>
          </motion.div>
        )}
      </motion.div>

        {/* YouTube Video */}
  <motion.div 
    className="video-container"
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
  >
    <iframe 
      width="800" 
      height="450" 
      src="https://www.youtube.com/embed/-da9lj-CO8M?autoplay=0&rel=0" 
      title="Ethiopian Village Schools Video"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </motion.div>
  
  
 
    <motion.div 
  className="gallery-section"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  <h2>Our Mission</h2> 
  <p>
    Our mission is to help every child reach their full potential, to help each child escape the bonds of poverty 
    through education, to instill confidence, and to move them into mainstream society.
  </p>

  {/* Learn More Button */}
  <button 
    className="learn-more-button" 
    onClick={() => setShowMissionDetails(!showMissionDetails)}
  >
    {showMissionDetails ? "Hide Details" : "Learn More"}
  </button>

  {/* Expanded Content (Visible Only When Button Is Clicked) */}
  {showMissionDetails && (
    <motion.div 
      className="mission-details"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <p>
        We work tirelessly to provide educational resources, mentorship programs, and school infrastructure improvements, 
        ensuring every child has the opportunity to succeed. With the support of our donors and volunteers, we continue 
        to expand access to quality education, building pathways for a brighter future.
      </p>
    </motion.div>
  )}
</motion.div>

{/* Our Approach Section */}

<motion.div 
  className="gallery-section"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  <h2>Our Approach</h2> 
  <p>
    We believe in a holistic approach to education—one that includes strong curriculum, teacher training, 
    and community engagement. By working closely with local educators, students, and families, we build 
    a sustainable foundation for long-term success.
  </p>

 
  <ul>
    <li>📚 **Quality Education:** Providing books, technology, and well-trained teachers.</li>
    <li>🏫 **Infrastructure Development:** Ensuring safe and modern learning environments.</li>
    <li>👨‍👩‍👧‍👦 **Community Involvement:** Partnering with parents and local leaders.</li>
    <li>💡 **Innovation & Sustainability:** Leveraging new learning methods and eco-friendly solutions.</li>
  </ul>

</motion.div>






 {/* Slideshow Gallery Section */}
<motion.div 
  className="gallery-section"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  <h2>Gallery</h2>
  <p>Take a glimpse at our schools, students, and the impact of education in Ethiopian communities.</p>
  
  {/* Import and Display Image Slider */}
  <ImageSlider />
</motion.div>

  <motion.div
  className="gallery-section"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  <h2>Our Impact</h2>
  <p>
    Through our initiatives, Ethiopian Village Schools has directly transformed the lives of countless children. 
    By providing access to quality education, we have empowered students to pursue brighter futures, breaking the 
    cycle of poverty for families and communities.
  </p>

  {/* Learn More Button */}
  <button 
    className="learn-more-button" 
    onClick={() => setShowImpactDetails(!showImpactDetails)}
  >
    {showImpactDetails ? "Hide Details" : "Learn More"}
  </button>

  {/* Expanded Content - Only Visible When Button Is Clicked */}
  {showImpactDetails && (
    <motion.div 
      className="mission-details"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <p>
        Our programs ensure that children receive proper school materials, safe learning environments, and the encouragement 
        they need to succeed. Every new classroom built, every textbook provided, and every teacher trained represents a step 
        toward sustainable development and long-term change.

        Together, we are making education accessible, ensuring every child has the opportunity to learn, dream, and thrive.
      </p>
    </motion.div>
  )}
</motion.div>



  {/* Impact in Action Section */}
<motion.section
  className="impact-highlight"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  {/* Inspirational Quote */}
  <blockquote className="impact-quote">
    "Before this school, I didn’t know how to write my name. Now I want to be a doctor."
    <br />
    <span>— Alemitu</span>
  </blockquote>

  {/* Impact Stats */}
  <div className="impact-stats">
    <div className="stat">
      <h3>1,200+</h3>
      <p>students enrolled</p>
    </div>
    <div className="stat">
      <h3>6</h3>
      <p>schools built in rural regions</p>
    </div>
    <div className="stat">
      <h3>10,000+</h3>
      <p>books distributed</p>
    </div>
    <div className="stat">
      <h3>92%</h3>
      <p>continue to high school</p>
    </div>
  </div>

  {/* Faces of Change */}
  <div className="faces-section">
    <div className="face-card">
      <img src="../assets/images/img-5466_orig_EVS_Mission.jpeg" alt="Amanuel" />
      <p><strong>Amanuel</strong> never missed a day of school this year.</p>
    </div>
    <div className="face-card">
      <img src="../assets/images/bilo10-orig_orig_EVS_Mission.jpg" alt="Genet" />
      <p><strong>Genet</strong> teaches students.</p>
    </div>
    <div className="face-card">
      <img src="../assets/images/bilo-library-5209086-orig_orig_EVS_MIssion.jpg" alt="Yohannes" />
      <p><strong>Yohannes</strong> helped build library.</p>
    </div>
  </div>

  {/* Where We Work */}
  <div className="where-we-work">
    <h3>Where We Work</h3>
    <p>Our schools serve remote communities like Qibaa and Bilo, reaching students who previously had to walk miles—or had no school at all.</p>
    <img
      src="../assets/images/ethiopia-map.png"
      alt="Map showing Ethiopian school locations"
      className="map-image"
    />
  </div>
</motion.section>

{/* Voices of Change (Student & Teacher Testimonials) */}
{/*}
<motion.section 
  className="testimonial-section"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  <h2>Voices of Change</h2>
  <div className="testimonial-cards">
    <div className="testimonial">
      <p>"Because of my scholarship, I can dream about becoming a teacher myself."</p>
      <span>— Lidiya, 10th Grade</span>
    </div>
    <div className="testimonial">
      <p>"This school is not just a place to learn—it’s where I discovered my purpose."</p>
      <span>— Abebe, Science Teacher</span>
    </div>
    <div className="testimonial">
      <p>"Now that I have textbooks, I feel like nothing can stop me from succeeding."</p>
      <span>— Gadisse, 8th Grade</span>
    </div>
  </div>
</motion.section>
}
{/* Interactive Timeline */}
<motion.section 
  className="timeline-section"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  <h2>Our Journey</h2>
  <div className="timeline">
    <div className="timeline-event">
      <span>📍 2018</span>
      <p>First school built in Qibaa.</p>
    </div>
    <div className="timeline-event">
      <span>📍 2020</span>
      <p>Over 500 students enrolled.</p>
    </div>
    <div className="timeline-event">
      <span>📍 2023</span>
      <p>New classrooms and learning materials.</p>
    </div>
  </div>
</motion.section>

{/* Get Involved Section */}
{/* Get Involved Section */}
<motion.section 
  className="get-involved-section"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  <h2>Get Involved</h2>
  <p>Want to make a direct impact? Join us as a mentor, sponsor a student, or contribute learning materials.</p>

  {/* Volunteer Opportunities */}
  <div className="volunteer-options">
    <div className="volunteer-card">
      <h3>📖 Tutor a Student</h3>
      <p>Help students improve their reading, writing, and math skills by providing virtual or in-person tutoring.</p>
    </div>
    <div className="volunteer-card">
      <h3>🎒 Donate School Supplies</h3>
      <p>Many students lack basic learning materials. Your donation can give them access to books, uniforms, and notebooks.</p>
    </div>
    <div className="volunteer-card">
      <h3>💡 Support a Teacher</h3>
      <p>Provide resources or sponsor professional development for teachers who are shaping young minds daily.</p>
    </div>
  </div>

  {/* Action Buttons */}
  <div className="button-group">
    <motion.button 
      className="cta-button"
      whileHover={{ scale: 1.1 }}
      onClick={() => window.location.href = "/donate"}
    >
      Donate Now
    </motion.button>
    <motion.button 
      className="cta-button secondary"
      whileHover={{ scale: 1.1 }}
      onClick={() => window.location.href = "/volunteer"}
    >
      Become a Volunteer
    </motion.button>
  </div>
</motion.section>

</div>

<footer className="footer">
  <div className="social-icons">
    <a href="https://www.facebook.com/EthiopianVillageSchools" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-facebook-f"></i>
    </a>
    <a href="https://www.instagram.com/EthiopianVillageSchools" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-instagram"></i>
    </a>
    <a href="https://twitter.com/EthiopianVillageSchools" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-twitter"></i>
    </a>
    <a href="https://www.linkedin.com/company/EthiopianVillageSchools" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-linkedin-in"></i>
    </a>
  </div>

  <p className="footer-text">&copy; {new Date().getFullYear()} Ethiopian Village Schools. All rights reserved.</p>
</footer>

    </div>
  );
};

export default Home;