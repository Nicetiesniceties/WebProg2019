import React, { Component } from 'react';
import './App.css';
import cat from './cat.jpg';
import dog from './dog.jpg';
import bunny from './bunny.jpg';
import Header from './class/header'
import Article from './class/article';
import Card from './class/card';
import Table from './class/table';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.table = {
      title: "Dynamic table for easy row/column manipulation",
      header: ["Type1", "Type2", "Type3", "Type4"],
      content: [
        ["R1C1", "R1C2", "R1C3", "R1C4"],
        ["R2C1", "R2C2", "R2C3", "R2C4"],
        ["R3C1", "R3C2", "R3C3", "R3C4"],
      ]
    };
  }

  render() {
    return (
      <div>
        <Header priority="1" text="THIS IS LEO'S BLOG" />
        <Header priority="2" text="WARNING! MANY SECRETS!" />
        
        <Header priority="4" text="It has been a busy week since the release of master exam result." />
        <Article text="Everything is like dream come true." />

        <Card img={cat} text="You can wrap anything you want in a link tag; here's an image for example." />
        <Article text="The cat (Felis catus) is a small carnivorous mammal. It is the only domesticated species in the family Felidae and often referred to as the domestic cat to distinguish it from wild members of the family. The cat is either a house cat, kept as a pet, or a feral cat, freely ranging and avoiding human contact. A house cat is valued by humans for companionship and for its ability to hunt rodents. About 60 cat breeds are recognized by various cat registries. Cats are similar in anatomy to the other felid species, with a strong flexible body, quick reflexes, sharp teeth and retractable claws adapted to killing small prey. They are predators who are most active at dawn and dusk (crepuscular)." />
        
        <Card img={dog} text="Once you create a component class, it is very easy to duplicate many cards with same template." />
        <Article text="The domestic dog (Canis lupus familiaris when considered a subspecies of the wolf or Canis familiaris when considered a distinct species) is a member of the genus Canis (canines), which forms part of the wolf-like canids, and is the most widely abundant terrestrial carnivore. The dog and the extant gray wolf are sister taxa as modern wolves are not closely related to the wolves that were first domesticated, which implies that the direct ancestor of the dog is extinct." />

        <Card img={bunny} text="See! Another card with only one line code." />
        <Article text="Rabbits are small mammals in the family Leporidae of the order Lagomorpha (along with the hare and the pika). Oryctolagus cuniculus includes the European rabbit species and its descendants, the world's 305 breeds of domestic rabbit. Sylvilagus includes 13 wild rabbit species, among them the 7 types of cottontail. The European rabbit, which has been introduced on every continent except Antarctica, is familiar throughout the world as a wild prey animal and as a domesticated form of livestock and pet."></Article>

        <Table table={this.table} />
      </div>
    );
  }
}

export default App;
