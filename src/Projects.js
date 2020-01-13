import React, { Component }  from 'react';
import './styles/projects.css';
export default class Projects  extends Component {
  componentWillMount() {
    
  }

  render() {
    return (
      <React.Fragment>
        <main id="project-main">  
          <section id="project-section">
            <article className="project-article"> 
            <div className="projImg">               
                <h3 className="projectTitle">Project: Delivery Tracking App</h3>
                <a href="https://github.com/selvinor/delivery-tracking-client"><img src={require('./img/deliveryTracking.png')} alt="delivery tracking"/></a>
              </div>
              <div className="summary">
                <p><button><a href='https://github.com/selvinor/delivery-tracking-client'>GitHub Link</a></button></p>

                <p><span className="bold">Delivery Tracking App</span> A responsive web app that provides order entry, pickup and delivery scheduling, routing and tracking with a central depot.
                <span className="techStack">Tech Stack: React, Redux, Node.js, Express, Mongo, Mongoose, Bcrypt, Passport</span></p>
              </div>            
            </article> 
            <article className="project-article">
              <div className="projImg2">
              <h3 className="projectTitle">Project: Houseplant Manager</h3>
                <p><a href="https://github.com/selvinor/aws-iot-device-manager"><img className={"plantObject"} src={require('./img/plantObject.png')} width="150px" height="150px" alt={"plant reference"}/></a></p>
                <p><a href="https://github.com/selvinor/aws-iot-provisioning"><img className={"plantObject"} src={require('./img/aws-iot-device-provisioning.png')} width="150px" height="150px" alt={"plant reference"}/></a></p>            
              </div>
              <div className="summary">
                <p><span className="bold">AWS IoT Device Manager</span> A responsive mobile app that updates AWS IoT devices with  reference values  of plant attributes and optimal ranges for temperature, ph, salts for comparison with plant sensor readings and trigger responses.
                <span className="techStack">Tech Stack: React Native, Expo, ReactHooks, Amplify,  AWD Cloud Formation, Cognito</span></p>
              </div>            
                <p><button><a href='https://github.com/selvinor/aws-iot-device-manager '>GitHub Link</a></button></p>
                <div className="summary">
                <p><span className="bold">AWS IoT Provisioning</span> Automates provisioning of IoT devices. The device sends it's thing name to an API gateway. If the device has the permission to be provisioned it receives as a result, the region, iot endpoint, private key and certificate. With this information the device is able to connect to the endpoint where it has been provisioned and may publish data.
                <span className="techStack">Tech Stack: Python, AWS Lambda, AWS DynamoDB, Raspberry Pi</span></p>
                </div>   
                <p><button><a href='https://github.com/selvinor/aws-iot-provisioning'>GitHub Link</a></button></p>         
            </article> 
            <article className="project-article">
              <div className="project">
                <div className="projImg">
                <h3 className="projectTitle">Project: Blooms Florist Subscriptions</h3>
                  <a href="https://blooms-pdx.herokuapp.com/"><img src={require('./img/blooms_screen_640.jpg')} alt="blooms"/></a>
                </div>
              </div>
              <div className="summary">
                <p><button><a href='https://github.com/selvinor/selvin-subscription-client'>GitHub Link</a></button><button className="livelink"><a href='https://blooms-pdx.herokuapp.com/'>Live Link</a></button></p>
                <p><span className="bold">Blooms Subscriptions</span> is a florist app that enables customers to send flowers to a recipient at a residence or business according to a schedule.
                <span className="techStack">Tech Stack: React, Redux, Node.js, Express, Mongo, Mongoose, Bcrypt, Passport</span></p>
              </div>            
            </article> 
            <article className="project-article">
              <div className="project">
                <div className="projImg">
                  <h3 className="projectTitle">Project: Cozy Spaces</h3>
                  <a href="https://cozy-spaces-client.herokuapp.com/"><img src={require('./img/cozy_640.jpg')} alt="cozy"/></a>
                </div>
              </div>
              <div className="summary">
                <p><button><a href='https://github.com/thinkful-ei23/cozy-spaces-client'>GitHub Link</a></button><button className="livelink"><a href='https://cozy-spaces-client.herokuapp.com/'>Live Link</a></button></p>
                <p><span className="bold">Cozy Spaces</span> is an app that allows people to find and recommend cozy spots to hang out in their vicinity.  
                  They can rate places and even add their own favorite cozy spaces.<span className="techStack">
                Tech Stack: React, Redux, Node.js, Express, Mongo, Mongoose, Bcrypt, Passport></span></p>
              </div>
            </article> 
            <article className="project-article">
              <div className="project">
                <div className="projImg">
                  <h3 className="projectTitle">Project: Blooms Orders</h3>
                  <img className="about-img" src={require('./img/bloomsOrders_640.jpg')} alt="emoji"/>
                </div>
              </div>
              <div className="summary">
                  <p><button><a href='https://github.com/selvinor/order-entry-app'>GitHub Link</a></button><button className="livelink"><a href='https://emoji-space-rep-client.herokuapp.com'>Live Link</a></button></p>
                  <p><span className="bold">Blooms Orders</span> is a mobile app built with React Native that enables a florist to take walk-in and phone orders using a tablet or phone.
                  The app is intended to integrate with Square POS to synch online orders and provide a single source of truth for all orders.
                  <span className="techStack">Tech Stack: React Native, Redux, Node.js, Express, Mongo, Mongoose</span></p>
              </div>
            </article> 
            <article className="project-article">
              <div className="project">
                <div className="projImg">
                <h3 className="projectTitle">Project: Emoji Madness</h3>
                  <a href="https://emoji-space-rep-client.herokuapp.com"><img className="about-img" src={require('./img/emojiScreens.jpg')} alt="emoji"/></a>
                </div>
              </div>
              <div className="summary">
                <p><button><a href='https://github.com/thinkful-ei23/Client-Emoji-Tim-Sel'>GitHub Link</a></button><button className="livelink"><a href='https://emoji-space-rep-client.herokuapp.com'>Live Link</a></button></p>
                <p><span className="bold">Emoji Madness</span> is an app will help you to learn the emoji language, which is based on symbols that easily bridge language barriers, save time, and add emotional nuance that is difficult to achieve in brief text exchanges. The app utilizes Spaced Repetition Learning to help users retain knowledge easier by testing them more often on the things they forget most frequently.
                <span className="techStack">Tech Stack: React, Redux, Node.js, Express, Mongo, Mongoose, Bcrypt, Passport</span></p>
              </div>
            </article> 
          </section>
        </main>    
      </React.Fragment>  
    );
  }
}