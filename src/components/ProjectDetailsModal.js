import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from '../scss/light-slider.scss';
import AwesomeSliderStyles2 from '../scss/dark-slider.scss';
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css';
class ProjectDetailsModal extends Component {
    render() {
        if (this.props.data) {
            console.log(this.props.data);
            const technologies = this.props.data.technologies;
            const images = this.props.data.images;
            var title = this.props.data.title;
            //var description = this.props.data.description;
            var url = this.props.data.url;
            if (this.props.data.technologies) {
                var tech = technologies.map((icons, i) => {
                    return (
                        <li className="list-inline-item mx-3" key={i}>
                            <span>
                                <div className="text-center">
                                    <i className={icons.class} style={{ fontSize: '300%' }}>
                                        <p className="text-center" style={{ fontSize: '30%' }}>
                                            {icons.name}
                                        </p>
                                    </i>
                                </div>
                            </span>
                        </li>
                    );
                });
                if (this.props.data.images) {
                    var img = images.map((elem, i) => {
                        return <div key={i} data-src={elem} />;
                    });
                }
            }
        }
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="modal-inside"
            >
                <span onClick={this.props.onHide} className="modal-close">
                    <i className="fas fa-times fa-3x close-icon"></i>
                </span>
                <div className="col-md-12">
                    <div className="col-md-10 mx-auto" style={{ paddingBottom: '50px' }}>
                        <div className="slider-tab">
                            <span
                                className="iconify slider-iconfiy"
                                data-icon="emojione:red-circle"
                                data-inline="false"
                                style={{ marginLeft: '5px' }}
                            ></span>{' '}
                            &nbsp;{' '}
                            <span
                                className="iconify slider-iconfiy"
                                data-icon="twemoji:yellow-circle"
                                data-inline="false"
                            ></span>{' '}
                            &nbsp;{' '}
                            <span
                                className="iconify slider-iconfiy"
                                data-icon="twemoji:green-circle"
                                data-inline="false"
                            ></span>
                        </div>
                        <AwesomeSlider
                            cssModule={[AwesomeSliderStyles, AwesomeSliderStyles2]}
                            animation="scaleOutAnimation"
                            className="slider-image"
                        >
                            {img}
                        </AwesomeSlider>
                    </div>
                    <div className="col-md-10 mx-auto">
                        <h3 style={{ padding: '5px 5px 0 5px' }}>
                            {title}
                            {url ? (
                                <a href={url} target="_blank" rel="noopener noreferrer" className="link-href">
                                    <i
                                        className="fas fa-external-link-alt"
                                        style={{ marginLeft: '10px' }}
                                    ></i>
                                </a>
                            ) : null}
                        </h3>
                        <div className="modal-description">
                            <h3>어떤 상황에서 쓰이는가 ?</h3>
                            <br />
                            <blockquote
                                style={{
                                    border: '1px solid #ffc686',
                                    marginLeft: '0px',
                                    marginRight: '0px',
                                    paddingLeft: '20px',
                                    paddingRight: '20px',
                                    borderLeft: '10px solid #ffc686',
                                }}
                            >
                                <p style={{ display: 'inline' }}>
                                    requestAnimationFrame 을 적용한 코드를 살펴보자.
                                    <br />
                                    해당 애니메이션은 속도를 감속시키는 계산식을 적용한 것이다.
                                    <br />
                                    (목표 지점 - 현재 지점) * 0.1 계산식을 설명해보자면, 목표 지점에서 현재
                                    지점을 빼면 총 이동거리가 나오게되고 그 값에 10% 를 구한 것이다.
                                    <br />
                                    총 이동 거리는 계속 줄어들 것이고, 결국 0에 수렴할 것이다.
                                    <br />
                                    이러한 계산식으로 감속하는 애니메이션을 구현한다.
                                </p>
                            </blockquote>
                        </div>
                        <div className="col-md-12 text-center">
                            <ul className="list-inline mx-auto">{tech}</ul>
                        </div>
                    </div>
                </div>
            </Modal>
        );
    }
}

export default ProjectDetailsModal;
