import diablo from '../Assets/diablo.png';

const Home = () => {
    return (

        <section>
            <div className="container-fluid">
                <div className="row"><h1>Home</h1></div>
                <div className="row">
                    <div className="col-12-md-6">
                        <img className="img-fluid" src={diablo} alt="diablo" width="300"></img>
                    </div>
                    <div className="col-12-md-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</div>
                    <button type="button" class="btn btn-primary">Primary</button>
                </div>
            </div>
        </section>
    )
}
export default Home;
