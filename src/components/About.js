import React, { Component } from 'react';
import { Icon } from '@iconify/react';
import reactIcon from '@iconify/icons-logos/react';
import hljs from 'highlight.js';
import 'highlight.js/styles/vs2015.css';

class About extends Component {
    render() {
        hljs.highlightAll();

        if (this.props.sharedBasicInfo) {
            //var profilepic = 'images/' + this.props.sharedBasicInfo.image;
            //var profilepic = 'https://via.placeholder.com/150.jpg';
            var profilepic =
                'https://user-images.githubusercontent.com/54767632/210860114-57c84e0d-fc40-46e1-acf8-ddcdf0177283.jpeg';
        }
        if (this.props.resumeBasicInfo) {
            var sectionName = this.props.resumeBasicInfo.section_name.about;
            var hello = this.props.resumeBasicInfo.description_header;
            // var about = this.props.resumeBasicInfo.description;
        }

        var desjson = {
            name: 'kim, dong han',
            position: 'frontend developer',
            'tech-stack': {
                frontend: ['typescript', 'javascript', 'react', 'react-query', 'framer-motion', 'recoil'],
                backend: ['nodejs', 'express'],
                database: ['mongo', 'mysql', 'oracle'],
            },
            motto: 'no pain, no gain',
            love: ['incrementally', 'share with others'],
            hobby: ['toy-project', 'algorithm', 'fishing', 'workout'],
        };

        var atest = `const a = 1;\nconst b = 2;`;

        return (
            <section id="about">
                <div className="col-md-12">
                    <h1 style={{ color: 'black' }}>
                        <span>{sectionName}</span>
                    </h1>
                    <div className="row center mx-auto mb-5">
                        <div className="col-md-4 mb-5 center">
                            <div className="polaroid">
                                <span style={{ cursor: 'auto' }}>
                                    <img height="250px" src={profilepic} alt="Avatar placeholder" />
                                    {/* <Icon
                    icon={angularIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  /> */}
                                    <Icon
                                        icon={reactIcon}
                                        style={{ fontSize: '400%', margin: '9% 5% 0 5%' }}
                                    />
                                    {/* <Icon
                    icon={vueIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  /> */}
                                </span>
                            </div>
                        </div>

                        <div className="col-md-8 center">
                            <div className="col-md-10">
                                <div className="card">
                                    <div className="card-header">
                                        <span
                                            className="iconify"
                                            data-icon="emojione:red-circle"
                                            data-inline="false"
                                        ></span>{' '}
                                        &nbsp;{' '}
                                        <span
                                            className="iconify"
                                            data-icon="twemoji:yellow-circle"
                                            data-inline="false"
                                        ></span>{' '}
                                        &nbsp;{' '}
                                        <span
                                            className="iconify"
                                            data-icon="twemoji:green-circle"
                                            data-inline="false"
                                        ></span>
                                    </div>
                                    <div
                                        className="card-body font-trebuchet text-justify ml-3 mr-3"
                                        style={{
                                            height: 'auto',
                                            fontSize: '132%',
                                            lineHeight: '200%',
                                        }}
                                    >
                                        <br />
                                        <span className="wave">{hello} :ddd) </span>
                                        <br />
                                        <br />
                                        {/* <div>{'{'}</div>
                                        <div>{`\u00a0\u00a0"name": "kim, dong han",`}</div>
                                        <div>{`\u00a0\u00a0"position": "frontend developer",`}</div>
                                        <div>{`\u00a0\u00a0"tech-stack": {`}</div>
                                        <div>{`\u00a0\u00a0\u00a0\u00a0"frontend": [`}</div>
                                        <div>{`\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"typescript",`}</div>
                                        <div>{`\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"javascript",`}</div>
                                        <div>{`\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"react",`}</div>
                                        <div>{`\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"react-query",`}</div>
                                        <div>{`\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"framer-motion",`}</div>
                                        <div>{`\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"recoil",`}</div>
                                        <div>{`\u00a0\u00a0\u00a0\u00a0],`}</div>
                                        <div>{`\u00a0\u00a0\u00a0\u00a0"backend": ["nodejs", "express"],`}</div>
                                        <div>{`\u00a0\u00a0\u00a0\u00a0"database": ["mongo", "mysql", "oracle"]`}</div>
                                        <div>{`\u00a0\u00a0},`}</div>
                                        <div>{`\u00a0\u00a0"motto": "no pain, no gain",`}</div>
                                        <div>{`\u00a0\u00a0"love": ["incrementally", "share with others"],`}</div>
                                        <div>{`\u00a0\u00a0"hobby": ["toy-project", "algorithm", "fishing", "workout"]`}</div>
                                        <div>{'}'}</div> */}
                                        <pre>
                                            <code>{atest}</code>
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
