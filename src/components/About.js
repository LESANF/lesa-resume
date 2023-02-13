import React, { Component } from 'react';
import { Icon } from '@iconify/react';
import reactIcon from '@iconify/icons-logos/react';
import hljs from 'highlight.js';
//import 'highlight.js/styles/vs2015.css';
import 'highlight.js/styles/base16/classic-light.css';
import Highlight from 'react-highlight';

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
            // var about = this.props.resumeBasicInfo.description;
        }

        return (
            <section id="about">
                <div className="col-md-12">
                    <h1 style={{ color: 'black' }}>
                        <span>{sectionName}</span>
                    </h1>
                    <br />
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
                                        <Highlight language="json">
                                            {`
{
    "resume":[
       {
          "name": "kim, dong han",
          "position": "frontend developer", 
          "phone numver": "010-3184-4567", 
          "email": "lesacat94@gmail.com", 
          "tech-stack":[
             {
                "frontend": ["typescript", "javascript", "react", "react-query", "framer-motion", "recoil", "styled-components"],
                "backend": ["nodejs", "express"],
                "database": ["mongo", "mysql", "oracle"],
             },
          ],
          "motto": "no pain, no gain",
          "love": ["incrementally", "share with others"],
          "hobby": ["toy-project", "algorithm", "fishing", "workout"],
       },
    ]
}
`}
                                        </Highlight>
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
