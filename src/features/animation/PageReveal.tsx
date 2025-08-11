"use client";

export default function PageReveal() {
  return (
    <div className="hero">
      <div className="pre-loader">
        <p>Loading</p>
        <div className="counter">
          <div className="digit-1">
            <div className="num-0"></div>
            <div className="num1"></div>
          </div>
          <div className="digit-2">
            <div className="num">0</div>
            <div className="num">1</div>
            <div className="num">2</div>
            <div className="num">3</div>
            <div className="num">4</div>
            <div className="num">5</div>
            <div className="num">6</div>
            <div className="num">7</div>
            <div className="num">8</div>
            <div className="num">9</div>
            <div className="num">0</div>
          </div>
          <div className="digit-3">
            <div className="num">0</div>
            <div className="num">1</div>
            <div className="num">2</div>
            <div className="num">3</div>
            <div className="num">4</div>
            <div className="num">5</div>
            <div className="num">6</div>
            <div className="num">7</div>
            <div className="num">8</div>
            <div className="num">9</div>
          </div>
          <div className="digit-4">%</div>
        </div>
        <div className="progress-bar"></div>
      </div>
      <div className="hero-imgs"></div>
    </div>
  );
}
