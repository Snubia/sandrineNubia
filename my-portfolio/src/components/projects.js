import React, { Component } from 'react';
import prof from '../images/prof.jpeg';
import techy from '../images/techy.jpeg';
import glam from '../images/glam.jpeg';
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className='projects-grid'>
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '500', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '200px',
                background:
                  'url(https://still-caverns-19224.herokuapp.com/) center / cover',
              }}
            >
              <img
                src={techy}
                alt='avatar'
                style={{ height: '200px' }}
              />
              React Project #1
            </CardTitle>
            <CardText>
              A MERN social media platform for developers using React, Node,
              Redux and MongoDB
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>

              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(../images/techy.jpeg) center / cover',
              }}
            >
              <img
                src={prof}
                alt='avatar'
                style={{ height: '400px' }}
              />
              GlamHouse
            </CardTitle>
            <CardText>
              A complete E-commerce Website using Node.js, MongoDb, Ejs, Multer
              and stripe for payment carts
            </CardText>
            <CardActions border>
              <Button href="" colored>GitHub</Button>

              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: '500', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '200px',
                background:
                  'url(https://github.com/Snubia/Employee_Directoy/blob/master/dem.jpeg) center / cover',
              }}
            >
              <img
                src={glam}
                alt='avatar'
                style={{ height: '175px' }}
              />
              Employee Directory
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button href="https://limitless-citadel-93108.herokuapp.com/" colored>GitHub</Button>

              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className='projects-grid'>
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://still-caverns-19224.herokuapp.com/) center / cover',
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>
              A MERN social media platform for developers using React, Node,
              Redux and MongoDB
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>

              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover',
              }}
            >
              GlamHouse
            </CardTitle>
            <CardText>
              A complete E-commerce Website using Node.js, MongoDb, Ejs, Multer
              and stripe for payment carts
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>

              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://github.com/Snubia/Employee_Directoy/blob/master/dem.jpeg) center / cover',
              }}
            >
              Employee Directory
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>

              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>Other Languages</h1>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>This is MongoDB</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React/Node/MongoDB</Tab>
          <Tab>Javascript/HTML/CSS</Tab>
          <Tab>Others</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className='content'>{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
