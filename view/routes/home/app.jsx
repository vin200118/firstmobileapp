import React, { Component } from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import Menu from './menu.jsx'
import {
  IonApp,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonButton,
  IonCardContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

class App extends Component {
   constructor(props){
       super(props);
       this.state = {
               chomps: 0,
             };
       this.unchomp = this.unchomp.bind(this);
       this.chomp = this.chomp.bind(this);
   }
            unchomp() {
            if (this.state.chomps > 0) {
              this.setState({
                chomps: this.state.chomps -= 1,
              });
            }
          }
          chomp() {
            this.setState({
              chomps: this.state.chomps += 1,
            });
          }
          
  render() {
      
    return (
      <IonApp>
      <Menu/>
       <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Alligator</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonCard>
            <img src="https://images.unsplash.com/photo-1549240923-93a2e080e653?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2165&q=80" />
            <IonCardHeader>
              <IonCardSubtitle>Crocco</IonCardSubtitle>
              <IonCardTitle>
                You've been chomped {this.state.chomps} times!
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonButton onClick={this.chomp}>Chomp</IonButton>
              <IonButton onClick={this.unchomp}>UnChomp</IonButton>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonApp>
    );
  }
}

export default App;