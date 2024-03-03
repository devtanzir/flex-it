import React from "react";

const FooterBottom = () => {
  return (
    <>
      {/* <!-- Start back-to-top Button-->/ */}
      <div className="back-to-top" id="back-to-top">
        <i className="bi bi-arrow-up icon"></i>
      </div>
      {/* <!-- End back-to-top Button--> */}
      {/* <!-- Start privacy-policy-modal--> */}
      <div
        className="modal privacy-policy-modal fade"
        id="privacyPolicyModal"
        aria-labelledby="PrivacyPolicyModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable modal-xl">
          <div className="modal-content text-dark">
            <div className="modal-header">
              <h2 className="modal-title" id="PrivacyPolicyModalLabel">
                Privacy Policy Modal Title
              </h2>
              <button
                className="btn-close"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="content">
                <h4>privacy policy item Title goes here</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores saepe, labore sequi libero nesciunt optio quidem
                  iste, dolorum nostrum ex at. Recusandae ducimus aut autem
                  temporibus tempore rerum, consequuntur doloribus perspiciatis,
                  labore totam dolorem veritatis repellendus omnis illo sint ut?
                </p>
              </div>
              <div className="content">
                <h4>privacy policy item Title goes here</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores saepe, labore sequi libero nesciunt optio quidem
                  iste, dolorum nostrum ex at. Recusandae ducimus aut autem
                  temporibus tempore rerum, consequuntur doloribus perspiciatis,
                  labore totam dolorem veritatis repellendus omnis illo sint ut?
                </p>
              </div>
              <div className="content">
                <h4>privacy policy item Title goes here</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores saepe, labore sequi libero nesciunt optio quidem
                  iste, dolorum nostrum ex at. Recusandae ducimus aut autem
                  temporibus tempore rerum, consequuntur doloribus perspiciatis,
                  labore totam dolorem veritatis repellendus omnis illo sint ut?
                </p>
              </div>
              <div className="content">
                <h4>privacy policy item Title goes here</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores saepe, labore sequi libero nesciunt optio quidem
                  iste, dolorum nostrum ex at. Recusandae ducimus aut autem
                  temporibus tempore rerum, consequuntur doloribus perspiciatis,
                  labore totam dolorem veritatis repellendus omnis illo sint ut?
                </p>
              </div>
              <div className="content">
                <h4>privacy policy item Title goes here</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores saepe, labore sequi libero nesciunt optio quidem
                  iste, dolorum nostrum ex at. Recusandae ducimus aut autem
                  temporibus tempore rerum, consequuntur doloribus perspiciatis,
                  labore totam dolorem veritatis repellendus omnis illo sint ut?
                </p>
              </div>
              <div className="content">
                <h4>privacy policy item Title goes here</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores saepe, labore sequi libero nesciunt optio quidem
                  iste, dolorum nostrum ex at. Recusandae ducimus aut autem
                  temporibus tempore rerum, consequuntur doloribus perspiciatis,
                  labore totam dolorem veritatis repellendus omnis illo sint ut?
                </p>
              </div>
            </div>
            <div className="modal-footer">
              <button
                className="btn-solid"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Click to close
              </button>
              <button className="btn-outline" type="button">
                Do somthing else
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End privacy-policy-modal--> */}
    </>
  );
};

export default FooterBottom;
