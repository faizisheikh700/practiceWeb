import Head from "../components/Header"


export default function Home() {
  return (
      <>
      <Head/>
        {/* <h1>I am Home</h1> */}
        <div className="main">
      <div className="square1">
        <h6>Summer Collection</h6>
        <h2>Fall - Winter Collection 2024</h2>
        <p> <em>
            A specialist label creating luxury essentials. Ethically crafted with an unwavering
        commitment to exceptional quality.
            </em> 
        </p>
        <a href="#" className="primary-btn">"SHOP NOW"</a>
        
      </div>
      <div className="square2">
        <img src="https://clipart-library.com/image_gallery2/Shopping-Download-PNG.png" alt="" />
      </div>
    </div>
      </>
  )
  
}