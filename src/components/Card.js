import React from 'react';

function Card() {
  return (
    <div className="carousel-container">
      <div className="carousel">
        <input type="radio" id="carousel-1" name="carousel[]" defaultChecked />
        <input type="radio" id="carousel-2" name="carousel[]" />
        <input type="radio" id="carousel-3" name="carousel[]" />

        <div className="carousel-items">
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFncmljdWx0dXJlfGVufDB8fDB8fHww" alt="Farming Image 1" />
          </div>
          <div className="carousel-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnUIadVZh83gwzF2gRJP2S2CTYB3TGk-j0Ykzlz_lrXQ&s"></img>
          </div>
          <div className="carousel-item">
            <img src="https://t4.ftcdn.net/jpg/03/57/54/77/360_F_357547735_aTZvm1ec8Uzgsd1aTukmFiOw4iXX2aKS.jpg" alt="Farming Image 3" />
          </div>
        </div>

        <div className="carousel-navigation">
          <label htmlFor="carousel-1"></label>
          <label htmlFor="carousel-2"></label>
          <label htmlFor="carousel-3"></label>
        </div>
      </div>
    </div>
  );
}

export default Card;
