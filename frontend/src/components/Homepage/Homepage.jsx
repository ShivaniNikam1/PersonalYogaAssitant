import { useEffect, useState } from 'react'
import React  from 'react'
import { Link as RouterLink } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'
import image1 from './tadasana.png';
import image2 from './vajrasana.jpeg'
import image3 from './trikonasana.png';
import image4 from './vrikshasana.png';
import image5 from './virabhadrasana1.png';
import icon from './yogae.png';
import axios from 'axios';
import './styles.css';
import { Link } from 'react-router-dom';
import Footer from '../Navbar/Footer';
const Homepage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [poses, setPoses] = useState([]);

  // Sample pose data
  const staticPoses = [
    {
      name: 'Mountain Pose',
      description: 'Stand tall with feet together, shoulders relaxed, and arms at your sides.',
      imagePath: '/images/mountain-pose.jpg',
    },
    {
      name: 'Tree Pose',
      description: 'Balance on one leg with the sole of your foot against the inner thigh or calf of the other leg.',
      imagePath: '/images/tree-pose.jpg',
    },
    {
      name : 'Tadasana',
      description: "In Tadasana, start by standing tall with feet together and arms by your sides. Ground through your feet, engage your thighs, and lift your chest. As you inhale, raise your arms overhead, bringing palms together to form a mountain over your head. Keep your gaze forward, shoulders relaxed, and maintain a straight line from your feet to your fingertips. Breathe deeply, embracing the mountain-like strength and presence in this pose.",
      imagePath: image1,
    },
    {
      name : 'Vajrasana',
      description: "In Vajrasana, begin by kneeling on the floor with your shins and feet together. Sit back on your heels, keeping your spine straight. Place your hands on your thighs, palms down. Relax your shoulders and breathe deeply. Feel the grounding connection with the earth through your legs. This pose encourages stillness and stability while promoting focus and inner calm. Embrace the simplicity and poise of Vajrasana, allowing it to center your mind and body.",
      imagePath: image2,
    },
    {
      name : 'Trikonasana',
      description: "In Trikonasana, stand with feet wide apart. Extend arms parallel to the floor. Reach sideways, hinging at your hip, and lower one hand to touch the shin, ankle, or floor. The other arm stretches upward, creating a triangle shape. Keep the chest open, gaze at the raised hand, and feel the stretch along the sides. Repeat on the other side.",
      imagePath: image3,
    },
    {
      name : 'Vrikshasana' ,
      description: "In Vrikshasana, shift weight to one foot and place the sole of the other foot on the inner thigh or calf. Bring palms together at the heart or extend arms overhead. Find a focal point, engage your core, and balance. Root down through the standing leg, imagining yourself as a sturdy tree. Switch legs and repeat.",
      imagePath: image4,
      
    },
    {
      name : 'Virabhadrasana',
      description: "In Virabhadrasana I, step one foot back, keeping the front knee bent. Square your hips and shoulders forward. Raise your arms overhead, palms facing each other. Sink into the front knee, lengthen the spine, and gaze forward. Feel strength in the legs and openness in the chest. Repeat on the other side.",
      imagePath: image5,
    },
    
  ];

  useEffect(() => {
    // Set poses to the static data
    setPoses(staticPoses);
  }, []);
  
  return (
    <div>
      <Navbar/>
      <div >
        <img src={icon} alt="yoga header" width={1300} height={400}></img>
        <h1>Welcome to Your Yoga Assist App! You can start your yoga journey here.</h1>

        {/* <button className="primary-button">Start Yoga Session</button>
        <br></br>
        <button className="secondary-button">Explore Yoga Poses</button> */}
      
        <h2>Explore Yoga Poses</h2>
        <div className="poses-section">
          <div className="horizontal-scroll">
            {poses.map((pose, index) => (
              <div key={index} className="pose-card">
                <img src={pose.imagePath} alt={pose.name} className="pose-image" />
                <div className="pose-details">
                  <h3>{pose.name}</h3>
                  <p>{pose.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="blog-section">
          <h2>Yoga Blog</h2>
          <p>Read inspiring stories from fellow yogis and share your own experiences!</p>
          <div className="blog-button">
            <RouterLink to="/blogs" className="tertiary-button">Visit Blog</RouterLink>
          </div>
        </div>
        <div className="blog-section">
          <h2>Practice Yoga</h2>
          <p>Practice with the right posture to get the most out of every yoga session!!</p>
          <div className="blog-button">
            <RouterLink to="/yogaDetection" className="tertiary-button">Visit Practice section</RouterLink>
          </div>
        </div>
        <div className="blog-section">
          <h2>Yoga Pose recommendation</h2>
          <p>Pose recommendation tailored to your ailment for optimized therapeutic benefits.</p>
          <div className="blog-button">
            <RouterLink to="/poses" className="tertiary-button">Visit Poses</RouterLink>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Homepage
// useEffect(() => {
  //   const token = localStorage.getItem('access_token')

  //   if(token){
  //     setIsLoggedIn(true);
  //     axios.get('http://127.0.0.1:5000/api/userData',{
  //       headers:{
  //         Authorization:`Bearer ${token}`
  //       }
  //     })
  //     .then(response => {
  //       setUserData(response.data)
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     })
  //   }
  // },[])
