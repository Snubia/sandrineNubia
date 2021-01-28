import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render() {
    return (
      <div className='contact-body'>
        <Grid className='contact-grid'>
          <Cell col={6}>
            <h2>Sandrine Nubia</h2>
            <img src='contact.jpg' alt='avatar' style={{ height: '250px' }} />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className='contact-list'>
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '30px', fontFamily: 'Anton' }}
                  >
                    <i className='fa fa-phone-square' aria-hidden='true' />
                    (425) 435-5139
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '30px', fontFamily: 'Anton' }}
                  >
                    <i className='fa fa-envelope' aria-hidden='true' />
                    nunubabila@gmail.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
