enum Size {
  MOBILE_WIDTH = 180,
  DESKTOP_WIDTH = 428,

  MOBILE_IMAGE_WIDTH = 280,
  DESKTOP_IMAGE_WIDTH = 708,

  PIN_WIDTH = 20,

  MOBILE_VIEWBOX = 768,
}

import * as React from 'react';

interface State {
  coords: number,
}

export default class InteractiveExapmle extends React.Component<{}, State> {

  constructor(props) {
    super(props);
    this.state = {
      coords: 0,
    }

    this.scaleClickHandler = this.scaleClickHandler.bind(this);
    this.pinClickHandler = this.pinClickHandler.bind(this);
    this.beforeClickHandler = this.beforeClickHandler.bind(this);
    this.afterClickHandler = this.afterClickHandler.bind(this);
  }

  render() {
    const widthViewBox = document.documentElement.clientWidth;

    let clipSize = this.state.coords / Size.MOBILE_WIDTH * Size.MOBILE_IMAGE_WIDTH;

    if (widthViewBox > Size.MOBILE_VIEWBOX) {
      clipSize = this.state.coords / Size.DESKTOP_WIDTH * Size.DESKTOP_IMAGE_WIDTH;
    }

    const styleBeforeCat = {
      clip: `rect(auto, ${clipSize}px, auto, auto)`,
    };
    const styleAfterCat = {
      clip: `rect(auto, auto, auto, ${clipSize}px)`,
    };

    let pinCoords = this.state.coords;

    switch (true) {
      case widthViewBox < Size.MOBILE_VIEWBOX && pinCoords > (Size.MOBILE_WIDTH - Size.PIN_WIDTH):
        pinCoords = Size.MOBILE_WIDTH - Size.PIN_WIDTH;
        break;
      case pinCoords < Size.PIN_WIDTH:
        pinCoords = Size.PIN_WIDTH;
        break;
      case widthViewBox >= Size.MOBILE_VIEWBOX && pinCoords > (Size.DESKTOP_WIDTH- Size.PIN_WIDTH):
        pinCoords = Size.DESKTOP_WIDTH - Size.PIN_WIDTH;
        break;
    }

    const stylePin = {
      left: pinCoords
    }

    return (
      <section className="interactive-example">
        <div className="interactive-example__top-wrapper">
          <div className="interactive-example__before"
            style={styleBeforeCat}
          ></div>
          <div className="interactive-example__after"
            style={styleAfterCat}
          ></div>
        </div>
        <div className="interactive-exaple__bottom-wrapper">
          <button type="button" className="interactive-exaple__desc"
            onClick={this.beforeClickHandler}
          >
            Было
          </button>
          <p className="interactive-example__scale"
            onClick={this.scaleClickHandler}
          >
            <button className="interactive-exaple__pin"
              style={stylePin}
              onMouseDown={this.pinClickHandler}
            ><span className="visually-hidden">Ползунок</span></button>
          </p>
          <button type="button" className="interactive-exaple__desc"
            onClick={this.afterClickHandler}
          >
            Стало
          </button>
        </div>
      </section>
    );
  }

  componentDidMount() {
    const widthViewBox = document.documentElement.clientWidth;
    if (widthViewBox < Size.MOBILE_VIEWBOX) {
      this.setState({
        coords: Size.MOBILE_WIDTH / 2,
      })
      return;
    }
    this.setState({
      coords: Size.DESKTOP_WIDTH / 2,
    })
  }

  private scaleClickHandler(evt: React.MouseEvent<HTMLParagraphElement, MouseEvent>) {
    this.setState({
      coords: evt.nativeEvent.offsetX
    });
  }

  private pinClickHandler(evt: React.MouseEvent<HTMLSpanElement, MouseEvent>) {
    let startCoords = evt.clientX;

    const mouseMoveHandler = (moveEvt) => {
      const shift = startCoords - moveEvt.clientX;
      startCoords = moveEvt.clientX;
      this.setState((prevState) => {
        return {
          coords: prevState.coords - shift,
        }
      })
    };

    const mouseUpHandler = () => {
      document.removeEventListener(`mousemove`, mouseMoveHandler);
      document.removeEventListener(`mouseup`, mouseUpHandler);
    };

    document.addEventListener(`mousemove`, mouseMoveHandler);
    document.addEventListener(`mouseup`, mouseUpHandler);
  }

  private beforeClickHandler() {
    this.setState({
      coords: 0,
    });
  }

  private afterClickHandler() {
    this.setState({
      coords: Size.DESKTOP_WIDTH,
    });
  }
}
