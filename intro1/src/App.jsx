import React from 'react'
import Student from './student.jsx'
function App() {

  return (
    <>
      <header className="site-header">
        <div className="container">
          <h1>My Website</h1>
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h2>Welcome to My Website</h2>
          <p>This is a clean and simple HTML/CSS layout with a header and a section.</p>
          <button>Learn More</button>

          <div className="card-grid">
            <div className="card">
              <img src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" alt="Bird" />
              <h3>Card One</h3>
              <p>Beautiful bird in nature. Observe and admire its freedom.</p>
            </div>
            <div className="card">
              <img src="https://images.pexels.com/photos/5719543/pexels-photo-5719543.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Interior" />
              <h3>Card Two</h3>
              <p>Elegant interior design for peaceful and productive living.</p>
            </div>
            <div className="card">
              <img src="https://images.pexels.com/photos/30889111/pexels-photo-30889111/free-photo-of-scenic-cherry-blossoms-against-mountain-view.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Cherry Blossoms" />
              <h3>Card Three</h3>
              <p>Scenic cherry blossoms with a stunning mountain backdrop.</p>
            </div>
            <div className="card">
              <img src="https://images.pexels.com/photos/673847/pexels-photo-673847.jpeg" alt="Coffee" />
              <h3>Card Four</h3>
              <p>A perfect cup of coffee to start your productive day.</p>
            </div>
          </div>
        
        </div>
      </section>


      <Student />
    </>
  )

}

export default App
