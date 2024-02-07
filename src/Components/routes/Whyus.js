import "../css/whyus.css"
import img1 from "../images/img1.png"
function Whyus() {
    return (
        <>
        <h3 style={{textAlign:"center", padding:"20px"}}>Why Us?</h3>
        <div className="container" id="whyus">
      <div className="left-image">
        <img src={img1} alt="Left Image" />
      </div>
      <div className="right-paragraph">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Pretium vulputate sapien nec sagittis
               aliquam malesuada. Viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas
               . Cursus in hac habitasse platea. Fusce id velit ut tortor pretium. Pellentesque diam volut
               pat commodo sed egestas egestas. Ornare arcu dui vivamus arcu. Et tortor consequat id porta
                nibh venenatis cras sed felis. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices. 
                Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper.
                        
        </p>
      </div>
    </div>
        </>
      );
}

export default Whyus;