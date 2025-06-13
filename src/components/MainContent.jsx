import imageKart1 from '../assets/kart-1.png'
import imageKart2 from '../assets/kart-2.png'

export const MainContent = () => {
  return (
    <main>
      <section>
        <div className="container">
          <h1>Take a break from work and go racing</h1>

          <div className="imagecontainer">
            <div className="feature-image">
              <img
                src={imageKart1}
                alt="A row of sleek, floating go-karts lined up on a transparent glass-like track that arcs into a nebula."
              />
              <p></p>
            </div>
            <div className="feature-image">
              <img
                src={imageKart2}
                alt="A mid-air loop spiraling through a gas cloud, with a rider flipping upside down mid-turn."
              />
              <p></p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
