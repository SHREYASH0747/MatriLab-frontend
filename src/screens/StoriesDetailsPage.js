import React from "react";
import "../styles/storiesDetails.css";
import couple1 from "../assets/Slider2.jpg";
import Footer from "../components/Footer";

const StoriesDetailsPage = () => {
  return (
    <>
      <div className="details-container">
        <div className="container-max-width details-wrapper">
          <div className="image-with-text">
            <img src={couple1} alt="couple1" />
            <h2>Ellina and Torrens</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem,
              cupiditate earum expedita odio libero recusandae officiis vitae, nam
              qui similique cum placeat enim facilis excepturi! Atque beatae
              repudiandae, eligendi soluta sequi corrupti ullam culpa facilis iure
              quae? Perferendis excepturi provident itaque asperiores molestias
              tempora, ipsam magnam quo est eum eius dolores nisi suscipit
              sapiente voluptas dicta, quos illum deleniti iste. Laudantium enim
              deserunt illum sint veritatis iusto dolorum suscipit fuga magnam
              labore,
            </p>
            <p>
              alias eius ab quidem ad quibusdam placeat blanditiis rem quo vero
              illo debitis soluta reiciendis inventore excepturi. Error velit
              suscipit accusamus mollitia odit perferendis iusto quisquam in,
              deserunt veritatis, at sequi cumque eveniet dolorem iure
              perspiciatis libero ad reiciendis veniam repellendus, nihil adipisci
              laboriosam dolor provident. Consectetur numquam cum, at dolores et
              recusandae fuga quos distinctio accusantium itaque facere, magnam
              deserunt illo. Aspernatur minus obcaecati ab voluptates error
              laboriosam animi deserunt omnis consectetur pariatur, magnam fugit
              quos esse, reiciendis at veniam expedita impedit. Rem dolor
              incidunt, repudiandae velit officiis dolore voluptate error enim
              facilis debitis obcaecati quod eum minima quae culpa eius explicabo
              animi esse. Dolore harum dolores, cupiditate, voluptatum suscipit
              magni eligendi nobis non consectetur, adipisci in ratione culpa
              similique assumenda laborum quasi sed! Quam, saepe temporibus.
            </p>
          </div>
          <div className="popular-with-latest">
            {/* Popular post */}
            <div>
              <h4>Popular Post</h4>
              <div className="couple-story-card">
                <img src={couple1} alt="couple1" />
                <div className="couple-story-card-text">
                  <p className="couple-names">Ellina and Torrens</p>
                  <p className="story-highlight-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Autem
                  </p>
                </div>
              </div>

              <div className="couple-story-card">
                <img src={couple1} alt="couple1" />
                <div className="couple-story-card-text">
                  <p className="couple-names">Ellina and Torrens</p>
                  <p className="story-highlight-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Autem
                  </p>
                </div>
              </div>

              <div className="couple-story-card">
                <img src={couple1} alt="couple1" />
                <div className="couple-story-card-text">
                  <p className="couple-names">Ellina and Torrens</p>
                  <p className="story-highlight-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Autem
                  </p>
                </div>
              </div>

              <div className="couple-story-card">
                <img src={couple1} alt="couple1" />
                <div className="couple-story-card-text">
                  <p className="couple-names">Ellina and Torrens</p>
                  <p className="story-highlight-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Autem
                  </p>
                </div>
              </div>
            </div>

            {/* Latest post */}
            <div className="latest-post-container">
              <h4>Latest Post</h4>
              <div className="couple-story-card">
                <img src={couple1} alt="couple1" />
                <div className="couple-story-card-text">
                  <p className="couple-names">Ellina and Torrens</p>
                  <p className="story-highlight-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Autem
                  </p>
                </div>
              </div>

              <div className="couple-story-card">
                <img src={couple1} alt="couple1" />
                <div className="couple-story-card-text">
                  <p className="couple-names">Ellina and Torrens</p>
                  <p className="story-highlight-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Autem
                  </p>
                </div>
              </div>

              <div className="couple-story-card">
                <img src={couple1} alt="couple1" />
                <div className="couple-story-card-text">
                  <p className="couple-names">Ellina and Torrens</p>
                  <p className="story-highlight-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Autem
                  </p>
                </div>
              </div>

              <div className="couple-story-card">
                <img src={couple1} alt="couple1" />
                <div className="couple-story-card-text">
                  <p className="couple-names">Ellina and Torrens</p>
                  <p className="story-highlight-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Autem
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StoriesDetailsPage;
