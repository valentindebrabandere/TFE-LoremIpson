import React from 'react';
import './Window.scss';
import './styles/style-modernMac.scss'

interface WindowProps {
  children: React.ReactNode;
}

const Window: React.FC<WindowProps> = ({ children }) => {
  let wrappedChild;

  if (React.isValidElement(children)) {
    wrappedChild = (
      <div className="c-window" data-type="window" data-drag="draggable-dragger">
          <div className="c-window__head js-window__head">
            <ul className="c-window__controls">
              <li>
                <button
                  className="c-window__control c-window__control--quit"
                  onClick={() => children.props.onQuit()}
                >
                  <svg   
                    className="c-window__control-icon"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.29468 1.55566L5.81547 5.07645M9.36575 8.62673L5.81547 5.07645M5.81547 5.07645L9.33429 1.55763M5.81547 5.07645L2.26322 8.6287"
                      stroke="black"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </li>
              <li>
                <button
                  data-window-control="hide"
                  className="c-window__control c-window__control--hide"
                  onClick={() => console.log('hide')}
                >
                  <svg
                    className="c-window__control-icon"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.409668 5.10791H10.4097"
                      stroke="black"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </li>
              <li>
                <button
                  data-window-control="scale"
                  className="c-window__control c-window__control--scale"
                  onClick={() => console.log('scale')}
                >
                  <svg
                    className="c-window__control-icon"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.32202 1.84436H8.8491V8.37143H2.32202V1.84436Z"
                      stroke="black"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
          <div className="c-window__content js-window__content">
            {React.cloneElement(children)}
          </div>
      </div>
    );
  } else {
    wrappedChild = 
    <div className="c-window" data-type="window" data-drag="draggable-dragger" >
      <h1>Children app in not valid</h1>
    </div>;
  }

  return <>{wrappedChild}</>;
};

export default Window;