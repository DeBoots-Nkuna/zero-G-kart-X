import imageKart1 from '../assets/kart-1.png'
import imageKart2 from '../assets/kart-2.png'
import mainImage from '../assets/g-z.png'
export const MainContent = () => {
  return (
    <main>
      <section className="section-one">
        <div className="container">
          <h2 className="subTitle">Zero G Kart Galaxy Racing</h2>
          <div className="main-content">
            <img
              className="main-image"
              src={mainImage}
              alt="Orange character driving an orange kart in space with full moon display and milky way road-track"
            />
            <p>
              Zero-G Kart X is a futuristic go-kart racing facility orbiting a
              distant exoplanet. Riders pilot magnetically levitating go-karts
              across colorless, transparent tracks suspended in space. Cosmic
              backdrops, asteroid dodging, and anti-gravity loops make it a
              heart-racing thrill.
            </p>
            <dl>
              <dt>Floating Karts:</dt>
              <dd>Hover-tech with gyro-stabilizers and ion boosters.</dd>
              <dt>Colorless Roads:</dt>
              <dd>
                Transparent, plasma-rimmed tracks that twist through meteor
                fields and station rings.
              </dd>
              <dt>Zero-G Mode:</dt>
              <dd>
                A toggle that flips gravity mid-track, sending riders spinning
                through nebula tunnels.
              </dd>
              <dt>AI Hologram Opponents:</dt>
              <dd>Race against AI avatars projected in your AR helmet.</dd>
              <dt>Time-Warp Laps:</dt>
              <dd>
                Parts of the track bend time—lap speeds vary by dimension flux!
              </dd>
            </dl>
          </div>
        </div>
      </section>
      <section className="section-two">
        <div className="container">
          <div className="image-container">
            <div className="feature-image">
              <img
                className="feature-image"
                src={imageKart1}
                alt="A row of sleek, floating go-karts lined up on a transparent glass-like track that arcs into a nebula."
              />
              <p>
                A row of sleek, floating go-karts lined up on a transparent
                glass-like track that arcs into a nebula. Futuristic racers in
                reflective suits and helmet visors with a galactic glow from a
                nearby purple sun, track edges shimmer with blue plasma.
              </p>
            </div>
            <div className="feature-image">
              <img
                className="feature-image"
                src={imageKart2}
                alt="A mid-air loop spiraling through a gas cloud, with a rider flipping upside down mid-turn."
              />
              <p>
                A mid-air loop spiraling through a gas cloud, with a rider
                flipping upside down mid-turn.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
