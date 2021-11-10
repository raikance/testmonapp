import MA from '../Assets/LB210482.jpg';
import MA2 from '../Assets/LB210167.jpg';
import MA3 from '../Assets/LB219761.jpg';
import MA4 from '../Assets/LB219949.jpg';

const Gallery = () => {
    return (

        <section>
            <div className="container-fluid">
                <div className="row"><h1>Gallery</h1></div>
                <div className="row">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={MA} class="d-block w-100" alt="Photo1" />
    </div>
    <div class="carousel-item">
      <img src={MA2} class="d-block w-100" alt="Photo2" />
    </div>
    <div class="carousel-item">
      <img src={MA3} class="d-block w-100" alt="Photo3" width="150" />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
                </div>
            </div>
        </section >
    )
}
export default Gallery;
