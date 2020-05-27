import React, { Component } from "react";
import { Modal, ModalBody, ModalFooter, Button } from "reactstrap";

class ProjectModal extends Component {
  constructor(props) {
    super(props);
    this.state = { modal: false };
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  render() {
    return (
      <div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <button
            style={{ backgroundColor: "transparent", border: "none" }}
            onClick={this.toggle}
          >
            <DarkArrow width={"32px"} height={"32px"} />
          </button>
        </motion.div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={className}
          centered
        >
          <ModalBody
            className="modal__body"
            style={{ backgroundImage: `url(${img})` }}
          ></ModalBody>
          <ModalFooter className="modal__footer d-flex flex-column">
            <h1 className="modal__h1">{title}</h1>
            <p className="modal__p">{description}</p>
            <p className="modal__p">{lang}</p>
            <div className="modal__buttons d-flex justify-content-center align-items-center">
              {props.link ? (
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <Button className="modal__button btn btn-info m-2">
                      VISIT
                    </Button>
                  </a>
                </motion.div>
              ) : (
                ""
              )}
              {props.github ? (
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <a href={github} target="_blank" rel="noopener noreferrer">
                    <GithubBrands
                      width={"32px"}
                      height={"32px"}
                      className="m-2"
                      fill={"#17a2b8"}
                    />
                  </a>
                </motion.div>
              ) : (
                ""
              )}
            </div>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ProjectModal;
