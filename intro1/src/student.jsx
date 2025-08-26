import React from 'react'

const Student = () => {
    return (
        <>
            <section className="student-section">
                <div className="container">
                    <h1>This is Student Page</h1>
                    <p>Welcome to the student section of the website.</p>
                    <p>Here you can find resources and information for students.</p>

                    <ul>
                        <li>📘 Study Materials</li>
                        <li>🗓️ Academic Calendar</li>
                        <li>📅 Class Schedule</li>
                        <li>💬 Community Forum</li>
                        <li>🎓 Career Guidance</li>
                    </ul>

                    <button>Explore More</button>

                    <p className="note">Feel free to reach out if you have any questions!</p>
                </div>
            </section>
            
        </>
    )
}

export default Student